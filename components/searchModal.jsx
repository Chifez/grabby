import { View, TextInput, Modal, StyleSheet, Text } from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

const SearchModal = ({ isVisible, onClose }) => {
  return (
    <Modal
      visible={isVisible}
      // style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
    >
      <View style={styles.container}>
        <View style={styles.Scontainer}>
          <View style={styles.searchContainer}>
            <Ionicons
              name="md-chevron-back"
              size={24}
              color="black"
              onPress={onClose}
            />
            <View style={styles.searchBox}>
              <EvilIcons name="search" size={24} color="black" />
              <TextInput
                placeholder="search for a vendor or product here"
                style={styles.searchInput}
              />
            </View>
            <Ionicons name="options-outline" size={27} color="green" />
          </View>

          <ScrollView>
            <Text>Body</Text>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
    // paddingHorizontal: 3,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    fontFamily: "Inter-Black",
    width: "100%",
    height: "100%",
  },
  Scontainer: {
    flex: 1,
    width: "95%",
    height: "80%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: "white",
    paddingHorizontal: 3,
  },
  searchContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
    paddingVertical: 5,
  },
  searchBox: {
    display: "flex",
    flexDirection: "row",
    gap: 3,
    alignItems: "center",
    backgroundColor: "#E5E5E5",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    width: "80%",
  },
  searchInput: {
    flex: 1,
  },
});

export default SearchModal;
