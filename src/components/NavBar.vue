<template>
  <nav>
    <router-link to="/money" class="item" active-class="selected">
      <Icon name="money"></Icon>
      记账
    </router-link>

    <router-link to="/labels" class="item" active-class="selected">
      <Icon name="label"></Icon>
      标签
    </router-link>

    <router-link to="/statistics" class="item" active-class="selected">
      <Icon name="statistics"></Icon>
      统计
    </router-link>
  </nav>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/helper.scss";
nav {
  display: flex;
  color: #999;
  box-shadow: 0 0 3px #ccc;
  padding: 5px 0;
  font-size: 14px;
  font-weight: bold;
  .item {
    width: 33.3333%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .icon {
      width: 32px;
      height: 32px;
    }
  }
  .item.selected {
    color: $color-highlight;
  }
}
</style>