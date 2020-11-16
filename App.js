import React from "react";
import { StyleSheet, ImageBackground, View, Text,} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.photo}
        source={{uri:'https://placedog.net/500/280'}}
      >
        <Text>Caddy</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  photo: {
    height: 500,
    width: 280
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch", //center,flex-start, flex-end, stretch, baseline
    justifyContent: "center", //center, flex-start, flex-end, space-between, space-around, space-evenly
    paddingTop: 22,
  },  
});
