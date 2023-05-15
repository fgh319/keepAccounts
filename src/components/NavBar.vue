<template>
  <div class="nav">
    <router-link to="/money">
      <svg>
        <use xlink:href="#money"></use>
      </svg>
      记账
    </router-link> |
    <router-link to="/labels">标签</router-link> |
    <router-link to="/statistics">统计</router-link>
  </div>
</template>

<script lang="ts">
  import money from '@/assets/icons/money.svg';
  console.log(money);
  export default {

  };
</script>

<style lang="scss" scoped>
  .nav {
    background-color: lightgray;
  }
</style>
