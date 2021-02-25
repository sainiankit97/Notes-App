import { NavigationContainer } from '@react-navigation/native';
import React,{useEffect,useState} from 'react';
import {Button,Text,TextInput,View,StyleSheet,AsyncStorage} from 'react-native';

const Notelist=({param,navigation,deletenote})=>{ 
    return(
        <View style={styles.container}>
            <Text style={styles.heading}>{param.title}</Text>
            <Text style={styles.text}>{param.description}</Text>
            <Button style={styles.button} title="Delete" onPress={()=>deletenote(param.id)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        borderWidth:1,
        marginRight:"2%",
        marginLeft:"2%",
        paddingLeft:15,
        paddingRight:15,
        marginTop:10,
        marginBottom:15,
        height:150
    },
    heading:{
        fontSize:20,
        fontWeight:"bold"
    },
    text:{
        marginTop:10,
        fontSize:15,
        marginBottom:10
    },
    button:{
        marginTop:30,
    }
})

export default Notelist;