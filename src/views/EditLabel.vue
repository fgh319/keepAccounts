<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import {store} from "@/store/index2";

@Component
export default class EditLabel extends Vue {
  tags = store.tagList;
  tag:Tag = {
    id: '0',
    value: '0',
  };

  created() {
    const id = this.$route.params.id;
    const tag = this.tags.filter((t) => t.id === id)[0];
    if (tag) {
      this.tag = tag;
    } else {
      this.$router.replace("/404");
    }
  }

  onValueChange() {
    console.log(this.tags);
    store.updateTag(this.tags);
  }

  remove() {
    if (window.confirm("确定删除吗？")) {
      store.removeTag(this.tag);
      store.updateTag(this.tags);
      this.$router.replace('/labels')
    }
  }
  back() {
    this.$router.back()
  }
}
</script>

<template>
  <layout>
    <div class="navBar">
      <Icon class="leftIcon" name="left" @click="back"></Icon>
      <span class="title">编辑标签</span>
    </div>
    <div class="name">
      <label>
        <span>标签名</span>
        <input
          @change="onValueChange"
          v-model="tag.value"
          type="text"
          placeholder="请输入标签名"
        />
      </label>
    </div>
    <div class="delTag-wrapper">
      <button class="delTag" @click="remove">删除标签</button>
    </div>
  </layout>
</template>

<style scoped lang="scss">
.navBar {
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  padding: 12px;

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
  padding: 12px;
  font-size: 14px;
  background: white;
  margin-top: 6px;

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