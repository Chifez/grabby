import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
import React from "react";
import Button from "../../components/Button";
import { useBoundedStore } from "../../features/store";

const SignIn = () => {
  const router = useRouter();
  const Login = useBoundedStore((state) => state.login);

  const handleLogin = () => {
    Login();
    router.push("Home");
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text>AuthPage</Text>
      <Text>comming soon</Text>
      <Button
        title="Login"
        onPress={() => handleLogin()}
        styleMain={{ paddingVertical: 5 }}
        styleTitle={{ fontSize: 16 }}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
});

export default SignIn;
