import Vue from "vue";
import Vuex from "vuex";
import {clone} from "@/lib/clone";
import {createId} from "@/lib/createId";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    recordList: [] as RecordItem[],
    tagList: [] as Tag[],

  },
  mutations: {
    fetchRecords(state) {
      state.recordList = JSON.parse(localStorage.getItem('recordList') || '[]') as RecordItem[];
    },
    createRecord(state, record:RecordItem) {
      const record2 = clone(record);
      record2.createdAt = new Date().toISOString();
      state.recordList?.push(record2);
      localStorage.setItem('recordList', JSON.stringify(state.recordList));
      window.alert('已保存');
    },

    fetchTags(state) {
      state.tagList= JSON.parse(localStorage.getItem('tagList') || "[]");
    },
    createTag(state) {
      const tagValues = state.tagList.map((item:Tag) => item.value);
      const value = window.prompt("请输入标签名：");
      if (!value) {
        alert("标签名不能为空");
      } else if (tagValues.indexOf(value) >= 0) {
        alert("标签名已存在");
        return;
      } else {
        const id = createId().toString();
        state.tagList?.push({ id: id, value: value });
        store.commit('updateTag', state.tagList)
      }
    },
    updateTag(state, tags: Tag[]) {
      localStorage.setItem('tagList', JSON.stringify(tags));
    },
    removeTag(state, tag: Tag) {
      state.tagList.splice(state.tagList.indexOf(tag), 1);
    },
  },
});

export default store;