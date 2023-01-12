import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { styles } from "./style";
import { CoinContext } from "../store/CoinContext";

const FilterLIst = () => {
  const { setCurrentPlace } = useContext(CoinContext);

  return (
    <View>
      <View style={styles.filter}>
        <View style={styles.filterList}>
          <TouchableOpacity
            style={styles.filterListAll}
            onPress={() => setCurrentPlace("All")}
          >
            <Text>All</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.filterListFavourite}
            onPress={() => setCurrentPlace("Favourites")}
          >
            <Text>Favourites</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.filterListTop}
            onPress={() => setCurrentPlace("Top")}
          >
            <Text>Top</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FilterLIst;
