import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Favourite from "../assets/icons/Vector.svg";
import { SvgUri } from "react-native-svg";

const CoinCard = ({ element }) => {
  return (
    <View style={styles.container}>
      <View style={styles.badge}>
        <Favourite />
      </View>
      <View style={styles.content}>
        <SvgUri uri={element.iconUrl} height={80} width={80} />
        <View style={{ marginLeft: 20 }}>
          <View style={styles.contentTitle}>
            <Text style={styles.contentText}>{element.name}</Text>
            <Text style={styles.contentText}>
              {Number(element.price).toLocaleString()}$
            </Text>
          </View>
          <Text style={{ justifyContent: "flex-end" }}>{element.name}</Text>
        </View>
      </View>
    </View>
  );
};

export default CoinCard;

const styles = StyleSheet.compose({
  container: {
    backgroundColor: "rgba(255,255,255,0.6)",
    height: 120,
    marginTop: 20,
    borderRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    position: "relative",
  },
  badge: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  content: {
    width: "85%",
    height: 80,
    marginVertical: 20,
    marginLeft: 10,
    flexDirection: "row",
  },
  contentTitle: {
    marginTop: 10,
    width: "75%",
    height: "50%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  contentText: {
    fontWeight: "600",
    lineHeight: 22,
    fontSize: 15,
  },
});
