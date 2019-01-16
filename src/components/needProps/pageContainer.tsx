import * as React from "react";

import { View, ActivityIndicator } from "react-native";

const Dimensions = require("Dimensions");
const { width, height } = Dimensions.get("window");

const PageContainer = ({ appReady, children }) => {
  return (
    <View
      style={{
        flex: 1
      }}
    >
      {children}
      {!appReady && (
        <ActivityIndicator
          size="large"
          color="#aaa"
          style={{
            flex: 1,
            position: "absolute",
            left: 0,
            top: 0,
            opacity: 0.9,
            backgroundColor: "#fff",
            width: width,
            height: height
          }}
        />
      )}
    </View>
  );
};

export default PageContainer;
