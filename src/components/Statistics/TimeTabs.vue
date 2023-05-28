<script lang="ts">
import Vue from "vue";
import {Component, Prop} from "vue-property-decorator";

@Component
export default class TimeTab extends Vue {
  @Prop(String) time!:string;

  selectTime(time: string) {
    this.$emit('update:time', time)
  }

}
</script>

<template>
  <div>
    <ul class="time">
      <li @click="selectTime('day')" :class="{ selected: time === 'day' }">
        按天
      </li>
      <li @click="selectTime('week')" :class="{ selected: time === 'week' }">
        按周
      </li>
      <li @click="selectTime('month')" :class="{ selected: time === 'month' }">
        按月
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.time {
  display: flex;
  background: #c4c4c4;

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    height: 36px;
    position: relative;

    &.selected::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3px;
      background: #333;
    }
  }
}
</style>