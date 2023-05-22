<script lang="ts">
  import Vue from "vue";
  import {Component} from "vue-property-decorator";
  import {tagListModel} from "@/models/tagListModel";

  @Component
  export default class EditLabel extends Vue {
    created() {
      const id = this.$route.params.id;
      const tags = tagListModel.fetch();
      const tag = tags.filter(t => t.id === id)[0];
      if (tag) {
        console.log(tag);
      } else {
        this.$router.replace('/404')
      }
    }
  }
</script>

<template>
  <layout>
    <div class="navBar">
      <Icon class="leftIcon" name="left"></Icon>
      <span class="title">编辑标签</span>
    </div>
    <div class="name">
      <label>
        <span>标签名</span>
        <input type="text" placeholder="请输入标签名">
      </label>
    </div>
    <div class="delTag-wrapper">
      <button class="delTag">删除标签</button>
    </div>
  </layout>
</template>

<style scoped lang="scss">
  .navBar {
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    padding: 12px ;
    .leftIcon {
      position: absolute;
       left: 8px;
    }
    svg {
      height: 1.3em;
      width: 1.3em;
      color: #666;
    }
  }
  .name {
    padding: 16px;
    font-size: 14px;
    border: 1px solid #ddd;

    span {
      margin-right: 12px;
    }
    input {
      border: none;
      background: transparent;
    }
  }
  .delTag {
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