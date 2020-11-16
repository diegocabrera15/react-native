import React from "react";
import { StyleSheet, ActivityIndicator, View} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ActivityIndicator 
        size='small' color='#000f'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch", //center,flex-start, flex-end, stretch, baseline
    justifyContent: "center", //center, flex-start, flex-end, space-between, space-around, space-evenly
    paddingTop: 22,
  },  
});
