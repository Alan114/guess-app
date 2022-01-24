import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.primary,
    height: 90,
    width: "100%",
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 28,
    color: "white",
    fontFamily: "open-sans-bold",
  },
});
export default Header;
