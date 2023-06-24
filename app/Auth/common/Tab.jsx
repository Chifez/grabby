import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import useTab from "./useTab";

const Tab = ({ title, page, handleToggleTab, active }) => {
  return (
    <TouchableOpacity
      style={styles.tab(active, page)}
      onPress={() => handleToggleTab(page)}
    >
      <View>
        <Text style={styles.Text(active, page)}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  tab: (active, page) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 4,
    borderColor: active == page ? "green" : "#2C8E4E33",
    width: "50%",
    paddingVertical: 10,
  }),
  Text: (active, page) => ({
    fontFamily: "Inter-Mid",
    fontSize: 20,
    fontWeight: 700,
    color: active == page ? "green" : "#2C8E4E33",
  }),
});
export default Tab;
