import { FlatList } from "react-native";
import React from "react";
import CoinCard from "./CoinCard";

const CoinList = (props) => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      alwaysBounceVertical={false}
      contentContainerStyle={{ paddingBottom: 200 }}
      style={{ marginTop: 20 }}
      data={props.data?.coins}
      renderItem={(itemData) => (
        <CoinCard
          element={itemData.item}
          key={itemData.item.id}
          inFavourites={props.inFavourites(itemData.item.uuid)}
        />
      )}
    />
  );
};

export default CoinList;
