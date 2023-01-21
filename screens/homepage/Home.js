import { View, Text, TextInput, Pressable, Animated } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import api from "../../services/api";
import { useQuery } from "react-query";
import ModalSearch from "../modalSearch/ModalSearch";
import FilterLIst from "../../components/HomeFilterList";
import CoinList from "../../components/CoinList";
import Loading from "../../components/Loading";
import Bell from "../../assets/icons/Union.svg";
import Search from "../../assets/icons/search.svg";
import { CoinContext } from "../../store/CoinContext";
import { styles } from "./style";

const Home = () => {
  const [filteredData, setFilteredData] = useState([]);
  const { favourites, currentPlace, setShowSearchBar, showSearchBar } =
    useContext(CoinContext);

  const { data: topData, isLoading: loadingAlias } = useQuery(
    "topcoins",
    async () => api.getTopCoins()
  );
  const { data: allData, isLoading } = useQuery("allcoins", async () =>
    api.getAllCoins()
  );

  useEffect(() => {
    if (currentPlace == "Favourites") {
      setFilteredData(favourites);
    } else if (currentPlace == "All") {
      setFilteredData([
        ...allData?.coins?.slice(0, 10),
        ...allData?.coins?.slice(12, 21),
        ...allData?.coins?.slice(23, 40),
      ]);
    } else setFilteredData(topData?.coins);
  }, [currentPlace, favourites, isLoading, loadingAlias]);

  return (
    <View style={styles.container}>
      <ModalSearch />
      <View style={styles.header}>
        <Text style={styles.marketText}>Market</Text>
        <View style={styles.headerIcons}>
          <Pressable onPress={() => setShowSearchBar(true)}>
            <Search />
          </Pressable>
          <Bell />
        </View>
      </View>
      <FilterLIst />
      {isLoading || loadingAlias ? (
        <Loading />
      ) : (
        <CoinList data={filteredData} />
      )}
    </View>
  );
};

export default Home;
