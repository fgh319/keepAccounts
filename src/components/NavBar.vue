<template>
  <nav>
    <router-link to="/money" class="item">
      <Icon name="money"></Icon>
      记账
    </router-link>

    <router-link to="/labels" class="item">
      <Icon name="label"></Icon>
      标签
    </router-link>

    <router-link to="/statistics" class="item">
      <Icon name="statistics"></Icon>
      统计
    </router-link>
  </nav>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  padding: 5px 0;
  font-size: 14px;
  > .item {
    width: 33.3333%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  > .icon {
    width: 28px;
    height: 28px;
  }
  }
}
</style>