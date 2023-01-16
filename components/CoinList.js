import { Button, FlatList, Text, View } from "react-native";
import React from "react";
import CoinCard from "./CoinCard";
import { styles } from "./style";

const CoinList = (props) => {
  return (
    <>
      {props?.data?.length === 0 ? (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>
            Add coin to your favourite list...
          </Text>
        </View>
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}
          contentContainerStyle={{ paddingBottom: 200 }}
          style={{ marginTop: 20 }}
          data={props.data}
          renderItem={(itemData) => (
            <CoinCard
              element={itemData.item}
              key={itemData.item.id}
              inFavourites={props.inFavourites(itemData.item.uuid)}
            />
          )}
        />
      )}
    </>
  );
};

export default CoinList;
