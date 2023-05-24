<script lang="ts">
  import Vue from "vue";
  import {Component} from "vue-property-decorator";
  import {tagListModel} from "@/models/tagListModel";

  @Component
  export default class Tags extends Vue {
    tags = window.tagList;
    selectedTags: string[] = [];

    toggle(tagValue: string) {
      const index = this.selectedTags.indexOf(tagValue);
      if (index >= 0) {
        this.selectedTags.splice(index, 1);
      } else {
        this.selectedTags.push(tagValue);
      }
      this.$emit('update:value', this.selectedTags);
    }

    createTag() {
      tagListModel.create();
    }
  }
</script>

<template>
  <div class="tags">
    <ul class="current">
      <li v-for="tag in tags" :key="tag.id" @click="toggle(tag.value)" :class="{selected: selectedTags.indexOf(tag.value) >= 0}">{{tag.value}}</li>
    </ul>
    <div class="new">
      <button @click="createTag">新建标签</button>
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
  background: white;
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