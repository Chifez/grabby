import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import React from "react";

const OnBoarding = ({ item }) => {
  const { width, height } = Dimensions.get("window");
  const { image, title, description } = item;
  return (
    <View style={[styles.container, { width, height }]}>
      <Image source={image} />
      <View style={styles.detailContainer}>
        <Text style={styles.Main}>{title}</Text>
        <Text style={styles.text}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    flex: 1,
    dipslay: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  detailContainer: {
    dipslay: "flex",
    flexDirection: "column",
    gap: 12,
    alignItems: "center",
    textAlign: "center",
    marginVertical: 20,
    paddingVertical: 20,
  },
  Main: {
    textAlign: "center",
    fontFamily: "Inter-Bold",
    fontSize: 24,
    marginBottom: 20,
  },
  text: {
    fontFamily: "Inter-Reg",
    textAlign: "center",
    fontSize: 16,
  },
});
export default OnBoarding;
