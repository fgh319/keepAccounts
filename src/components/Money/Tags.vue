<script lang="ts">
  import Vue from "vue";
  import {Component, Prop} from "vue-property-decorator";

  @Component
  export default class Tags extends Vue {
    @Prop(Array) dataSource!: string[];
    selectedTags: string[] = [];

    toggle(tag: string) {
      const index = this.selectedTags.indexOf(tag);
      if (index >= 0) {
        this.selectedTags.splice(index, 1);
      } else {
        this.selectedTags.push(tag);
      }
      this.$emit('update:value', this.selectedTags);
    }

    create() {
      const tagName = window.prompt("请输入标签名");
      if (!tagName) {
        alert("标签名不能为空");
      } else if (this.dataSource?.indexOf(tagName) >= 0){
        alert('标签名已存在')
        return;
      } else {
        this.$emit('update:dataSource', [...this.dataSource, tagName]);
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
      <button @click="create">新建标签</button>
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