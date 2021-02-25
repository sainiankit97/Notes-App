import React,{useState,useEffect} from 'react';
import {Button,Text,TextInput,View,StyleSheet,AsyncStorage,ScrollView,ActivityIndicator} from 'react-native';
import Notelist from "./Noteslist";

const Dashboard=({route,navigation})=>{
    const [messages,setmessages]=useState([]);
    let currentuser=route.params.currentuser;

    useEffect(() => {
        if (route.params) {
            pushmessage(route.params)    
        }
      }, [route.params]);
    
    useEffect(()=>{
        getmessages();
    },[]);

    const pushmessage=async(params)=>{
        const {title,description,currentuser,id}=params;
        if(title!==undefined && description!==undefined)
        {
            var item={title,description,currentuser,id};
            var notes= await AsyncStorage.getItem("messages");
            if(notes!==null){
                var parsedNotes = JSON.parse(notes);
                parsedNotes.push(item);
                var stringifiedNotes = JSON.stringify(parsedNotes);
                AsyncStorage.setItem("messages", stringifiedNotes);
            }
            else{
                var notes = [];
                notes.push(item);
                var stringifiedNotes = JSON.stringify(notes);
                AsyncStorage.setItem("messages", stringifiedNotes);
            }
        }
        getmessages();
    }
    let list;
    const getmessages=async()=>{
        let allNotes = await AsyncStorage.getItem("messages");
        let parsedNotes = JSON.parse(allNotes);
        setmessages(parsedNotes)
        // console.log(currentuser);
    }
    if(messages!==null){
        console.log(messages);
        const filtered=messages.filter(function(value){
            return value.currentuser===currentuser;
        })
        const deletenote=async(id)=>{
            var notes= await AsyncStorage.getItem("messages");
            var parsedNotes = JSON.parse(notes);
            const filtereddata = parsedNotes.filter(function(item){
                return item.id !== id
            });
            setmessages(filtereddata);
            console.log(filtereddata);
            var stringifiedNotes = JSON.stringify(filtereddata);
            AsyncStorage.setItem("messages",stringifiedNotes);
        }
        list=filtered.map(data => <Notelist param={data} key={data.id} navigation={navigation} deletenote={deletenote}/>);
    }
    const moveon=()=>{
        navigation.navigate("addnote");
    }
    const logout=async()=>{
        await AsyncStorage.removeItem("username");
        navigation.navigate("Login");
    }
    return(
        <>
        <View style={styles.container1}>
            <Button title="Add Notes" onPress={moveon}/>
        </View>
        <View style={styles.container2}>
            <ScrollView>
                {messages===null?<ActivityIndicator/>:list}
            </ScrollView>
        </View>
        <View style={styles.container3}>
            <Button style={styles.button} title="Logout" onPress={logout}/>
        </View>
        </>
    )
}
const styles=StyleSheet.create({
    container1:{
        flexDirection:'row-reverse',
        justifyContent:'flex-start',
        flex:0.3
    },
    container2:{
        flex:4.2  
    },
    container3:{
        flex:0.3,
        alignItems:"center",
        flexDirection:"row",
        justifyContent:'flex-end'
    }
})
export default Dashboard;