import { StyleSheet } from "react-native";
import palette from "../../constants/palette";

export default StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: palette.white,
    alignItems: "center",
    justifyContent: "flex-end"
  },

  itemWrap: {
    alignItems: "center",
    justifyContent: "center"
  },
  btnContainer: {
    marginBottom: 40,
    width: 280,
    height: 58
  }
});
