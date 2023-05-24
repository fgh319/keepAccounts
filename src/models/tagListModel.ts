import {createId} from "@/lib/createId";

const localStorageKeyName = "tagList";

export const tagListModel = {
  tags: [] as Tag[],
  fetch() {
    this.tags = JSON.parse(localStorage.getItem(localStorageKeyName) || "[]");
    return this.tags;
  },
  update(data:Tag[]) {
    localStorage.setItem(localStorageKeyName, JSON.stringify(data));
  },
  remove(data:Tag) {
    this.tags.splice(this.tags.indexOf(data),1);
  },
  create(value:string) {
    const id = createId().toString();
      this.tags.push({id:id, value: value});
      localStorage.setItem(localStorageKeyName, JSON.stringify(this.tags));
  }
};
