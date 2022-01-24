import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const handleNewGame = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  const handleStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const handleGameOver = (numOfRounds) => {
    setGuessRounds(numOfRounds);
  };

  let content = <StartGameScreen handleStartGame={handleStartGame} />;

  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} handleGameOver={handleGameOver} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        roundsNumber={guessRounds}
        userNumber={userNumber}
        onRestart={handleNewGame}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
