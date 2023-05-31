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
@import "@/assets/styles/helper.scss";

.tabs {
  display: flex;
  font-size: 20px;
  background: #c4c4c4;
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    height: 48px;
    position: relative;
    &.selected::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: $color-highlight;
    }
  }
}
</style>