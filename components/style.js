import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  filter: {
    marginTop: 25,
    alignItems: "center",
  },
  filterList: {
    height: 40,
    width: 264,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 56,
    backgroundColor: "rgba(255,255,255,0.6)",
  },
  filterListAll: {
    width: 61,
    height: 30,
    backgroundColor: "#B3C28A",
    borderRadius: 56,
    justifyContent: "center",
    alignItems: "center",
  },
  filterListFavourite: {
    width: 114,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 56,
    backgroundColor: "#B3C28A",
  },
  filterListTop: {
    width: 70,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 56,
    backgroundColor: "#B3C28A",
  },
  active: {
    backgroundColor: "#8CB78D",
  },
});
