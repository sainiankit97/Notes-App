import React,{useState,useEffect} from 'react';
import {Button,Text,TextInput,View,StyleSheet,AsyncStorage} from 'react-native';
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid';

const addnote=({navigation})=>{
    const [title,settitle]=useState("");
    const [description,setdescription]=useState("");
    const [error,setError]=useState("");

    const pushmessage=()=>{
        var item=new Object();
        item.title=title;
        item.description=description;
        item.id=uuidv4();
        if(!title){
            setError("Please enter a valid title!");
            return;  
        }
        setError("");
        navigation.navigate("Dashboard",item);
    }
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Add Note</Text>
            <TextInput onChangeText={(text)=>settitle(text)} style={styles.title} placeholder="Title"/>
            <TextInput onChangeText={(text)=>setdescription(text)} style={styles.description} placeholder="Description"></TextInput>
            <Text style={styles.errorMsg}>{error}</Text>
            <Button title="Add" onPress={pushmessage}></Button>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop:60,
        justifyContent: "center",
        alignItems: "center",
        borderWidth:1,
        backgroundColor:"#fffff0",
        borderColor:"#f5f5f5",
        margin:"5%",
        padding:10
    },
    text:{
        marginVertical:20,
        alignItems:"stretch",
        fontSize:30
    },
    loginTextStyle: {
        fontSize: 25,
        fontWeight: "700",
        marginVertical: 20
    },
    title: {
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5,
        fontSize: 20,
        padding: 10,
        width: "90%",
        marginBottom: 20,
    },
    description: {
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5,
        fontSize: 20,
        padding: 70,
        width: "90%",
        marginBottom: 20,
    },
    errorMsg:{
        color:"red"
    }
})
export default addnote;