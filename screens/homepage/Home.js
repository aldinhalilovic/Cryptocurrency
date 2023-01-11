import { View, Text } from "react-native";
import React from "react";
import FilterLIst from "../../components/HomeFilterList";
import CoinCard from "../../components/CoinCard";
import api from "../../services/api";
import { useQuery } from "react-query";
import Bell from "../../assets/icons/Union.svg";
import Search from "../../assets/icons/search.svg";
import { styles } from "./style";

const Home = () => {
  const { data, isLoading } = useQuery("coins", async () => api.getCoins());

  // console.log(data?.coins);

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
      {isLoading ? <Text>nema</Text> : <Text>ima</Text>}
      {data?.coins.map((el, index) => (
        <CoinCard element={el} key={index} />
      ))}
    </View>
  );
};

export default Home;
