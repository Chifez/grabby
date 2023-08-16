import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

const SliderCard = ({ item }) => {
  const { title, image, color } = item;
  return (
    <View style={styles.container}>
      <View style={[styles.titleContainer, { backgroundColor: `${color}` }]}>
        <View style={styles.titleText}>
          {title.map((item, idx) => (
            <Text key={idx} style={styles.text}>
              {item}
            </Text>
          ))}
        </View>
      </View>
      <Image source={image} style={styles.imageBanner} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 2, // change later
    borderRadius: 5,
    overflow: 'hidden',
    width: 230, // change later
    height: 125,
    position: 'relative',
  },
  titleContainer: {
    zIndex: 10,
    borderBottomEndRadius: 65,
    borderTopEndRadius: 65,
    width: '65%',
    height: '100%',
  },
  titleText: {
    display: 'flex',
    gap: 3,
    height: '100%',
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: '5%',
  },
  text: {
    fontFamily: 'Inter-Bold',
    fontWeight: 700,
    textTransform: 'uppercase',
    color: 'white',
    fontSize: 16,
  },
  imageBanner: {
    flex: 1,
    width: '80%',
    height: '100%',
    position: 'absolute',
    right: 0,
    zIndex: -1,
    width: '80%',
    height: '100%',
  },
});
export default SliderCard;
