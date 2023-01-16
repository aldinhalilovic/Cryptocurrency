import { View, Text } from "react-native";
import React from "react";
import { styles } from "./style";

const Loading = () => {
  return (
    <View style={styles.loadingContainer}>
      <Text style={styles.loadingText}>Loading...</Text>
    </View>
  );
};

export default Loading;
