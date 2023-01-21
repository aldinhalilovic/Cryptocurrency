import { Button, FlatList, Text, View } from "react-native";
import React, { useContext } from "react";
import CoinCard from "./CoinCard";
import { styles } from "./style";
import { CoinContext } from "../store/CoinContext";

const CoinList = (props) => {
  const { favourites } = useContext(CoinContext);

  const inFavourites = (id) => {
    return favourites.some((el) => el.uuid === id);
  };
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
              key={itemData.item.id}
              element={itemData.item}
              inFavourites={inFavourites(itemData.item.uuid)}
            />
          )}
        />
      )}
    </>
  );
};

export default CoinList;
