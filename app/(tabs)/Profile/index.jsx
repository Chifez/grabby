import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
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
export default Profile;
