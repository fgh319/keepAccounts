<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import dayjs from "dayjs";

@Component({
  computed: {
    dayjs() {
      return dayjs
    }
  }
})
export default class Date extends Vue {
  @Prop(String) value!: string;


}
</script>

<template>
  <div>
    <label class="date">
      <span class="name">日期</span>
      <input @change="$emit('update:value', $event.target.value)" type="date" :value="value" />
    </label>
  </div>
</template>

<style scoped lang="scss">
.date {
  padding-left: 16px;
  display: flex;
  align-items: center;

  .name {
    padding-right: 16px;
  }

  input {
    line-height: 3em;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
    font-size: 14px;
  }
}
</style>