import { useCallback, useEffect, useState, useRef } from "react";
import {
  Text,
  View,
  FlatList,
  Dimensions,
  Button,
  StyleSheet,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { Link } from "expo-router";
import { useFonts } from "expo-font";
import { startPageData } from "../Data/startUpData";
import OnBoarding from "../components/onBoarding";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../assets/fonts/Inter-Black.ttf"),
    "Inter-Reg": require("../assets/fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("../assets/fonts/Inter-Bold.ttf"),
  });
  const flatListRef = useRef(null);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady && fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady, fontsLoaded]);

  if (!appIsReady) {
    return null;
  }

  const { width, height } = Dimensions.get("window");
  const SCREEN_WIDTH = width;

  const handleNext = () => {
    if (currentIndex < startPageData.length - 1) {
      const nextIndex = currentIndex + 1;
      flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex((next) => next + 1);
      console.log(currentIndex);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      flatListRef.current.scrollToIndex({ index: prevIndex, animated: true });
      setCurrentIndex((prev) => prev - 1);
      console.log(currentIndex);
    }
  };

  const handleGetStarted = () => {
    // Handle the "Get Started" action
  };

  //in this page you will be showing the startup page which links to the signin and signup page and if the user is already signed up or in you rediect to the home page without showing the start up page
  return (
    <View
      onLayout={onLayoutRootView}
      style={[styles.container, { width, height }]}
    >
      <FlatList
        horizontal
        ref={flatListRef}
        data={startPageData}
        renderItem={({ item }) => <OnBoarding item={item} key={item.id} />}
        keyExtractor={(item) => item.id}
        snapToInterval={SCREEN_WIDTH}
        snapToAlignment="start"
        scrollEnabled={false}
        // onScroll={(event) => {
        //   const { contentOffset } = event.nativeEvent;
        //   const currentIndex = Math.round(contentOffset.x / SCREEN_WIDTH);
        //   flatListRef.current.scrollPosition = currentIndex;
        // }}
      />
      <View>
        <View></View>
        <View></View>
        <View></View>
      </View>
      <View>
        <Button title="Back" onPress={handlePrev} />
        <Button title="Next" onPress={handleNext} />
        <Button title="Get Started" onPress={handleGetStarted} />
      </View>
      {/* <Link href="/Home">home</Link> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
    borderColor: "red",
  },
});
