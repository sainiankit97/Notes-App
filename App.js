import React from "react";

import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";

import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import notelist from './Components/Noteslist';
import addnote from './Components/Addnote';
const Stack = createStackNavigator();

const App = () =>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Dashboard" component={Dashboard}/>
        <Stack.Screen name="notelist" component={notelist}/>
        <Stack.Screen name="addnote" component={addnote}/>
        {/* <Stack.Screen name="FullNews" component={Description}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;