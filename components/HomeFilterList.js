import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./style";

const FilterLIst = () => {
  return (
    <View>
      <View style={styles.filter}>
        <View style={styles.filterList}>
          <TouchableOpacity style={styles.filterListAll}>
            <Text>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterListFavourite}>
            <Text>Favourites</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterListTop}>
            <Text>Top</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FilterLIst;
