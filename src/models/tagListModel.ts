import {createId} from "@/lib/createId";

const localStorageKeyName = "tagList";

export const tagListModel: {
  tags: Tag[];
  fetch(): Tag[];
  update(data: Tag[]): void;
  remove(data:Tag):void;
  create() : void;
} = {
  tags: [],
  fetch() {
    this.tags = JSON.parse(localStorage.getItem(localStorageKeyName) || "[]");
    return this.tags;
  },
  // pushTag(data) {
  //   this.tags.push(data);
  //   localStorage.setItem(localStorageKeyName, JSON.stringify(this.tags));
  // },
  update(data) {
    localStorage.setItem(localStorageKeyName, JSON.stringify(data));
  },
  remove(data) {
    this.tags.splice(this.tags.indexOf(data),1);
  },
  create() {
    const id = createId().toString();
    const tagValues = this.tags.map(item => item.value)
    const tagName = window.prompt('请输入标签名：');
    if(!tagName) {
      alert('标签名不能为空2')
    } else if(tagValues.indexOf(tagName) >= 0 ){
      alert('标签名已存在')
      return;
    } else {
      this.tags.push({id:id, value: tagName});
      localStorage.setItem(localStorageKeyName, JSON.stringify(this.tags));
    }
  }
};
