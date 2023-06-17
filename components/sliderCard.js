import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const SliderCard = ({ item }) => {
  const { title, image, color } = item;
  return (
    <View style={styles.container}>
      <View style={[styles.titleContainer, { backgroundColor: `${color}` }]}>
        <Text style={styles.titleText}>
          {title.map((item, idx) => (
            <Text key={idx}>{item}</Text>
          ))}
        </Text>
      </View>
      <View style={styles.titleContainer}>
        <Image
          source={image}
          style={[styles.imageBanner, { width: 100, height: 100 }]}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    padding: 3,
    borderRadius: 5,
  },
  titleContainer: {
    width: "70%",
    zIndex: 20,
    borderBottomEndRadius: 20,
    borderTopEndRadius: 20,
  },
});
export default SliderCard;
