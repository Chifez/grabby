import { View, Text, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";
import Button from "../../components/Button";
import React from "react";

const Verified = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("Home");
  };
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/done.png")} style={styles.image} />
      <Text style={styles.verify}>Verified!</Text>
      <Text style={styles.text}>
        A guide on how to complete set up and navigate around the app has been
        sent to your email. Let’s get shopping!!!!
      </Text>
      <Button
        title="Start shopping"
        onPress={handleClick}
        styleMain={{ width: "100%" }}
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
    alignItems: "center",
    paddingHorizontal: 5,
    width: "100%",
    height: "100%",
    gap: 50,
  },
  image: {
    width: 110,
    height: 110,
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
export default Verified;
