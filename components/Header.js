import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import TitleText from "./TitleText";
import Colors from "../constants/colors";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <TitleText style={styles.title}>{props.title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "white",
    height: 90,
    width: "100%",
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: Platform.OS === "android" ? "transparent" : "#ddd",
    borderBottomWidth: Platform.OS === "android" ? 0 : 1,
  },
  title: {
    color: Platform.OS === "android" ? "white" : Colors.primary,
    fontSize: 24,
  },
});
export default Header;
