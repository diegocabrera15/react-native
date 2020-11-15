import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, SectionList,} from "react-native";

const data=[    
  

]
export default function App() {
  return (
    <View style={styles.container}>
      <SectionList
        sections={[{
          title: 'Group 1', 
          data: [
            { key: "1", name: "Diego" },
            { key: "2", name: "Fernando"},
            { key: "3", name: "Sandra"},
            { key: "4", name: "Cintya"},
            { key: "5", name: "Chelsea"},
          ]
        },
        {
          title: 'Group 2', 
          data: [
            { key: "6", name: "Diego" },
            { key: "7", name: "Fernando"},
            { key: "8", name: "Sandra"},
            { key: "9", name: "Cintya"},
            { key: "10", name: "Chelsea"},
          ]
        },
        {
          title: 'Group 3', 
          data: [
            { key: "11", name: "Diego" },
            { key: "12", name: "Fernando"},
            { key: "13", name: "Sandra"},
            { key: "14", name: "Cintya"},
            { key: "15", name: "Chelsea"},
          ]
        },
        {
          title: 'Group 4', 
          data: [
            { key: "16", name: "Diego" },
            { key: "17", name: "Fernando"},
            { key: "18", name: "Sandra"},
            { key: "19", name: "Cintya"},
            { key: "20", name: "Chelsea"},
          ]
        },
      ]}
        renderItem={({item}) =><Text style={styles.item}>{item.name}</Text>}
    renderSectionHeader={({section})=><Text style={styles.section}>{section.title}</Text>}
      />
      <StatusBar style="auto" />  
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
  item: {
    padding: 10,
    fontSize: 22,
    height:50,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1
  },
  section:{
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: '#eee',
    paddingTop:2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
  }
});
