import { StatusBar } from "expo-status-bar";
import React,{useState} from "react";
import { StyleSheet, Text, TextInput, View, Dimensions, Button, TouchableHighlight, TouchableNativeFeedback} from "react-native";

//const {width, height} = Dimensions.get('window')

export default function App() {
  const [text, setText] = useState('Chanchito feliz')
  const [submit, setSubmit] = useState('')
  return (
    <View style={styles.container}>
      <Text>Text: {submit}</Text>
      <TextInput style={styles.input} 
      placeholder='Escriba un texto' 
      onChangeText={t =>setText(t)}
      defaultValue={text}
      />
      <TouchableNativeFeedback 
        background={TouchableNativeFeedback.Ripple('#00f', true)}
        onPress={()=>{
        setSubmit(text)
        alert('Texto enviado con exito')
      }}>
        <View style={styles.view}><Text>Aceptar</Text></View>
      </TouchableNativeFeedback>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({  
  view:{
    flex: 0.5
  },
  input: {
    height:40,
    width: '100%',//width
    borderBottomColor:'#eee',
    borderBottomWidth: 1
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",//center,flex-start, flex-end, stretch, baseline
    justifyContent: "center",//center, flex-start, flex-end, space-between, space-around, space-evenly
  },
});
