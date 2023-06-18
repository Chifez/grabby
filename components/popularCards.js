import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const PopularCard = ({ item }) => {
  const { image, title, category } = item;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
      <Text style={styles.name}>{title}</Text>
      <Text style={styles.category}>{category}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "flex-start",
    gap: 3,
    margin: 3,
    width: 120,
    height: 170,
    borderRadius: 15,
    overflow: "hidden",
  },
  imageContainer: {
    height: "70%",
    width: "100%",
    borderRadius: 15,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  name: {
    fontFamily: "Inter-Bold",
    textTransform: "capitalize",
    fontSize: 14,
  },
  category: {
    fontFamily: "Inter-Reg",
    textTransform: "capitalize",
    fontWeight: 700,
    fontSize: 14,
    color: "green",
  },
});

export default PopularCard;
