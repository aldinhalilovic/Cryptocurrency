import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { styles } from "./style";
import { CoinContext } from "../store/CoinContext";

const FilterLIst = () => {
  const { currentPlace, setCurrentPlace } = useContext(CoinContext);

  return (
    <View>
      <View style={styles.filter}>
        <View style={styles.filterList}>
          <TouchableOpacity
            style={[
              styles.filterListAll,
              currentPlace === "All" && styles.active,
            ]}
            onPress={() => setCurrentPlace("All")}
          >
            <Text>All</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.filterListFavourite,
              currentPlace === "Favourites" && styles.active,
            ]}
            onPress={() => setCurrentPlace("Favourites")}
          >
            <Text>Favourites</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.filterListTop,
              currentPlace === "Top" && styles.active,
            ]}
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
