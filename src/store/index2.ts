import {recordListModel} from "@/models/recordListModel";
import {tagListModel} from "@/models/tagListModel";

export const store = {
  recordList: recordListModel.fetch(),
  createRecord: (record: RecordItem) => {
    recordListModel.create(record)
  },

  tagList: tagListModel.fetch(),
  createTag: (tags: Tag[]) => {
    const tagValues = tags.map(item => item.value)
    const tagName = window.prompt('请输入标签名：');
    if (!tagName) {
      alert('标签名不能为空2')
    } else if (tagValues.indexOf(tagName) >= 0) {
      alert('标签名已存在')
      return;
    } else {
      tagListModel.create(tagName);
    }
  },
  removeTag: (tag: Tag) => {
    tagListModel.remove(tag);
  },
  updateTag: (tags: Tag[]) => {
    tagListModel.update(tags)
  },
}