export interface DiaryItem {
  id: string;
  order: number;
}

export interface DiaryItems {
  entities: Array<DiaryItem>;
}

const defaultDiaryItems: DiaryItems = {
  entities: [
    {
      id: "1art",
      order: 1
    },
    {
      id: "4uyt",
      order: 2
    },
    {
      id: "2oip",
      order: 3
    }
  ]
};

export default (prevState: DiaryItems = defaultDiaryItems, action) => {
  switch (action.type) {
    default:
      return prevState;
  }
};
