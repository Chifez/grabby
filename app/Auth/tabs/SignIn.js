import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import CheckBox from "expo-checkbox";
import { Link } from "expo-router";
import Button from "../../../components/Button";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
// import { CheckBox } from "react-native-web";

const SignIn = () => {
  const [isChecked, setIsChecked] = useState(true);
  const handleLogin = () => {};
  return (
    <View style={styles.container}>
      <View>
        <TextInput type="text" placeholder="Email" style={styles.input} />
        <TextInput placeholder="Password" style={styles.input} />
      </View>
      <View style={styles.fgContainer}>
        <View style={styles.rmContainer}>
          <CheckBox
            style={styles.checkbox}
            value={isChecked}
            color={isChecked ? "green" : undefined}
          />
          <Text style={styles.rmText}>Remember me</Text>
        </View>
        <Link href="" style={styles.rmText}>
          Forgot Password?
        </Link>
      </View>
      <Button
        title="sign"
        onPress={() => handleLogin()}
        styleMain={{ marginVertical: 15 }}
      />
      <View style={styles.orContainer}>
        <View style={styles.dash}></View>
        <Text style={styles.orText}>OR</Text>
      </View>
      <Text style={styles.siText}>Sign in with</Text>
      <View style={styles.iconContainer}>
        <AntDesign name="google" size={45} color="crimson" />
        <FontAwesome5 name="facebook" size={45} color="#4478FF" />
        <AntDesign name="apple1" size={45} color="black" />
      </View>
      <View style={styles.footercontainer}>
        <Text style={styles.footerText}>Don't have an account?</Text>
        <Text style={[styles.footerText, { color: "green" }]}> Sign Up</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
  },
  input: {
    padding: 15,
    borderColor: "#2C8E4E",
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10,
    fontSize: 20,
    fontFamily: "Roboto",
  },
  password: {},
  fgContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 15,
  },
  rmContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  rmText: {
    fontFamily: "Inter-Reg",
    fontSize: 16,
  },
  checkbox: {
    width: 30,
    height: 30,
    borderRadius: 5,
    borderColor: "black",
    color: "green",
  },
  orContainer: {
    position: "relative",
    width: "100%",
    // borderColor: "red",
    // borderWidth: 2,
    paddingVertical: 18,
  },
  dash: {
    width: "100%",
    height: 1,
    backgroundColor: "black",
  },
  orText: {
    position: "absolute",
    backgroundColor: "white",
    top: 0,
    left: "33%",
    paddingHorizontal: 40,
    zIndex: 4,
    fontFamily: "Inter-Reg",
    fontSize: 24,
    textAlign: "center",
  },
  siText: {
    fontSize: 20,
    fontFamily: "Inter-Mid",
    fontWeight: 700,
    textAlign: "center",
    marginVertical: 10,
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  footercontainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  footerText: {
    fontFamily: "Inter-Mid",
    fontSize: 18,
    fontWeight: 600,
    color: "gray",
  },
});

export default SignIn;