import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import CheckBox from "expo-checkbox";
import { Link } from "expo-router";
import Button from "../../../components/Button";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import InputField from "../common/InputField";
import { useRouter } from "expo-router";
import { Formik } from "formik";
import { SignInValidation } from "../common/validationSchema";

const SignIn = ({ handleToggleTab }) => {
  const [isChecked, setIsChecked] = useState(true);
  const router = useRouter();

  const InitialValue = {
    email: "",
    password: "",
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={InitialValue}
        validationSchema={SignInValidation}
        onSubmit={(values) => {
          // Handle form submission
          console.log(values);
          router.push("Home");
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
                placeholder="Email"
                value={values.email}
                onChangeText={handleChange("email")}
                error={errors.email}
                touched={touched.email}
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
            <View style={styles.fgContainer}>
              <View style={styles.rmContainer}>
                <CheckBox
                  style={styles.checkbox}
                  value={isChecked}
                  onValueChange={() => setIsChecked(!isChecked)}
                  color={isChecked ? "green" : undefined}
                />
                <Text style={styles.rmText}>Remember me</Text>
              </View>
              <Link href="Auth/ForgotPassword" style={styles.rmText}>
                Forgot Password?
              </Link>
            </View>
            <Button
              title="Sign In"
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
      <Text style={styles.siText}>Sign in with</Text>
      <View style={styles.iconContainer}>
        <AntDesign name="google" size={45} color="crimson" />
        <FontAwesome5 name="facebook" size={45} color="#4478FF" />
        <AntDesign name="apple1" size={45} color="black" />
      </View>
      <View style={styles.footercontainer}>
        <Text style={styles.footerText}>Don't have an account?</Text>
        <Text
          style={[styles.footerText, { color: "green" }]}
          onPress={() => handleToggleTab("signup")}
        >
          {" "}
          Sign Up
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    // marginVertical: 10,
  },
  fgContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  rmContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  rmText: {
    fontFamily: "Inter-Reg",
    fontSize: 16,
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

export default SignIn;
