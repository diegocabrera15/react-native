import React, {useState} from "react";
import { StyleSheet, Modal, View, Text, Button, } from "react-native";

export default function App() {
  const [modal, setModal] = useState(false)
  return (
    <View style={styles.container}>
      <Modal 
        animationType="slide"
        transparent={true}
        visible={modal}
        //onRequestClose permite ejecutar codigo cuando sea haya cerrado el modal
      >
        <View style={styles.center}>
          <View style={styles.content}>
            <Text>Soy un modal</Text>
            <Button title='Cerrar modal' onPress={()=>setModal(!modal)}/>
          </View>
        </View>
      </Modal>
      <Text>No soy un modal</Text>
      <Text>No soy un modal</Text>
      <Text>No soy un modal</Text>
      <Text>No soy un modal</Text>
      <Text>No soy un modal</Text>
      <Button title='Abrir modal' onPress={()=>setModal(!modal)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex:1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    margin:25
  },
  center: {
    flex:1,
    alignItems:'stretch',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)'
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch", //center,flex-start, flex-end, stretch, baseline
    justifyContent: "center", //center, flex-start, flex-end, space-between, space-around, space-evenly
    paddingTop: 22,
  },  
});
