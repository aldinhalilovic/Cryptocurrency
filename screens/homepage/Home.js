import { View, Text, TextInput, Pressable, Animated } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import FilterLIst from "../../components/HomeFilterList";
import api from "../../services/api";
import { useQuery } from "react-query";
import Bell from "../../assets/icons/Union.svg";
import Search from "../../assets/icons/search.svg";
import { styles } from "./style";
import { CoinContext } from "../../store/CoinContext";
import CoinList from "../../components/CoinList";
import Loading from "../../components/Loading";

const Home = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchText, setSearchText] = useState("");
  const { favourites, currentPlace } = useContext(CoinContext);

  const { data: topData, isLoading: loadingAlias } = useQuery(
    "topcoins",
    async () => api.getTopCoins()
  );
  const { data: allData, isLoading } = useQuery("allcoins", async () =>
    api.getAllCoins()
  );

  const { data: searchData } = useQuery("searchCoins", async () =>
    api.getSearchCoins(searchText)
  );

  const inFavourites = (id) => {
    favourites.some((el) => el.uuid === id);
  };

  useEffect(() => {
    if (searchText !== "") {
      setFilteredData(searchData?.coins);
    } else if (currentPlace == "Favourites") {
      setFilteredData(favourites);
    } else if (currentPlace == "All") {
      setFilteredData([
        ...allData?.coins?.slice(0, 10),
        ...allData?.coins?.slice(12, 21),
        ...allData?.coins?.slice(23, 40),
      ]);
    } else setFilteredData(topData?.coins);
  }, [currentPlace, favourites, isLoading, searchText]);

  console.log(searchData);
  console.log(searchText);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.marketText}>Market</Text>
        <View style={styles.headerIcons}>
          <View style={{ flexDirection: "row" }}>
            {showSearchBar && (
              <TextInput
                selectionColor={"black"}
                style={styles.headerSearchInput}
                onChangeText={setSearchText}
                value={searchText}
              />
            )}

            <Pressable onPress={() => setShowSearchBar(true)}>
              <Search />
            </Pressable>
          </View>
          <Bell />
        </View>
      </View>
      <FilterLIst />
      {isLoading || loadingAlias ? (
        <Loading />
      ) : (
        <CoinList data={filteredData} inFavourites={inFavourites} />
      )}
    </View>
  );
};

export default Home;
