<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class Types extends Vue {
  @Prop(String) readonly value!: string;


  selectType(type: string) {
    // 选择支出或收入
    this.$emit("update:value", type);
  }
}
</script>

<template>
  <div>
    <ul class="types">
      <li @click="selectType('-')" :class="value === '-' && 'selected'">
        支出
      </li>
      <li @click="selectType('+')" :class="value === '+' && 'selected'">
        收入
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/helper.scss";

.types {
  background: #c4c4c4;
  display: flex;
  text-align: center;
  font-size: 24px;

  > li {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
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