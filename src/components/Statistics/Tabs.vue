<script lang="ts">
  import Vue from "vue";
  import {Component, Prop} from "vue-property-decorator";

  @Component
  export default class Tabs extends Vue {
    @Prop(String) type!:string;
    selectType(type: string) {
      this.$emit('update:type', type)
    }
  }
</script>

<template>
  <div>
    <ul class="tabs">
      <li @click="selectType('-')" :class="type === '-' && 'selected'">支出</li>
      <li @click="selectType('+')" :class="type === '+' && 'selected'">收入</li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.tabs {
  display: flex;
  font-size: 20px;
  background: white;
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    height: 48px;
    &.selected {
      background: #c4c4c4;
    }
  }
}
</style>