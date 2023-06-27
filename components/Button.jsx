import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { ActivityIndicator } from "react-native";

const Button = ({ onPress, title, styleMain, styleTitle, disabled }) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.7}
      onPress={onPress}
      style={[styles.container, styleMain]}
    >
      {disabled ? (
        <ActivityIndicator size="large" />
      ) : (
        <Text style={[styles.text, styleTitle]}>{title}</Text>
      )}
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
