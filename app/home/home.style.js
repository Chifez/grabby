import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    fontFamily: "Inter-Black",
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerLeftName: {
    fontSize: 16,
    fontFamily: "Inter-Reg",
  },
  headerLeftBold: {
    fontSize: 18,
    fontWeight: 700,
    paddingVertical: 3,
    fontFamily: "Inter-Bold",
  },
  boldColored: {
    color: "#2C8E4E",
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
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 10,
    width: "85%",
  },
  searchInput: {
    flex: 1,
  },
  dotContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 2,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  dot: {
    width: 10,
    height: 10,
    margin: 2,
    borderRadius: 10,
  },
});
