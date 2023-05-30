<script lang="ts">
import { Vue } from "vue-property-decorator";
import { Component } from "vue-property-decorator";
import store from "@/store";
import Tabs from "@/components/Statistics/Tabs.vue";
import dayjs from "dayjs";

@Component({
  components: {Tabs },
})
export default class Statistics extends Vue {
  type = "-";

  created() {
    store.commit("fetchRecords");
  }

  get recordList() {
    return store.state.recordList;
  }

  get groupedList() {
    if (this.recordList.length === 0) return [];
    const clone = JSON.parse(JSON.stringify(this.recordList));
    const inOut = clone.filter((r:RecordItem) => r.type === this.type);
    if (inOut.length === 0) return [];
    const newList = inOut.sort((a:RecordItem, b:RecordItem) => dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf());
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
    return tags.length === 0 ? '无标签' : tags.join('，');
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
    <ol v-if="groupedList.length > 0" class="data">
      <li v-for="(group, index) in groupedList" class="group" :key="index">
        <h3 class="title">{{ beautify(group.title) }}<span>￥{{group.total}}</span></h3>
        <ol class="records">
          <li v-for="(record, index) in group.records" :key="index">
            <span>{{tagString(record.tags)}}</span>
            <span class="note">{{record.notes}}</span>
            <span>￥{{record.amount}}</span>
          </li>
        </ol>
      </li>
    </ol>
    <div v-else class="nodata">
      目前没有相关记录
    </div>
  </Layout>
</template>

<style scoped lang="scss">
  .title {
    padding: 4px 8px;
    line-height: 2em;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .records {
    background: white;
    > li {
      padding: 4px 8px;
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

  .nodata {
    text-align: center;
    padding:26px;
  }
</style>