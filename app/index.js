import { useCallback, useEffect, useState, useRef } from "react";
import { Text, View, FlatList, Dimensions, StyleSheet } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { Link, useRouter } from "expo-router";
import { useFonts } from "expo-font";
import { startPageData } from "../Data/startUpData";
import OnBoarding from "../components/onBoarding";
import Button from "../components/Button";
import { ActivityIndicator } from "react-native";
import { useBoundedStore } from "../features/store";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [renderButton, setRenderButton] = useState(true);
  const auth = useBoundedStore((state) => state.user);

  const router = useRouter();
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../assets/fonts/Inter-Black.ttf"),
    "Inter-Reg": require("../assets/fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("../assets/fonts/Inter-Bold.ttf"),
    "Inter-Mid": require("../assets/fonts/Inter-Medium.ttf"),
    Roboto: require("../assets/fonts/Roboto-Regular.ttf"),
  });
  const flatListRef = useRef(null);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync(Entypo.font);
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
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
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="green" />
      </View>
    );
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
    if (auth) {
      router.push("Home");
    } else {
      router.push("Auth");
    }
  };

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
      />
      <View style={styles.dotContainer}>
        <View style={styles.dot(currentIndex, 0)}></View>
        <View style={styles.dot(currentIndex, 1)}></View>
        <View style={styles.dot(currentIndex, 2)}></View>
      </View>
      <View style={styles.navContainer(currentIndex)}>
        {/* {currentIndex === 1 ? (
          <Button
            title="Back"
            onPress={handlePrev}
            styleMain={{ width: 130, paddingHorizontal: 3 }}
            styleTitle={{}}
          />
        ) : null} */}
        {currentIndex === 0 || currentIndex === 1 ? (
          <Button
            title="Next"
            onPress={handleNext}
            styleMain={{ width: 130, paddingHorizontal: 3 }}
          />
        ) : null}
        {currentIndex == 2 ? (
          <Button
            title="Get Started"
            onPress={handleGetStarted}
            styleMain={{ width: "100%" }}
            styleTitle={{ fontWeight: 700 }}
          />
        ) : null}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  dotContainer: {
    position: "absolute",
    top: "52%",
    right: "50%",
    left: "40%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  dot: (active, index) => ({
    width: active == index ? 32 : 20,
    height: 6,
    borderRadius: 3,
    backgroundColor: active == index ? "green" : "gray",
  }),
  navContainer: (currentIndex) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: currentIndex == 1 ? "space-between" : "flex-end",
    justifyContent: "flex-end",

    width: "100%",
    paddingHorizontal: 10,
    marginVertical: 10,
  }),
});
