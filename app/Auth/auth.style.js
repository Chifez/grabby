import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 50,
  },
  logoContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  logoImage: {
    width: 40,
    height: 54,
    resizeMode: "contain",
  },
  logoText: {
    fontSize: 20,
    fontFamily: "Inter-Mid",
    fontWeight: 600,
  },
  intro: {
    fontFamily: "Inter-Mid",
    fontSize: 30,
    fontWeight: 600,
    paddingHorizontal: 10,
    marginRight: "auto",
    paddingVertical: 10,
  },
  tabsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
  },
  // tab: (active, page) => ({
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   borderBottomWidth: 4,
  //   borderColor: active == page ? "green" : "#2C8E4E33",
  //   width: "50%",
  //   paddingVertical: 10,
  // }),
  // Text: (active, page) => ({
  //   fontFamily: "Inter-Mid",
  //   fontSize: 20,
  //   fontWeight: 700,
  //   color: active == page ? "green" : "#2C8E4E33",
  // }),
});
