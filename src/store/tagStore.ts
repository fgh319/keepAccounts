// import { createId } from "@/lib/createId";
//
// const localStorageKeyName = "tagList";
//
// export const tagStore = {
//   tagList: [] as Tag[],
//   fetchTags() {
//       this.tagList= JSON.parse(
//       localStorage.getItem(localStorageKeyName) || "[]"
//     );
//     return this.tagList;
//   },
//   createTag() {
//     const tagValues = this.tagList.map((item:Tag) => item.value);
//     const value = window.prompt("请输入标签名：");
//     if (!value) {
//       alert("标签名不能为空2");
//     } else if (tagValues.indexOf(value) >= 0) {
//       alert("标签名已存在");
//       return;
//     } else {
//       const id = createId().toString();
//       this.tagList?.push({ id: id, value: value });
//       tagStore.updateTag(this.tagList)
//     }
//   },
//   updateTag(tags: Tag[]) {
//     localStorage.setItem(localStorageKeyName, JSON.stringify(tags));
//   },
//   removeTag(tag: Tag) {
//     this.tagList.splice(this.tagList.indexOf(tag), 1);
//   },
// };
//
// tagStore.fetchTags();