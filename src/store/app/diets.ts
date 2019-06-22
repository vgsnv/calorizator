export interface DietsItem {
  id: string;
  order: number;
}

export interface DietsItems {
  entities: DietsItem[];
}

const DIETSITEMS_ADD = 'APP/DIETSITEMS_ADD';

export const dietsItemsAdd = (data: DietsItem) => ({
  type: DIETSITEMS_ADD,
  data
});

const defaultDiaryItems: DietsItems = {
  entities: [
    {
      id: '1art',
      order: 1
    },
    {
      id: '4uyt',
      order: 2
    },
    {
      id: '2oip',
      order: 3
    }
  ]
};

export default (prevState: DietsItems = defaultDiaryItems, action) => {
  switch (action.type) {
    case DIETSITEMS_ADD:
      return {
        entities: [...prevState.entities, action.data]
      };

    default:
      return prevState;
  }
};
