import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import * as Location from "expo-location";
import Constants from "expo-constants";

export default function App() {
  const findLocation = async () => {
    const { status } = await Location.requestPermissionsAsync();
    if (status !== "granted") {
      return Alert.alert("We dont have permissions");
    }
    const location = await Location.getCurrentPositionAsync();
    console.log(location);
  };
  useEffect(() => {
    findLocation();
  });
  return <View style={styles.container}></View>;
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
