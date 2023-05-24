declare module "*.svg" {
  import React from "react";
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

type RecordItem = {
  tags: string[];
  notes: string;
  type: string;
  amount: number;
  createdAt?: Date;
};

type Tag = {
  id: string;
  value: string;
};

interface Window {
  recordList: RecordItem[];
  createRecord: (record:RecordItem) => void;
  tagList: Tag[];
  createTag: (tags: Tag[]) => void;
  removeTag: (tag:Tag) => void;
  updateTag: (tags: Tag[]) => void;
}