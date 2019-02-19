export interface DiaryItem {
  id: string;
  order: number;
}

export interface DiaryItems {
  entities: Array<DiaryItem>;
}

const DIARYITEMS_ADD = "APP/DIARYITEMS_ADD";

export const diaryItemsAdd = (data: DiaryItem) => ({
  type: DIARYITEMS_ADD,
  data
});

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
    case DIARYITEMS_ADD:
      return {
        entities: [...prevState.entities, action.data]
      };

    default:
      return prevState;
  }
};
