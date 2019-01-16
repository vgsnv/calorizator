import { StyleSheet } from "react-native";
import palette from "../../constants/palette";

export default StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: palette.white
  },
  gridItem: {
    flex: 1
  },
  itemWrap: {
    alignItems: "center",
    justifyContent: "center"
  },
  btnContainer: {
    width: "80%",
    height: "40%"
  }
});
