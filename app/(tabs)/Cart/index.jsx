import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Cart = () => {
  return (
    <View style={styles.container}>
      <Text>Cart</Text>
      <Text>coming soon</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Cart;
