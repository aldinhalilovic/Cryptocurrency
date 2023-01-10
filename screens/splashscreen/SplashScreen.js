import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const SplashScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/Logo.png")} />
      <TouchableOpacity
        style={styles.login}
        onPress={() => navigation.navigate("login")}
      >
        <Text style={styles.text}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  login: {
    height: 60,
    width: 180,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#392D7D",
    borderRadius: 19,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 20,
  },
});
