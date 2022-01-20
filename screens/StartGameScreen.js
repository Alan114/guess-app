import React from "react";
import { View, Text, StyleSheet } from "react-native";

const StartGameScreen = (props) => {
  return (
    <View style={styles.gameScreen}>
      <Text>Start a new Game!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  gameScreen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    backgroundColor: "whitesmoke",
  },
});

export default StartGameScreen;
