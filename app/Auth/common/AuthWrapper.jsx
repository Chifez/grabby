import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";

const AuthWrapper = ({ items }) => {
  const { width } = Dimensions.get("window");

  const { page } = items;
  return (
    <View style={[styles.container, { width }]}>
      <>{page}</>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // display: "flex",
    // flexDirection: "column",
    paddingHorizontal: 10,
    paddingTop: 20,
  },
});

export default AuthWrapper;
