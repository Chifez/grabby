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
          <Text numberOfLines={1} style={styles.name}>
            {title}
          </Text>
          <Text style={styles.category}>{price}</Text>
        </View>
        <AntDesign name="hearto" size={18} color="black" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    gap: 2,
    margin: 5,
    width: 125,
    height: 170,
    borderRadius: 15,
    overflow: 'hidden',
  },
  imageContainer: {
    width: '100%',
    height: 130,
    borderRadius: 15,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 2,
    width: '100%',
    paddingHorizontal: 4,
    paddingVertical: 4,
  },
  name: {
    fontFamily: 'Inter-Bold',
    textTransform: 'capitalize',
    fontSize: 12,
    width: 70,
  },
  category: {
    fontFamily: 'Inter-Reg',
    textTransform: 'capitalize',
    fontWeight: 700,
    fontSize: 12,
    color: 'green',
  },
});

export default SearchCard;
