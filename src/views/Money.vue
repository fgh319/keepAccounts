<script lang="ts">
import Tags from "@/components/Money/Tags.vue";
import Notes from "@/components/Money/Notes.vue";
import Types from "@/components/Money/Types.vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import Vue from "vue";
import { Component} from "vue-property-decorator";

@Component({
  components: {
    Tags,
    Notes,
    Types,
    NumberPad,
  },
})
export default class Money extends Vue {
  recordList:RecordItem[] = window.recordList;

  record:{
    tags: string[];
    notes: string;
    type: string;
    amount: number;
    createdAt?: Date;
  } = {
    tags: [],
    notes: "",
    type: "-",
    amount: 0,
  };

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
    window.createRecord(this.record)
  }
}
</script>

<template>
  <Layout class-prefix="layout">
    <Tags  @update:value="onUpdateTags" />
    <Notes @update:value="onUpdateNotes" />
    <Types :value.sync="record.type" />
    <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"  />
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
