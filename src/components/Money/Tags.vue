<script setup lang="ts">

</script>

<template>
  <div class="tags">
    <ul class="current">
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>
    </ul>
    <div class="new">
      <button>新增标签</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.tags {
  padding: 16px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: auto;

  .current {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;

    li {
      background: #d9d9d9;

      height: 26px;
      line-height: 26px;
      border-radius: 4px;
      padding: 0 14px;
      margin-top: 6px;
      margin-right: 8px;
    }
  }

  .new {
    padding-top: 8px;

    button {
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 4px;
    }
  }
}
</style>