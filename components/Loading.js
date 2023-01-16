import { View, Text } from "react-native";
import React from "react";

const Loading = () => {
  return (
    <View
      style={{ height: "70%", justifyContent: "center", alignItems: "center" }}
    >
      <Text style={{ fontSize: 30, fontWeight: "600", letterSpacing: 0.5 }}>
        Loading...
      </Text>
    </View>
  );
};

export default Loading;
