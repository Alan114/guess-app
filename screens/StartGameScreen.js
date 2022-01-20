import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import Colors from "../constants/colors";

const StartGameScreen = (props) => {
  return (
    <View style={styles.gameScreen}>
      <Text style={styles.title}>Start a new Game!</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a number</Text>
        <Input style={styles.input} />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Reset" color={Colors.accent} onPress={() => {}} />
          </View>
          <View style={styles.button}>
            <Button title="Confirm" color={Colors.primary} onPress={() => {}} />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  gameScreen: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  input: {
    width: 50,
    textAlign: "center",
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    width: 90,
  },
});

export default StartGameScreen;
