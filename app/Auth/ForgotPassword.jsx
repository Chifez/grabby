import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import InputField from "./common/InputField";
import Button from "../../components/Button";
import { useRouter } from "expo-router";

const ForgotPassword = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.navContainer}>
        <Ionicons
          name="chevron-back"
          size={40}
          color="black"
          onPress={() => router.back()}
        />
        <Text style={styles.text}>Forgot password</Text>
      </View>
      <Text style={styles.Maintext}>
        Enter your email address below and we’ll send a link to reset your
        password.
      </Text>
      <View style={styles.input}>
        <InputField placeholder="Enter email" />
      </View>
      <Button
        title="Reset Password"
        styleTitle={{ fontSize: 20, fontWeight: 700, padding: 5 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    marginTop: 60,
  },
  navContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
    marginVertical: 20,
    gap: 40,
  },
  text: {
    flex: 1,
    // textAlign: "center",
    fontSize: 20,
    fontFamily: "Inter-Reg",
    fontWeight: 700,
  },
  Maintext: {
    fontSize: 16,
    fontFamily: "Inter-Reg",
    marginVertical: 10,
  },
  input: {
    marginVertical: 15,
  },
});
export default ForgotPassword;
