import {
  View,
  Modal,
  StyleSheet,
  TextInput,
  Pressable,
  Text,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import api from "../../services/api";
import CoinList from "../../components/CoinList";
import { CoinContext } from "../../store/CoinContext";

const ModalSearch = () => {
  const [searchText, setSearchText] = useState("");
  const { showSearchBar, setShowSearchBar } = useContext(CoinContext);

  const { data: searchData, refetch } = useQuery(
    "searchCoins",
    async () => api.getSearchCoins(searchText),
    {
      enabled: false,
    }
  );

  useEffect(() => {
    refetch();
    console.log(searchData?.coins);
  }, [searchText]);
  return (
    <Modal visible={showSearchBar} animationType={"fade"}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TextInput
            placeholder="Search coins"
            style={styles.searchInput}
            value={searchText}
            onChangeText={setSearchText}
          />
          <Pressable
            onPress={() => setShowSearchBar(false)}
            style={styles.closeButton}
          >
            <Text style={styles.closeText}>Close</Text>
          </Pressable>
        </View>
        <View style={{ width: "90%" }}>
          <CoinList data={searchData?.coins} />
        </View>
      </View>
    </Modal>
  );
};

export default ModalSearch;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#94C0C0",
    minHeight: "100%",
    paddingTop: 70,
    alignItems: "center",
  },
  header: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  searchInput: {
    width: "70%",
    height: 60,
    borderRadius: 10,
    padding: 15,
    backgroundColor: "white",
  },
  closeButton: {
    width: "18%",
    height: 60,
    backgroundColor: "#B3C28A",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginLeft: 10,
  },
  closeText: {
    fontWeight: "600",
  },
});
