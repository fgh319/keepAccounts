<script lang="ts">
import Tags from "@/components/Money/Tags.vue";
import Notes from "@/components/Money/Notes.vue";
import Types from "@/components/Money/Types.vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import Vue from "vue";
import {Component, Watch} from "vue-property-decorator";

type Record = {
  tags: string[];
  notes: string;
  type: string;
  amount: number;
};

@Component({
  components: {
    Tags,
    Notes,
    Types,
    NumberPad,
  },
})
export default class Money extends Vue {
  tags = ["衣", "食", "住", "行", "娱乐", "其他"];
  record: Record = {
    tags: [],
    notes: "",
    type: "-",
    amount: 0,
  };
  recordList:Record[] = [];

  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
  }

  saveRecord() {
    let clone = JSON.parse(JSON.stringify(this.record));
    this.recordList.push(clone);
    console.log(this.recordList);
  }

  @Watch('recordList')
  onRecordChange() {
    localStorage.setItem('recordList', JSON.stringify(this.recordList));
  }

}
</script>

<template>
  <Layout class-prefix="layout">
    {{ record }}
    <Tags :data-source.sync="tags" @update:value="onUpdateTags" />
    <Notes @update:value="onUpdateNotes" />
    <Types :value.sync="record.type" />
    <NumberPad @update:value="onUpdateAmount" @submit="saveRecord" />
  </Layout>
</template>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column;
}
</style>
<style lang="scss" scoped>
@import "@/assets/styles/helper.scss";
</style>