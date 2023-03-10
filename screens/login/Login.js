import {
  View,
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { styles } from "../login/style";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [borderRed, setBorderRed] = useState(false);

  const [mailInput, setMailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const navigation = useNavigation();
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function changeScreen() {
    if (isValidEmail(mailInput) && passwordInput.length > 6) {
      navigation.navigate("home");
    } else {
      Alert.alert("Error", "Enter valid email or password...");
      setBorderRed(true);
      setMailInput("");
      setPasswordInput("");
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView behavior="padding">
        <View style={styles.loginContainer}>
          <View style={styles.logoContainer}>
            <Text style={styles.title}>Login</Text>
            <Image source={require("../../assets/images/Group2.png")} />
          </View>
          <View style={{ margin: 25 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.label}>Email</Text>
            </View>
            <TextInput
              placeholder="Enter your email"
              style={[styles.input, borderRed && { borderColor: "red" }]}
              value={mailInput}
              onFocus={() => setBorderRed(false)}
              onChangeText={setMailInput}
            />
          </View>
          <View>
            <Text style={styles.label}>Password</Text>
            <TextInput
              placeholder="Password"
              style={[styles.input, borderRed && { borderColor: "red" }]}
              value={passwordInput}
              onFocus={() => setBorderRed(false)}
              onChangeText={setPasswordInput}
              secureTextEntry
            />
            <Text style={styles.forgoten}>Forgot Password?</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={changeScreen}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <Text style={styles.reset}>
              Don't have an account?
              <Text style={{ color: "#392D7D" }}>Sign up</Text>
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default Login;
