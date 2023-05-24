/* eslint-disable vue/multi-word-component-names */
import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Nav from "@/components/NavBar.vue";
import Layout from "@/components/Layout.vue";
import Icon from "@/components/Icon.vue";
import {tagListModel} from "@/models/tagListModel";
import {recordListModel} from "@/models/recordListModel";

Vue.config.productionTip = false;

Vue.component("Nav", Nav);
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);

window.recordList = recordListModel.fetch();
window.createRecord = (record: RecordItem) => {
  recordListModel.create(record)
}

window.tagList = tagListModel.fetch();
window.createTag = (tags: Tag[]) => {
  const tagValues = tags.map(item => item.value)
  const tagName = window.prompt('请输入标签名：');
  if(!tagName) {
    alert('标签名不能为空2')
  } else if(tagValues.indexOf(tagName) >= 0 ){
    alert('标签名已存在')
    return;
  } else {
    tagListModel.create(tagName);
  }
}
window.removeTag = (tag: Tag) => {
  tagListModel.remove(tag);
};
window.updateTag = (tags: Tag[]) => {
  tagListModel.update(tags)
}


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
