<script lang="ts">
  import Vue from "vue";
  import {Component} from "vue-property-decorator";
  import {tagListModel} from "@/models/tagListModel";


  @Component
  export default class Label extends Vue {
    tags = tagListModel.fetch();
    tagValues = this.tags.map(item => item.value)

    createTag() {
      const tagName = window.prompt('请输入标签名：');
      if(!tagName) {
        alert('标签名不能为空2')
      } else if(this.tagValues.indexOf(tagName) >= 0 ){
        alert('标签名已存在')
        return;
      } else {
        tagListModel.pushTag({id: tagName, value: tagName});
      }
    }
  }
</script>

<template>
  <Layout>
    <ol class="tags">
      <li  v-for="tag in tags" :key="tag.id">
        <span>{{tag.value}}</span>
        <Icon name="right"></Icon>
      </li>

    </ol>
    <div class="newTag-wrapper">
      <button class="newTag" @click="createTag">新建标签</button>
    </div>
  </Layout>
</template>

<style lang="scss" scoped>
.tags {
  background: white;
  padding: 0 16px;
  list-style: none;
  li {
    min-height: 44px;
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 4px ;
    svg {
      height: 1.2em;
      width: 1.2em;
      color: #666;
    }
  }
}
.newTag {
  border: none;
  background: #666;
  color: white;
  padding: 9px 18px;
  border-radius: 4px;
  &-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 24px;
  }
}
</style>