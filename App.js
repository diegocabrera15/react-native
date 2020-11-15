import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TextInput, View, Dimensions } from "react-native";

const width = Dimensions.get('window').width
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Text</Text>
      <TextInput style={styles.input}></TextInput>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({  
  input: {
    height:40,
    width: width,//'100%',
    backgroundColor: '#eee'
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",//center,flex-start, flex-end, stretch, baseline
    justifyContent: "center",//center, flex-start, flex-end, space-between, space-around, space-evenly
  },
});
