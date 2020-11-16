import React, {useState} from "react";
import { StyleSheet, Modal, View, Text, Button, Alert, } from "react-native";

const createDialog = () => Alert.alert(
  'dialog title', 
  'sub title or message for dialog',
  [
    {
      text: 'Cancel',
      onPress: ()=>{},
      style: "cancel"
    },
    {
      text: 'Accept',
      onPress: ()=>console.log('boton press'),
    }
  ]
  )
export default function App() {
  const [modal, setModal] = useState(false)
  return (
    <View style={styles.container}>
      <Button title='Open dialog' onPress={createDialog}/>
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
