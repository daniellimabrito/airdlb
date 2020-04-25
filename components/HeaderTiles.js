import React, { Component, ScrollView } from 'react'
import { Text, View } from 'react-native'
import Category from '../components/Explore/Category';

class HeaderTiles extends Component {
  
    render() {
        return (
           
            <View style={{flex:1}}>
                 <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{flex:1}}>
                    <Category imageUri={require('../assets/home.jpeg')} name="Home" />
                    <Category imageUri={require('../assets/experience.jpeg')} name="Experiences" />
                    <Category imageUri={require('../assets/restaurant.jpeg')} name="Restaurant" />
                </ScrollView>
            </View>
       
        )
    }
}

export default HeaderTiles;
