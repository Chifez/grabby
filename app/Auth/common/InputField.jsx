import { View, TextInput, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

const InputField = ({
  name,
  placeholder,
  extraStyle,
  secure,
  value,
  onChangeText,
  error,
  touched,
}) => {
  const [isSecure, setIssecure] = useState(false);

  const Togglesecure = () => {
    setIssecure(!isSecure);
  };

  return (
    <View style={styles.container(error, touched)}>
      <TextInput
        name={name}
        secureTextEntry={!isSecure && secure ? secure : false}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
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
      {touched && error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: (error, touched) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderColor: touched && error ? "red" : "#2C8E4E",
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    gap: 5,
    marginVertical: 15,
    position: "relative",
  }),
  input: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 20,
    fontFamily: "Roboto",
  },
  error: {
    position: "absolute",
    left: 0,
    bottom: -20,
    color: "red",
    flexWrap: "wrap",
  },
});

export default InputField;
