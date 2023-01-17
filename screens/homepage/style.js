import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 66,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "flex-end",
  },
  headerSearchInput: {
    width: 190,
    backgroundColor: "white",
    opacity: 0.8,
    textAlign: "right",
    paddingHorizontal: 10,
  },
  marketText: {
    fontSize: 32,
    fontWeight: "700",
    lineHeight: 39,
  },
});
