import { View, Text } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import FilterLIst from "../../components/HomeFilterList";
import api from "../../services/api";
import { useQuery } from "react-query";
import Bell from "../../assets/icons/Union.svg";
import Search from "../../assets/icons/search.svg";
import { styles } from "./style";
import { CoinContext } from "../../store/CoinContext";
import CoinList from "../../components/CoinList";

const Home = () => {
  const { data } = useQuery("topcoins", async () => api.getTopCoins());
  const [filteredData, setFilteredData] = useState([]);
  const { favourites, currentPlace } = useContext(CoinContext);

  const inFavourites = (id) => favourites.some((el) => el.uuid === id);

  useEffect(() => {
    if (currentPlace == "All") {
      setFilteredData(data?.coins);
    } else if (currentPlace == "Favourites") {
      setFilteredData(favourites);
    } else {
      setFilteredData(data?.coins);
    }
  }, [currentPlace]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.marketText}>Market</Text>
        <View style={styles.headerIcons}>
          <Search />
          <Bell />
        </View>
      </View>
      <FilterLIst />
      <CoinList data={filteredData} inFavourites={inFavourites} />
    </View>
  );
};

export default Home;
