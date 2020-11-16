import React from "react";
import { StyleSheet, Image, View} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.photo}
        source={{uri:'https://placedog.net/500/280'}}
      />
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
