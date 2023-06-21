import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import Button from "../../components/Button";
import { useBoundedStore } from "../../features/store";
import SignIn from "./tabs/SignIn";
import SignUp from "./tabs/SignUp";
import { TouchableOpacity } from "react-native-gesture-handler";

const Auth = () => {
  const [active, setActive] = useState("signin");
  const router = useRouter();
  const Login = useBoundedStore((state) => state.login);

  const handleLogin = () => {
    Login();
    router.push("Home");
  };
  const handleToggleTab = (page) => {
    console.log(page);
    return setActive(page);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/grabby.png")}
          style={styles.logoImage}
        />
        <Text style={styles.logoText}>rabby</Text>
      </View>
      <Text style={styles.intro}>
        {active == "signin" ? "Welcome to Grabby" : "Join us at Grabby"}
      </Text>
      <View style={styles.tabsContainer}>
        <View style={styles.tab(active, "signin")}>
          <TouchableOpacity onPress={() => handleToggleTab("signin")}>
            <Text style={styles.Text(active, "signin")}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tab(active, "signup")}>
          <TouchableOpacity onPress={() => handleToggleTab("signup")}>
            <Text style={styles.Text(active, "signup")}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <Button
        title="Login"
        onPress={() => handleLogin()}
        styleMain={{ paddingVertical: 5 }}
        styleTitle={{ fontSize: 16 }}
      /> */}
      {active == "signin" && <SignIn />}
      {active == "signup" && <SignUp />}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    // justifyContent: "center",
    paddingTop: 50,
    paddingHorizontal: 10,
    gap: 10,
    // borderWidth: 2,
    // borderColor: "red",
  },
  logoContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  logoImage: {
    width: 40,
    height: 54,
    resizeMode: "contain",
  },
  logoText: {
    fontSize: 20,
    fontFamily: "Inter-Mid",
    fontWeight: 600,
  },
  intro: {
    fontFamily: "Inter-Mid",
    fontSize: 30,
    fontWeight: 600,
    marginRight: "auto",
  },
  tabsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  tab: (active, page) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 4,
    borderColor: active == page ? "green" : "#2C8E4E33",
    width: "50%",
    paddingVertical: 10,
  }),
  Text: (active, page) => ({
    fontFamily: "Inter-Mid",
    fontSize: 20,
    fontWeight: 700,
    color: active == page ? "green" : "#2C8E4E33",
  }),
});

export default Auth;
