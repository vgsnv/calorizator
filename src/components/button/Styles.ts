import { StyleSheet } from "react-native";
import palette from "../../constants/palette";

export default StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: "center",
    borderRadius: 6,
    backgroundColor: palette.main,
    color: palette.white
  },
  buttonName: {
    lineHeight: 20.0,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: palette.white
  }
});
