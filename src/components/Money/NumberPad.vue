<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class NumberPad extends Vue {
  output = "0";

  inputContent(event: Event) {
    const button = event.target as HTMLButtonElement;
    const input = button.textContent!;
    if (this.output.length >= 16) {
      return;
    }
    if (this.output === "0") {
      if ("0123456789".indexOf(input) >= 0) {
        this.output = input;
      } else {
        this.output += input;
      }
      return;
    }
    if (this.output.indexOf(".") >= 0 && input === ".") {
      return;
    }
    this.output += input;
  }

  del() {
    if (this.output.length === 1) {
      this.output = "0";
    } else {
      this.output = this.output.slice(0, -1);
    }
  }

  empty() {
    this.output = "0";
  }

  ok() {
      this.$emit("update:value", this.output);
      this.$emit('submit', this.output)
  }
}
</script>

<template>
  <div class="numberPad">
    <div class="output">{{ output }}</div>
    <div class="buttons">
      <button @click="inputContent">1</button>
      <button @click="inputContent">2</button>
      <button @click="inputContent">3</button>
      <button @click="del">删除</button>
      <button @click="inputContent">4</button>
      <button @click="inputContent">5</button>
      <button @click="inputContent">6</button>
      <button @click="empty">清空</button>
      <button @click="inputContent">7</button>
      <button @click="inputContent">8</button>
      <button @click="inputContent">9</button>
      <button @click="ok" class="ok">确定</button>
      <button @click="inputContent" class="num0">0</button>
      <button @click="inputContent">.</button>
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
    height: 72px;
  }

  .buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    height: 30vh;

    button {
      border: none;
      outline: 1px solid #ccc;
    }

    .ok {
      grid-column: 4/5;
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
