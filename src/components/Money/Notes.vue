<script lang="ts">
import Vue from "vue";
import {Component, Prop} from "vue-property-decorator";

  @Component
  export default class Notes extends Vue {
    @Prop(String) value!: string;

  }
</script>

<template>
  <div>
    <label class="notes">
      <span class="name">备注</span>
      <input @change="$emit('update:value', $event.target.value)" :value="value" type="text" placeholder="在这里添加备注" />
    </label>
  </div>
</template>

<style scoped lang="scss">
.notes {
  padding-left: 16px;
  display: flex;
  align-items: center;

  .name {
    padding-right: 16px;
  }

  input {
    height: 64px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
    font-size: 14px;

  }
}
</style>