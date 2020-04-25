import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { Provider } from "react-redux";
import store  from "./store";

import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Explore from './screens/Explore';  
import Saved from './screens/Saved';  
import Trips from './screens/Trips';  
import Inbox from './screens/Inbox';  
import Profile from './screens/Profile';  
import Chat from './screens/Chat';  
import Login from './screens/Login';  
import { grey } from 'color-name';
import color from 'color';


const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();

CreateBottomTabs = (props) => {
  return  <MaterialBottomTabs.Navigator 
             shifting={true}
              sceneAnimationEnabled={true}
              activeColor='red'
              inactiveColor='grey'
              tabBarColor="pink"
              barStyle={{ backgroundColor: '#fff' }}
            >
          <MaterialBottomTabs.Screen name="Explore" component={Explore} options= {{ tabBarColor:'white', tabBarBadge:false,tabBarLabel:'Explore', tabBarIcon: ({tintColor}) => (<Icon name="ios-search" color = {tintColor} size={26} />)}} />
          <MaterialBottomTabs.Screen name="Saved" component={Saved}  options= {{tabBarColor:'#eeefff', tabBarBadge:false,tabBarLabel:'Saved', tabBarIcon: ({tintColor}) => (<Icon name="ios-heart" color = {tintColor} size={26} />)}} />
          <MaterialBottomTabs.Screen name="Trips" component={Trips} options= {{tabBarColor:'#ccccaa', tabBarBadge:false,tabBarLabel:'Trips', tabBarIcon: ({tintColor}) => ( <Image source={require('./assets/airbnb.png')} style= {{height:26, width:26 , tintColor: tintColor}} />)}} />
          <MaterialBottomTabs.Screen name="Inbox" children={this.createChatStack} options= {{tabBarColor:'#F2F2F2', tabBarBadge:false,tabBarLabel:'Inbox', tabBarIcon: ({tintColor}) => (<Icon name="ios-chatboxes" color = {tintColor} size={26} />)}} />
          <MaterialBottomTabs.Screen name="Profile" component={Profile} options= {{tabBarColor:'#FFFCCC', tabBarBadge:false, tabBarLabel:'Profile', tabBarIcon: ({tintColor}) => (<Icon name="ios-person" color = {tintColor} size={26} />)}} />
          </MaterialBottomTabs.Navigator>
}



createChatStack = (props) =>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login}  />
      <Stack.Screen name="Chat" component={Chat}  navigation={props}/>
    </Stack.Navigator>

export default () => {
 return (
   <Provider store={store}>
    <NavigationContainer>
      <CreateBottomTabs />
    </NavigationContainer>
    </Provider>
 )
}
  



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  
    tabBarOptions: {
     // activeTitnColor: 'red',
     // inactiveTitnColor: 'grey',
        backgroundColor: 'white',
        borderTopWidth: 0,
        shadowOffset: {width:5, height: 3},
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 5
    
    }  
});
