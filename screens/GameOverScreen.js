import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import Bodytext from "../components/BodyText";
import TitleText from "../components/TitleText";
import Colors from "../constants/colors";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>The game is over!!!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/success.png")}
          // source={{
          //   uri: "https://www.exoticca.com/uk/magazine/wp-content/uploads/2021/06/matterhorn-BLOG-mountains.png",
          // }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.resultContainer}>
        <Bodytext style={styles.resultText}>
          Your phone needed:{" "}
          <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
          guess the number was{" "}
          <Text style={styles.highlight}>{props.userNumber}</Text>
        </Bodytext>
      </View>

      <Button title="NEW GAME" onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 15,
  },
  resultText: {
    textAlign: "center",
    fontSize: 20,
  },
});

export default GameOverScreen;
