const localStorageKeyName = "tagList";

export const tagListModel: {
  tags: Tag[];
  fetch(): Tag[];
  pushTag(data: Tag): void;
  save(data: Tag[]): void;
  remove(data:Tag):void;
} = {
  tags: [],
  fetch() {
    this.tags = JSON.parse(localStorage.getItem(localStorageKeyName) || "[]");
    return this.tags;
  },
  pushTag(data) {
    this.tags.push(data);
    localStorage.setItem(localStorageKeyName, JSON.stringify(this.tags));
  },
  save(data) {
    localStorage.setItem(localStorageKeyName, JSON.stringify(data));
  },
  remove(data) {
    this.tags.splice(this.tags.indexOf(data),1);
  },
};
