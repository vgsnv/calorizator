import { StyleSheet } from "react-native";
import palette from "../../constants/palette";

export default StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: palette.gray
  },
  gridItem: {
    flex: 1
  },
  newProduct: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 104,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: palette.white,
    color: palette.black
  },
  newProductTitle: {},
  newProductTitleText: {
    color: palette.black
  },
  newProductIcon: {
    flex: 1
  }
});
