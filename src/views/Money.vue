<script lang="ts">
import Tags from "@/components/Money/Tags.vue";
import Notes from "@/components/Money/Notes.vue";
import Types from "@/components/Money/Types.vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import Vue from "vue";
import { Component} from "vue-property-decorator";
import store from "@/store/index";

@Component({
  components: {
    Tags,
    Notes,
    Types,
    NumberPad,
  },
})
export default class Money extends Vue {
  record:{
    tags: string[];
    notes: string;
    type: string;
    amount: number;
    createdAt?: string;
  } = {
    tags: [],
    notes: "",
    type: "-",
    amount: 0,
  };

  created() {
    store.commit('fetchRecords')
  }

  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }

  onUpdateAmount(value: string) {
    if (parseFloat(value) === 0) {
      window.alert('请输入金额');
    } else {
      this.record.amount = parseFloat(value);
      store.commit('createRecord', this.record)
      this.record.notes = '';
    }

  }

}
</script>

<template>
  <Layout class-prefix="layout">
    <Tags  @update:value="onUpdateTags" />
    <Notes :value.sync="record.notes" />
    <Types :value.sync="record.type" />
    <NumberPad @update:value="onUpdateAmount"  />
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
