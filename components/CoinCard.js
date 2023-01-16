import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useContext } from "react";
import { CoinContext } from "../store/CoinContext";
import Favourite from "../assets/icons/Vector.svg";
import Empty from "../assets/icons/VectorE.svg";
import { SvgUri } from "react-native-svg";

const CoinCard = ({ element, inFavourites }) => {
  const { addToFavourites } = useContext(CoinContext);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.badge}
        onPress={() => addToFavourites(element)}
      >
        {!inFavourites ? <Empty /> : <Favourite />}
      </TouchableOpacity>
      <View style={styles.content}>
        {/* {
          <SvgUri
            uri={element?.iconUrl.includes("png") ? "" : element?.iconUrl}
            height={50}
            width={50}
          />
        } */}
        <View style={{ marginLeft: 20 }}>
          <View style={styles.contentTitle}>
            <Text style={styles.contentText}>{element.name}</Text>
            <Text style={[styles.contentText, styles.currency]}>
              ${Number(element.price).toFixed(2).toLocaleString()}
            </Text>
          </View>
          <Text style={{ justifyContent: "flex-end" }}>{element.name}</Text>
        </View>
      </View>
    </View>
  );
};

export default CoinCard;

const windowDimensions = Dimensions.get("screen").width;

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
    width: windowDimensions - 190,
    height: "50%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  contentText: {
    fontWeight: "600",
    lineHeight: 22,
    fontSize: 15,
  },
  currency: {
    marginLeft: 50,
  },
});
