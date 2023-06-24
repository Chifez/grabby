import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
import { useRouter } from "expo-router";
import React, { useState, useRef, useEffect } from "react";
import { useBoundedStore } from "../../features/store";
import SignIn from "./tabs/SignIn";
import SignUp from "./tabs/SignUp";
import AuthWrapper from "./common/AuthWrapper";
import useTab from "./common/useTab";
import Tab from "./common/Tab";

const Auth = () => {
  const router = useRouter();
  const Login = useBoundedStore((state) => state.login);
  const { width, height } = Dimensions.get("window");
  const SCREEN_WIDTH = width;
  const { handleToggleTab, flatListRef, active, clicked } = useTab();

  const authPages = [
    {
      id: 1,
      page: <SignIn handleToggleTab={handleToggleTab} />,
    },
    {
      id: 2,
      page: <SignUp handleToggleTab={handleToggleTab} />,
    },
  ];
  const handleLogin = () => {
    Login();
    router.push("Home");
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
        <Tab
          title="Sign In"
          page="signin"
          handleToggleTab={handleToggleTab}
          active={active}
          clicked={clicked}
        />
        <Tab
          title="Sign Up"
          page="signup"
          handleToggleTab={handleToggleTab}
          active={active}
          clicked={clicked}
        />
      </View>
      <View>
        <FlatList
          ref={flatListRef}
          horizontal
          data={authPages}
          renderItem={({ item }) => <AuthWrapper items={item} key={item.id} />}
          keyExtractor={(item) => item.id}
          snapToInterval={SCREEN_WIDTH}
          snapToAlignment="start"
          scrollEnabled={false}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 50,
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
    paddingHorizontal: 10,
    marginRight: "auto",
    paddingVertical: 10,
  },
  tabsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
  },
  // tab: (active, page) => ({
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   borderBottomWidth: 4,
  //   borderColor: active == page ? "green" : "#2C8E4E33",
  //   width: "50%",
  //   paddingVertical: 10,
  // }),
  // Text: (active, page) => ({
  //   fontFamily: "Inter-Mid",
  //   fontSize: 20,
  //   fontWeight: 700,
  //   color: active == page ? "green" : "#2C8E4E33",
  // }),
});

export default Auth;
