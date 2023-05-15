<template>
  <div>
    <h2>404</h2>
    <RouterLink to="/">回到首页</RouterLink>
  </div>
</template>

<script lang="ts">
import { RouterLink } from "vue-router";

export default {
  data() {
    return {};
  },
  components: { RouterLink },
};
</script>

<style lang="scss" scoped></style>
