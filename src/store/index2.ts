import {recordStore} from "./recordStore";
import {tagStore} from "./tagStore";


export const store = {
  ...recordStore,
  ...tagStore
}

