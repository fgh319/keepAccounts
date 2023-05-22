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
    <div>编辑标签</div>
  </layout>
</template>

<style scoped lang="scss">

</style>