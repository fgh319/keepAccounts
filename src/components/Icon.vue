<template>
  <svg class="icon" @click="$emit('click', $event)">
    <use :xlink:href="'#' + name"></use>
  </svg>
</template>

<script lang="ts">
let importAll = (requireContext: __WebpackModuleApi.RequireContext) =>
  requireContext.keys().forEach(requireContext);
try {
  importAll(require.context("../assets/icons", true, /\.svg$/));
} catch (error) {
  console.log(error);
}
export default {
  props: ["name"],
};
</script>

<style scoped>
.icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    stroke: currentColor;
    overflow: hidden;
}
</style>