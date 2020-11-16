import React, { useEffect } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import MapView from 'react-native-maps'
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
  return (
    <View style={styles.container}>
      <MapView 
        style={styles.map}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  map:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch", //center,flex-start, flex-end, stretch, baseline
    justifyContent: "center", //center, flex-start, flex-end, space-between, space-around, space-evenly
    paddingTop: 22,
  },
});
