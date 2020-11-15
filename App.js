import { StatusBar } from "expo-status-bar";
import React,{useState} from "react";
import { StyleSheet, Text, TextInput, View, Dimensions, Button, TouchableHighlight} from "react-native";

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
      <TouchableHighlight 
        underlayColor={'#999'}
        activeOpacity={0.2}
        onPress={()=>{
        setSubmit(text)
        alert('Texto enviado con exito')
      }}>
        <Text>Aceptar</Text>
      </TouchableHighlight>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({  
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
