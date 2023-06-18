import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Link } from "expo-router";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import {
  HomeSlideData,
  HomecategoryData,
  HomePopularData,
  BestSellerData,
} from "../../../Data/HomeData";
import SliderCard from "../../../components/sliderCard";
import CategoryCard from "../../../components/categoryCard";
import PopularCard from "../../../components/popularCards";
import BestSellerCard from "../../../components/BestSellerCard";
import { useState, useRef } from "react";
import { Dimensions } from "react-native";
import { styles } from "./home.style";

const Home = () => {
  const [isactive, setIsActive] = useState(0);
  const itemWidth = Dimensions.get("window").width - 230; //chang later

  const onScroll = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.floor(offsetX / itemWidth);
    console.log(index);
    setIsActive(index);
  };
  return (
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
            placeholder="search for a vendor or product here"
            style={styles.searchInput}
          />
        </View>
        <Ionicons name="options-outline" size={27} color="green" />
      </View>
      <ScrollView>
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
                { backgroundColor: `${isactive === 0 ? "green" : "#C4C4C4"}` },
              ]}
            ></View>
            <View
              style={[
                styles.dot,
                { backgroundColor: `${isactive === 1 ? "green" : "#C4C4C4"}` },
              ]}
            ></View>
            <View
              style={[
                styles.dot,
                { backgroundColor: `${isactive === 2 ? "green" : "#C4C4C4"}` },
              ]}
            ></View>
          </View>
        </View>

        {/* Start of categories sections */}
        <View style={styles.categoryContainer}>
          <View style={styles.categoryMain}>
            <Text style={styles.categoryText}>Category</Text>
            <TouchableOpacity>
              <Link href="#" style={[styles.categoryText, { color: "green" }]}>
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
            <Text style={styles.categoryText}>Popular</Text>
            <TouchableOpacity>
              <Link href="#" style={[styles.categoryText, { color: "green" }]}>
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
            <Text style={styles.categoryText}>Best Seller</Text>
          </View>
          <FlatList
            data={BestSellerData}
            contentContainerStyle={{ paddingBottom: 340 }}
            renderItem={({ item, index }) => (
              <BestSellerCard item={item} key={item.id} />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
