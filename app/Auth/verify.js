import { View, Text, Image, StyleSheet } from "react-native";
import Button from "../../components/Button";
import { useRouter } from "expo-router";
import React from "react";

const Verify = () => {
  const router = useRouter();
  const HandleVerify = () => {
    router.push("Auth/verified");
  };
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/Verifying.png")}
        style={styles.image}
      />
      <Text style={styles.verify}>Verify your email address</Text>
      <Text style={styles.text}>
        Thank you for registering, please click the button below to comfirm your
        email and activate your account.
      </Text>
      <Button
        title="Click to verify"
        onPress={HandleVerify}
        styleTitle={{ fontWeight: 700, padding: 3 }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingHorizontal: 5,
    width: "100%",
    height: "100%",
    gap: 30,
  },
  image: {
    height: 350,
    width: 350,
    resizeMode: "contain",
  },
  verify: {
    textAlign: "center",
    fontFamily: "Inter-Reg",
    fontSize: 30,
    fontWeight: 700,
  },
  text: {
    textAlign: "center",
    fontFamily: "Inter-Reg",
    fontSize: 16,
    fontWeight: 400,
  },
});

export default Verify;
