import {
  View,
  TextInput,
  Modal,
  StyleSheet,
  Text,
  FlatList,
} from 'react-native';
import React, { useEffect } from 'react';
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import SearchCard from './searchCard';
import { searchResult } from '../Data/searchResults';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, {
  event,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { Dimensions } from 'react-native';
let bottomSheetHeight = 0;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SearchModal = ({ isVisible, onClose }) => {
  const translateY = useSharedValue(0);
  const context = useSharedValue({ y: 0 });
  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value };
    })
    .onUpdate((event) => {
      translateY.value = event.translationY + context.value.y;
      bottomSheetHeight = event.translationY + context.value.y;
      translateY.value = Math.max(translateY.value, -SCREEN_HEIGHT + 50);
      console.log('event', event.translationY);
    });

  const rBottomStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });
  useEffect(() => {
    translateY.value = withSpring(-SCREEN_HEIGHT / 1.5);
  }, []);
  return (
    <Modal
      visible={isVisible}
      // style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
    >
      <View style={styles.container}>
        <GestureDetector gesture={gesture}>
          <Animated.View style={[styles.Scontainer, rBottomStyle]}>
            <View style={styles.line} />
            <View style={styles.searchContainer}>
              <Ionicons
                name="md-chevron-back"
                size={24}
                color="black"
                onPress={onClose}
              />
              <View style={styles.searchBox}>
                <EvilIcons name="search" size={24} color="black" />
                <TextInput
                  placeholder="search for a vendor or product here"
                  style={styles.searchInput}
                />
              </View>
              <Ionicons name="options-outline" size={27} color="green" />
            </View>
            <View>
              <FlatList
                data={searchResult}
                scrollEnabled={true}
                scrollToEnd={true}
                numColumns={3}
                renderItem={({ item, index }) => (
                  <SearchCard item={item} key={item.id} />
                )}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.flatListContainer}
                style={{
                  height: SCREEN_HEIGHT / 1.3,
                }}
              />
            </View>
          </Animated.View>
        </GestureDetector>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
    // paddingHorizontal: 3,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    fontFamily: 'Inter-Black',
    width: '100%',
    height: '100%',
  },
  Scontainer: {
    width: '100%',
    height: SCREEN_HEIGHT, // WORK HAS TO BE DONE HERE
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'white',
    paddingHorizontal: 3,
    position: 'absolute',
    top: SCREEN_HEIGHT,
    overflow: 'scroll',
  },
  line: {
    width: 75,
    height: 5,
    alignSelf: 'center',
    backgroundColor: 'lightgray',
    borderRadius: 3,
    marginVertical: 10,
  },
  searchContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
    paddingVertical: 5,
  },
  searchBox: {
    display: 'flex',
    flexDirection: 'row',
    gap: 3,
    alignItems: 'center',
    backgroundColor: '#E5E5E5',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    width: '80%',
  },
  searchInput: {
    flex: 1,
  },

  flatListContainer: {
    paddingHorizontal: 2,
    paddingHorizontal: 2,
  },
});

export default SearchModal;
