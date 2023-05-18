<template>
  <Layout class-prefix="layout">
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
    <div>
      <label class="notes">
        <span class="name">备注</span>
        <input type="text" placeholder="在这里添加备注" />
      </label>
    </div>
    <div>
      <ul class="types">
        <li class="selected">支出</li>
        <li>收入</li>
      </ul>
    </div>
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

.types {
  background: #c4c4c4;
  display: flex;
  text-align: center;
  font-size: 24px;

  > li {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &.selected::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: #333;
    }
  }
}

.notes {
  font-size: 14px;
  background: #f5f5f5;
  padding-left: 16px;
  display: flex;
  align-items: center;

  .name {
    padding-right: 16px;
  }

  input {
    height: 64px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
  }
}

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
<script setup lang="ts"></script>
