<script lang="ts">
  import Vue from "vue";
  import {Component} from "vue-property-decorator";
  import {store} from "@/store/index2";

  @Component
  export default class Label extends Vue {
    tags = store.tagList;

    createTag() {
      store.createTag(this.tags);
    }
  }
</script>

<template>
  <Layout>
    <div class="tags">
      <router-link class="tag" v-for="tag in tags" :key="tag.id" :to="`/labels/edit/${tag.id}`">
        <span>{{tag.value}}</span>
        <Icon name="right"></Icon>
      </router-link>
    </div>
    <div class="newTag-wrapper">
      <button class="newTag" @click="createTag">新建标签</button>
    </div>
  </Layout>
</template>

<style lang="scss" scoped>
.tags {
  background: white;
  list-style: none;
  .tag {
    min-height: 44px;
    border-bottom: 1px solid #ddd;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px ;
    svg {
      height: 1.3em;
      width: 1.3em;
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