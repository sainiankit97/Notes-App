import React,{useState,useEffect} from 'react';
import {Text,TextInput,View,StyleSheet,Button,AsyncStorage} from "react-native";

const Login=({navigation})=> {
    const [username,setUsername]=useState("");
    const [error,setError]=useState("");

    useEffect(()=>{
        isAuthorized()
    },[]);

    const isAuthorized = async () =>{
        const currentuser = await AsyncStorage.getItem("username");
        if(username){
            navigation.navigate("Dashboard",{currentuser});
        }
    }
    const logMeIn =() =>{
        if(!username){
            setError("Please enter a valid username");
            return;
        }
        let currentuser=username.toLowerCase();
        AsyncStorage.setItem("username",currentuser);
        setError("");
        navigation.navigate("Dashboard",{currentuser});
    }
    return(
        <View style={styles.container}>
            <Text style={styles.row}>Welcome to Your Personalised Notes</Text>
            <Text style={styles.loginTextStyle}>LOGIN</Text>
            <TextInput onChangeText={(text)=>setUsername(text)} style={styles.textInputStyle} placeholder="enter username...."/>
            <Text style={styles.errorMsg}>{error}</Text>
            <Button title="Log in" onPress={logMeIn}/>
        </View>
    )
}

const styles = StyleSheet.create({
    row:{
        fontSize:20,
        fontFamily:"sans-serif",
        borderBottomColor: "grey",
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    loginTextStyle: {
        fontSize: 25,
        fontWeight: "700",
        marginVertical: 20
    },
    textInputStyle: {
        borderColor: "blue",
        borderWidth: 1,
        borderRadius: 5,
        fontSize: 20,
        padding: 5,
        width: "60%",
        marginBottom: 20
    },
    errorMsg:{
        color:"red"
    }
})

export default Login;