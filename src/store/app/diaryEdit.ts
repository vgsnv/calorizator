export interface DiaryEdit {
  diaryItemId: string;
}

const DIARYEDIT_EDIT_ID = "DB/DIARYEDIT_EDIT_ID";

export const diaryEditEditId = (data: string) => ({
  type: DIARYEDIT_EDIT_ID,
  data
});

const defaultProducts: DiaryEdit = {
  diaryItemId: null
};

export default (prevState: DiaryEdit = defaultProducts, action) => {
  switch (action.type) {
    case DIARYEDIT_EDIT_ID:
      return {
        diaryItemId: action.data
      };

    default:
      return prevState;
  }
};
