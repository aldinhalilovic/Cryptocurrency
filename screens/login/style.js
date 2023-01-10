import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  loginContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    lineHeight: 39,
    fontStyle: "normal",
    marginBottom: 15,
    zIndex: 20,
  },
  input: {
    width: 335,
    height: 73,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    borderWidth: 2,
    borderColor: "transparent",
  },
  label: {
    margin: 10,
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 19,
  },
  forgoten: {
    color: "#392D7D",
    alignSelf: "flex-end",
    margin: 10,
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 18.15,
  },
  button: {
    width: 150,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#392D7D",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 18,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  reset: {
    fontWeight: "600",
    fontSize: 15,
    marginTop: 10,
  },
});
