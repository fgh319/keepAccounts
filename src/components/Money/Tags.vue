<script lang="ts">
  import Vue from "vue";
  import {Component, Prop} from "vue-property-decorator";

  @Component
  export default class Tags extends Vue {
    @Prop(Array) dataSource: string[] | undefined;
    selectedTags: string[] = [];

    toggle(tag: string) {
      const index = this.selectedTags.indexOf(tag);
      if (index >= 0) {
        this.selectedTags.splice(index, 1);
      } else {
        this.selectedTags.push(tag);
      }
    }
  }
</script>

<template>
  <div class="tags">
    <ul class="current">
      <li v-for="tag in dataSource" :key="tag" @click="toggle(tag)" :class="{selected: selectedTags.indexOf(tag) >= 0}">{{tag}}</li>
    </ul>
    <div class="new">
      <button>新增标签</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.tags {
  padding: 16px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: auto;

  .current {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;

    li {
      background: #d9d9d9;
      height: 26px;
      line-height: 26px;
      border-radius: 4px;
      padding: 0 14px;
      margin-top: 6px;
      margin-right: 8px;
      &.selected {
        background: #777;
        color: #fff;
      }
    }
  }

  .new {
    padding-top: 8px;

    button {
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 4px;
    }
  }
}
</style>