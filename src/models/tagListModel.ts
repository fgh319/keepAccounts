const localStorageKeyName = 'tagList';

export const tagListModel:{tags: string[], fetch():string[],pushTag(data:string):void,save(data:string[]):void} = {
  tags: [],
  fetch() {
    this.tags = JSON.parse(localStorage.getItem(localStorageKeyName) || '[]') ;
    return this.tags;
  },
  pushTag(data) {
    this.tags.push(data);
    localStorage.setItem(localStorageKeyName, JSON.stringify(this.tags) );
  },
  save(data) {
    localStorage.setItem(localStorageKeyName, JSON.stringify(data));
  }
}
