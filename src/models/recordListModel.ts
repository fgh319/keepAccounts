const localStorageKeyName = 'recordList';
export const recordListModel = {
  data:[] as RecordItem[],
  fetch() {
    this.data = JSON.parse(localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
    return this.data;
  },

  save() {
    localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  },
  clone(data:RecordItem[] | RecordItem) {
    return JSON.parse(JSON.stringify(data));
  }
}