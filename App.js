import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const Texto = ({style}) => {
  const [texto, setTexto] = useState("Hi World!")
  const updateText = () => {
    setTexto("Bye World!")
  }
  return (
    <Text style={[styles.text, style]} onPress={updateText}>{texto}</Text>
  )
};

export default function App() {
  return (
    <View style={styles.container}>
      <Texto style={styles.red} />
      <Texto style={styles.green} />
      <Texto style={styles.blue} />    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 25,
  },
  red: {
    //flex: 1,
    backgroundColor: 'red',    
  },
  green: {
    //flex: 2,
    backgroundColor: 'green',
  },
  blue: {
    //flex: 3,
    backgroundColor: 'blue',
  },
  container: {
    flex: 1,
    flexDirection: 'column',//row,row-reverse, column, column-reverse
    backgroundColor: "#fff",
    alignItems: "baseline",//center,flex-start, flex-end, stretch, baseline
    justifyContent: "space-evenly",//center, flex-start, flex-end, space-between, space-around, space-evenly
  },
});
