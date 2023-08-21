import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const BestSellerCard = ({ item }) => {
  const { image, subcategory, title, top } = item;
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        {top && (
          <View style={styles.topContainer}>
            <MaterialCommunityIcons
              name="crown"
              size={24}
              color="gold"
              style={styles.topIcon}
            />
            <Text style={styles.topText}>Top of the week</Text>
          </View>
        )}
        <View style={styles.mainContainer}>
          <Text style={styles.name}>{title}</Text>
          <View style={styles.dot}></View>
          <Text style={styles.subcategory}>{subcategory}</Text>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    marginVertical: 4,
    borderRadius: 30,
    backgroundColor: 'white',
    position: 'relative',
    overflow: 'hidden',
    height: 150,
  },
  leftContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 2,
  },
  topContainer: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    gap: 3,
    left: 0,
    top: 5,
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
  },
  topIcon: {
    position: 'relative',
    textAlign: 'center',
    left: 80,
  },
  topText: {
    textAlign: 'center',
    fontWeight: 500,
    width: '100%',
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontFamily: 'Inter-Bold',
    fontWeight: 700,
    color: 'lightgray',
    textAlign: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'lightgray',
  },
  subcategory: {
    fontFamily: 'Inter-Bold',
    fontWeight: 700,
    color: 'lightgray',
    textAlign: 'center',
  },
  imageContainer: {
    height: '100%',
    width: '30%',
  },
  image: {
    height: '100%',
    resizeMode: 'cover',
  },
});

export default BestSellerCard;
