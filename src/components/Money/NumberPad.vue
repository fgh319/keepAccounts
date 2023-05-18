<script setup lang="ts"></script>

<template>
  <div class="numberPad">
    <div class="output">100</div>
    <div class="buttons">
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>+</button>
      <button>删除</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>-</button>
      <button>清空</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>×</button>
      <button class="ok">确定</button>
      <button class="num0">0</button>
      <button>.</button>
      <button>÷</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.numberPad {
  .output {
    font-size: 36px;
    font-family: Consolas, monospace;
    padding: 9px 16px;
    text-align: right;
    box-shadow: inset 0 0 4px #999;
  }

  .buttons {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(4, 1fr);
    height: 30vh;

    button {
      border: none;
      outline: 1px solid #ccc;
    }

    .ok {
      grid-column: 5/6;
      grid-row: 3/5;
      background: #c4c4c4;
      font-weight: bold;
    }

    .num0 {
      grid-column: 1/3;
      grid-row: 4/5;
    }
  }
}
</style>