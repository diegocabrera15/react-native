import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { Camera } from "expo-camera";

export default function App() {
  const [permissions, setPermissions] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const getPermissions = async () => {
    const { status } = await Camera.requestPermissionsAsync();
    setPermissions(status == "granted");
  };
  useEffect(() => {
    getPermissions();
  });
  if (permissions === null) {
    return (
      <View>
        <Text>Wating for permission</Text>
      </View>
    );
  }
  if (permissions === false) {
    return (
      <View>
        <Text>We can't access to camera :(</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <Button
          title="Chance camera"
          onPress={() => {
            const { front, back } = Camera.Constants.Type;
            const newType = type === back ? front : back;
            setType(newType);
          }}
        />
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  camera: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch", //center,flex-start, flex-end, stretch, baseline
    justifyContent: "center", //center, flex-start, flex-end, space-between, space-around, space-evenly
    paddingTop: 22,
  },
});
