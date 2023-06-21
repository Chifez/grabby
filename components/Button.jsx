import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const Button = ({ onPress, title, styleMain, styleTitle }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[styles.container, styleMain]}
    >
      <Text style={[styles.text, styleTitle]}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 6,
    paddingVertical: 8,
    backgroundColor: "#2C8E4E",
    borderRadius: 12,
  },
  text: {
    fontFamily: "Inter-Mid",
    fontWeight: 600,
    color: "white",
    fontSize: 24,
  },
});

export default Button;
