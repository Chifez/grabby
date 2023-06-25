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
import { styles } from "./auth.style";

const Auth = () => {
  const router = useRouter();
  const Login = useBoundedStore((state) => state.login);
  const { width, height } = Dimensions.get("window");
  const SCREEN_WIDTH = width;
  const { handleToggleTab, flatListRef, active } = useTab();

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
        />
        <Tab
          title="Sign Up"
          page="signup"
          handleToggleTab={handleToggleTab}
          active={active}
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

export default Auth;
