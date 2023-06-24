import { View, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

const InputField = ({ placeholder, extraStyle, secure }) => {
  const [isSecure, setIssecure] = useState(false);
  const Togglesecure = () => {
    setIssecure(!isSecure);
  };
  return (
    <View style={styles.container}>
      <TextInput
        secureTextEntry={secure ? secure : false}
        placeholder={placeholder}
        style={[styles.input, extraStyle]}
      />
      <View>
        {secure && (
          <>
            {isSecure ? (
              <MaterialIcons
                name="visibility-off"
                size={24}
                color="black"
                onPress={Togglesecure}
              />
            ) : (
              <MaterialIcons
                name="visibility"
                size={24}
                color="black"
                onPress={Togglesecure}
              />
            )}
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#2C8E4E",
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 3,
    paddingHorizontal: 10,
    gap: 5,
    marginVertical: 15,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 20,
    fontFamily: "Roboto",
  },
});

export default InputField;
