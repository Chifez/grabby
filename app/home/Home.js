import { View, Text, SafeAreaView, TextInput, FlatList } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { heroSlideData } from "../../Data/HeroSlideData";
import SliderCard from "../../components/sliderCard";

import { styles } from "./home.style";

const Home = () => {
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
      <View>
        <FlatList
          data={heroSlideData}
          renderItem={({ item, index }) => (
            <SliderCard item={item} key={item.id} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
