import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";

const SignUp = () => {
  const { width } = Dimensions.get("window");
  return (
    <View style={[styles.container, { width }]}>
      <Text>SignUp</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    borderColor: "red",
    borderWidth: 2,
  },
});

export default SignUp;
