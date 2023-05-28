<script lang="ts">
import { Vue } from "vue-property-decorator";
import { Component } from "vue-property-decorator";
import store from "@/store";
import Tabs from "@/components/Statistics/Tabs.vue";
import TimeTabs from "@/components/Statistics/TimeTabs.vue";

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

  get result() {
    const hashTable: {
      [date: string]: {
        title: string;
        records: RecordItem[];
      };
    } = {};
    for (let record of this.recordList) {
      const [date] = record.createdAt!.split("T");
      hashTable[date] = hashTable[date] || { title: date, records: [] };
      hashTable[date].records.push(record);
    }
    console.log(hashTable);
    return hashTable;
  }

  tagString(tags: string[]) {
    return tags.length === 0 ? '无' : tags.join(',');
  }
}
</script>

<template>
  <Layout>
    <Tabs :type.sync="type"></Tabs>
    <TimeTabs :time.sync="time"></TimeTabs>
    <ol class="data">
      <li v-for="group in result" class="group" :key="group.title">
        <h3 class="title">{{ group.title }}</h3>
        <ol class="records">
          <li v-for="record in group.records" :key="record.createdAt">
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