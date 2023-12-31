import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Link } from 'expo-router';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import {
  HomeSlideData,
  HomecategoryData,
  HomePopularData,
  BestSellerData,
} from '../../../Data/HomeData';
import SliderCard from './common/card/sliderCard';
import CategoryCard from './common/card/categoryCard';
import PopularCard from './common/card/popularCards';
import BestSellerCard from './common/card/BestSellerCard';
import { useState, useRef } from 'react';
import { Dimensions } from 'react-native';
import { styles } from './home.style';
import SearchModal from '../../../components/searchModal';
import {
  GestureHandlerRootView,
  GestureDetector,
} from 'react-native-gesture-handler';

const Home = () => {
  const [isactive, setIsActive] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isInputFocused, setInputFocused] = useState(false);

  const itemWidth = Dimensions.get('window').width - 230; //chang later

  const closeModal = () => {
    setModalVisible(false);
    console.log(isInputFocused, isModalVisible);
  };

  const handleInputFocus = () => {
    setInputFocused(true);
    setModalVisible(true);
    console.log(isInputFocused, isModalVisible);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
    console.log(isInputFocused, isModalVisible);
  };
  const onScroll = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.floor(offsetX / itemWidth);
    console.log(index);
    setIsActive(index);
  };
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.headerLeft}>
            <Text style={styles.headerLeftName}>Hello, Emmanuel!</Text>
            <Text style={styles.headerLeftBold}>
              Let's get <Text style={styles.boldColored}>Shopping</Text>
            </Text>
          </View>
          <Ionicons name="ios-notifications-outline" size={27} color="black" />
        </View>
        <View style={styles.searchContainer}>
          <View style={styles.searchBox}>
            <EvilIcons name="search" size={24} color="black" />
            <TextInput
              onPressIn={handleInputFocus}
              // onFocus={handleInputFocus}
              // onBlur={handleInputBlur}
              placeholder="search for a vendor or product here"
              style={styles.searchInput}
            />
          </View>
          <Ionicons name="options-outline" size={27} color="green" />
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}
        >
          <View>
            {/* start of hero tags */}
            <View>
              <FlatList
                horizontal
                data={HomeSlideData}
                renderItem={({ item, index }) => (
                  <SliderCard item={item} key={item.id} />
                )}
                keyExtractor={(item) => item.id}
                onScroll={onScroll}
              />
              <View style={styles.dotContainer}>
                <View
                  style={[
                    styles.dot,
                    {
                      backgroundColor: `${
                        isactive === 0 ? 'green' : '#C4C4C4'
                      }`,
                    },
                  ]}
                ></View>
                <View
                  style={[
                    styles.dot,
                    {
                      backgroundColor: `${
                        isactive === 1 ? 'green' : '#C4C4C4'
                      }`,
                    },
                  ]}
                ></View>
                <View
                  style={[
                    styles.dot,
                    {
                      backgroundColor: `${
                        isactive === 2 ? 'green' : '#C4C4C4'
                      }`,
                    },
                  ]}
                ></View>
              </View>
            </View>

            {/* Start of categories sections */}
            <View style={styles.categoryContainer}>
              <View style={styles.categoryMain}>
                <Text style={styles.mainText}>Category</Text>
                <TouchableOpacity>
                  <Link
                    href="/Category"
                    style={[styles.mainText, { color: 'green' }]}
                  >
                    View all
                  </Link>
                </TouchableOpacity>
              </View>
              <FlatList
                horizontal
                data={HomecategoryData}
                renderItem={({ item, index }) => (
                  <CategoryCard item={item} key={item.id} />
                )}
                keyExtractor={(item) => item.id}
              />
            </View>

            {/* Start of popular section */}

            <View style={styles.categoryContainer}>
              <View style={styles.categoryMain}>
                <Text style={styles.mainText}>Popular</Text>
                <TouchableOpacity>
                  <Link href="#" style={[styles.mainText, { color: 'green' }]}>
                    View all
                  </Link>
                </TouchableOpacity>
              </View>
              <FlatList
                horizontal
                data={HomePopularData}
                renderItem={({ item, index }) => (
                  <PopularCard item={item} key={item.id} />
                )}
                keyExtractor={(item) => item.id}
              />
            </View>
            {/* Start of best seller section */}
            <View style={styles.bestSellerContainer}>
              <View style={styles.categoryMain}>
                <Text style={styles.mainText}>Best Seller</Text>
              </View>
              <View>
                {BestSellerData.map((item) => (
                  <BestSellerCard item={item} key={item.id} />
                ))}
              </View>
            </View>
          </View>
        </ScrollView>

        <SearchModal
          isVisible={isModalVisible && isInputFocused}
          onClose={closeModal}
        />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default Home;
