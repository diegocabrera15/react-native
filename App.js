import React from "react";
import { StyleSheet, Image, View} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.photo}
        source={require('./assets/icon.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  photo: {
    height: 60,
    width: 60
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch", //center,flex-start, flex-end, stretch, baseline
    justifyContent: "center", //center, flex-start, flex-end, space-between, space-around, space-evenly
    paddingTop: 22,
  },  
});
