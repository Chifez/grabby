import React from 'react';
import { SvgUri } from 'react-native-svg';
import { View, Image, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
const SearchCard = ({ item }) => {
  const { image, title, price } = item;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.priceContainer}>
        <View>
          <Text style={styles.name}>{title}</Text>
          <Text style={styles.category}>{price}</Text>
        </View>
        <AntDesign name="hearto" size={18} color="black" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'flex-start',
    gap: 3,
    margin: 10,
    width: 170,
    height: 220,
    borderRadius: 15,
    overflow: 'hidden',
  },
  imageContainer: {
    width: '100%',
    height: 180,
    borderRadius: 15,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 4,
    paddingVertical: 4,
  },
  name: {
    fontFamily: 'Inter-Bold',
    textTransform: 'capitalize',
    fontSize: 14,
  },
  category: {
    fontFamily: 'Inter-Reg',
    textTransform: 'capitalize',
    fontWeight: 700,
    fontSize: 14,
    color: 'green',
  },
});

export default SearchCard;
