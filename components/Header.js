import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "orangered",
    height: 90,
    width: "100%",
    paddingTop: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 28,
    color: "white",
  },
});
export default Header;
