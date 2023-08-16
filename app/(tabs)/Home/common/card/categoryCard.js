import {
  TouchableOpacity,
  View,
  Text,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import React from 'react';

const CategoryCard = ({ item }) => {
  const { image, title } = item;
  return (
    <TouchableOpacity style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    backgroundColor: '#22222273',
    borderRadius: 10,
    overflow: 'hidden',
    margin: 5,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', // Center horizontally
  },
  textContainer: {
    backgroundColor: '#22222273',
    height: '100%',
    width: '100%',
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },
  text: {
    fontFamily: 'Inter-Reg',
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    textTransform: 'capitalize',
  },
});

export default CategoryCard;
