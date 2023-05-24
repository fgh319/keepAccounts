import {clone} from "@/lib/clone";

const localStorageKeyName = 'recordList';
export const recordListModel = {
  data:[] as RecordItem[],
  fetch() {
    this.data = JSON.parse(localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
    return this.data;
  },
  create(record:RecordItem) {
    const record2 = clone(record);
    record2.createdAt = new Date();
    this.data.push(record2);
    localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  }
}