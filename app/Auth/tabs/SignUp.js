import { View, Text, StyleSheet } from "react-native";
import InputField from "../common/InputField";
import React, { useState } from "react";
import CheckBox from "expo-checkbox";
import { ScrollView } from "react-native-gesture-handler";
import Button from "../../../components/Button";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import { Formik } from "formik";
import { SignupValidation } from "../common/validationSchema";

const SignUp = ({ handleToggleTab, active }) => {
  const [isChecked, setIsChecked] = useState(true);
  const router = useRouter();
  const InitialValue = {
    name: "",
    email: "",
    number: "",
    password: "",
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Formik
          initialValues={InitialValue}
          validationSchema={SignupValidation}
          onSubmit={(values) => {
            // Handle form submission
            console.log(values);
            router.push("Auth/verify");
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <>
              <View>
                <InputField
                  placeholder="Full name"
                  value={values.name}
                  onChangeText={handleChange("name")}
                  error={errors.name}
                  touched={touched.name}
                />

                <InputField
                  placeholder="Email"
                  value={values.email}
                  onChangeText={handleChange("email")}
                  error={errors.email}
                  touched={touched.email}
                />

                <InputField
                  placeholder="Phone number"
                  value={values.number}
                  onChangeText={handleChange("number")}
                  error={errors.number}
                  touched={touched.number}
                />

                <InputField
                  placeholder="Password"
                  value={values.password}
                  onChangeText={handleChange("password")}
                  error={errors.password}
                  touched={touched.password}
                  secure={true}
                />
              </View>

              <View style={styles.rmContainer}>
                <CheckBox
                  style={styles.checkbox}
                  value={isChecked}
                  onValueChange={() => setIsChecked(!isChecked)}
                  color={isChecked ? "green" : undefined}
                />
                <Text style={styles.rmText}>
                  I agree to the terms of service and privacy policy
                </Text>
              </View>
              <View style={styles.rmContainer}>
                <CheckBox
                  style={styles.checkbox}
                  value={isChecked}
                  onValueChange={() => setIsChecked(!isChecked)}
                  color={isChecked ? "green" : undefined}
                />
                <Text style={styles.rmText}>
                  I agree to receiving newsletter from grabby on updates.
                </Text>
              </View>
              <Button
                title="Sign Up"
                onPress={handleSubmit}
                styleMain={{ marginVertical: 15 }}
                styleTitle={{ fontSize: 20, fontWeight: 700, padding: 4 }}
              />
            </>
          )}
        </Formik>
        <View style={styles.orContainer}>
          <View style={styles.dash}></View>
          <Text style={styles.orText}>OR</Text>
        </View>
        <Text style={styles.siText}>Sign up with</Text>
        <View style={styles.iconContainer}>
          <AntDesign name="google" size={45} color="crimson" />
          <FontAwesome5 name="facebook" size={45} color="#4478FF" />
          <AntDesign name="apple1" size={45} color="black" />
        </View>
        <View style={styles.footercontainer}>
          <Text style={styles.footerText}>Already have an account?</Text>
          <Text
            style={[styles.footerText, { color: "green" }]}
            onPress={() => handleToggleTab("signin")}
          >
            {" "}
            Sign In
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    paddingBottom: 180,
  },
  rmContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginVertical: 15,
  },
  rmText: {
    flex: 1,
    fontFamily: "Inter-Reg",
    fontSize: 16,
    flexWrap: "wrap",
  },
  checkbox: {
    width: 30,
    height: 30,
    borderRadius: 5,
    borderColor: "black",
    color: "green",
  },
  orContainer: {
    position: "relative",
    width: "100%",
    paddingVertical: 18,
  },
  dash: {
    width: "100%",
    height: 1,
    backgroundColor: "black",
  },
  orText: {
    position: "absolute",
    backgroundColor: "white",
    top: 0,
    left: "33%",
    paddingHorizontal: 40,
    zIndex: 4,
    fontFamily: "Inter-Reg",
    fontSize: 24,
    textAlign: "center",
  },
  siText: {
    fontSize: 20,
    fontFamily: "Inter-Mid",
    fontWeight: 700,
    textAlign: "center",
    marginVertical: 10,
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  footercontainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  footerText: {
    fontFamily: "Inter-Mid",
    fontSize: 18,
    fontWeight: 600,
    color: "gray",
  },
});

export default SignUp;
