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
  const { image, title, decs, style, btn, handleclick } = item;
  return (
    <View style={[styles.container, { width, height }]}>
      <Image source={image} />
      <View style={styles.detailContainer}>
        <Text style={styles.Main}>title</Text>
        <Text style={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi,
          provident!
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    flex: 1,
    borderWidth: 2,
    borderColor: "red",
  },
  detailContainer: {
    dipslay: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  Main: {
    textAlign: "center",
  },
  text: {
    textAlign: "center",
  },
});
export default OnBoarding;
