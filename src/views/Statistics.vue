<script lang="ts">
import { Vue } from "vue-property-decorator";
import { Component } from "vue-property-decorator";
import store from "@/store";
import Tabs from "@/components/Statistics/Tabs.vue";
import TimeTabs from "@/components/Statistics/TimeTabs.vue";
import dayjs from "dayjs";

@Component({
  components: { TimeTabs, Tabs },
})
export default class Statistics extends Vue {
  type = "-";
  time = "day";

  created() {
    store.commit("fetchRecords");
  }

  get recordList() {
    return store.state.recordList;
  }

  get groupedList() {
    if (this.recordList.length === 0) return [];
    const clone = JSON.parse(JSON.stringify(this.recordList));
    const newList = clone.filter((r:RecordItem) => r.type === this.type).sort((a:RecordItem, b:RecordItem) => dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf());
    const result:{title: string, records: RecordItem[], total?: number}[] = [{title: dayjs(newList[0].createdAt).format('YYYY-MM-DD'), records: [newList[0]]}];
    for (let i = 1; i < newList.length; i++) {
      const current = newList[i];
      const last = result[result.length - 1];
      if (dayjs(last.title).isSame(dayjs(current.createdAt), 'day')) {
        last.records.push(current);
      } else {
        result.push({title: dayjs(current.createdAt).format('YYYY-MM-DD'), records: [current]});
      }
    }
    result.map(group => {
      group.total = group.records.reduce((sum, record) => sum + record.amount, 0)
    })
    return result;
  }

  tagString(tags: string[]) {
    return tags.length === 0 ? '无' : tags.join(',');
  }

  beautify(title: string) {
    const date = dayjs(title);
    const now = dayjs();
    if (date.isSame(now, 'day')) {
      return '今天';
    } else if (date.isSame(now.subtract(1, 'day'), 'day')) {
      return '昨天';
    } else if (date.isSame(now.subtract(2, 'day'), 'day')) {
      return '前天';
    } else if (date.isSame(now, 'year')) {
      return date.format('M月D日')
    } else {
      return date.format('YYYY年M月D日')
    }
  }
}
</script>

<template>
  <Layout>
    <Tabs :type.sync="type"></Tabs>
<!--    <TimeTabs :time.sync="time"></TimeTabs>-->
    <ol class="data">
      <li v-for="(group, index) in groupedList" class="group" :key="index">
        <h4 class="title">{{ beautify(group.title) }}<span>￥{{group.total}}</span></h4>
        <ol class="records">
          <li v-for="(record, index) in group.records" :key="index">
            <span>{{tagString(record.tags)}}</span>
            <span class="note">{{record.notes}}</span>
            <span>￥{{record.amount}}</span>
          </li>
        </ol>
      </li>
    </ol>

  </Layout>
</template>

<style scoped lang="scss">
  .title {
    padding: 0 8px;
    line-height: 2em;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .records {
    background: white;
    > li {
      padding: 0 8px;
      line-height: 2em;
      border-bottom: 1px solid #eee;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .note {
        color: #999;
        font-size: 14px;
        margin-right: auto;
        margin-left: 6px;
      }
    }
  }
</style>