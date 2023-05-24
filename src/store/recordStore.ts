import {clone} from "@/lib/clone";

const localStorageKeyName = 'recordList';

export const recordStore = {
  recordList: [] as RecordItem[],
  fetchRecords() {
    this.recordList = JSON.parse(localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
    return this.recordList;
  },
  createRecord(record:RecordItem) {
    const record2 = clone(record);
    record2.createdAt = new Date();
    this.recordList?.push(record2);
    localStorage.setItem(localStorageKeyName, JSON.stringify(this.recordList));
  }
}

recordStore.fetchRecords();