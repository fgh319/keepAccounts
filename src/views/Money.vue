<script>
import Tags from "@/components/Money/Tags.vue";
import Notes from "@/components/Money/Notes.vue";
import Types from "@/components/Money/Types.vue";
import NumberPad from "@/components/Money/NumberPad.vue";

  export default {
    components: {
      Tags,
      Notes,
      Types,
      NumberPad
    },
    data() {
      return {
        tags: ["衣", "食", "住", "行", "娱乐", "其他"]
      };
    }
  }
</script>

<template>
  <Layout class-prefix="layout">
    <Tags :data-source="tags" />
    <Notes />
    <Types />
    <NumberPad />
  </Layout>
</template>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column;
}
</style>
<style lang="scss" scoped>
@import "@/assets/styles/helper.scss";
</style>
