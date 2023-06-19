import {
  TouchableOpacity,
  View,
  Text,
  ImageBackground,
  StyleSheet,
} from "react-native";
import React from "react";

const CategoryCard = ({ item }) => {
  const { image, title } = item;
  return (
    <TouchableOpacity style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <Text style={styles.text}>{title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    backgroundColor: "#22222273",
    borderRadius: 10,
    overflow: "hidden",
    margin: 5,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontFamily: "Inter-Reg",
    color: "white",
    height: "100%",
    width: "100%",
    backgroundColor: "#22222273",
    textAlign: "center",
    textAlignVertical: "center",
    textTransform: "capitalize",
  },
});

export default CategoryCard;
