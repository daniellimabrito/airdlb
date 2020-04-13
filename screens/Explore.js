import React, { Component } from 'react'
import { Text, TextInput, View, StyleSheet, SafeAreaView, Platform, StatusBar, ScrollView, Image, Dimensions } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Category from '../components/Explore/Category';
import Home from '../components/Explore/Home';

const { height, width } = Dimensions.get('window')

class Explore extends React.Component {

    UNSAFE_componentWillMount() {
        this.startHeaderHeight= 80
        if (Platform.OS == 'android') {
            this.startHeaderHeight = 100 + StatusBar.currentHeight
        }
    }

    render() {
        return (

            <SafeAreaView style={{flex:1}}>
                <View style={{flex:1}}>
                    <View style={{height:this.startHeaderHeight, 
                          backgroundColor: 'white', 
                          borderBottomWidth:1, 
                          borderBottomColor: '#dddddd'}}>
                        <View style={{
                            flexDirection:'row', padding: 10,
                            backgroundColor: 'white', marginHorizontal:20,
                            shadowOffset: {width:0, height: 0},
                            shadowColor: 'black',
                            shadowOpacity: 0.2,
                            elevation:1,
                            marginTop: Platform.OS == 'android' ? 30 : null
                        }}>
                            <Icon name='ios-search' size={20} style={{marginRight: 10}}/>
                            <TextInput 
                                underlineColorAndroid="transparent"
                                placeholder="Try Vancouver" 
                                placeholderTextColor='grey' 
                                style={{ flex:1, fontWeight: '700', backgroundColor: 'white'}}
                            />
                        </View>                    
                    </View>
                    <ScrollView
                        scrollEventThrottle={16}
                    >
                        <View style={{flex:1, backgroundColor:'white', paddingTop:20}}>
                            <Text style={{fontSize:24, fontWeight:'700', paddingHorizontal:20}}>
                                What can we help you find, Daniel?
                            </Text>
                            <View style={{height:130, marginTop: 20}}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Category imageUri={require('../assets/home.jpeg')} name="Home" />
                                    <Category imageUri={require('../assets/experience.jpeg')} name="Experiences" />
                                    <Category imageUri={require('../assets/restaurant.jpeg')} name="Restaurant" />
                                </ScrollView>

                            </View>
                            <View style={{marginTop:40, paddingHorizontal: 20}}>
                                <Text style={{ fontSize:24, fontWeight: '700'}}>
                                    Introducing AirDLB Plus
                                </Text>
                                <Text style={{ fontWeight: '100', marginTop: 10}}>
                                    A new selection of homes verified for quality & comfort
                                </Text>
                                <View style={{ width: width - 40, height: 200, marginTop: 20}}>
                                    <Image style={{flex:1, height:null, width: null, resizeMode: 'cover', borderRadius:5, borderWidth:1,  borderColor: '#dddddd'}}
                                        source={require('../assets/home.jpeg')}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={{marginTop: 40}}>
                            <Text style={{paddingHorizontal:20, fontWeight: '700', fontSize:24 }}> 
                                Homes around the world
                            </Text>
                            <View style={{paddingHorizontal:20, marginTop: 20, flexDirection:'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                               <Home  width={width} 
                                    name="The cozy place"
                                    type="PRIVATE ROOM - 2 BEDS" 
                                    price={82} 
                                    rating={4}
                                    imageUri={require('../assets/home.jpeg')}
                                />
                                <Home  width={width} 
                                    name="The luxury place"
                                    type="PRIVATE ROOM - 4 BEDS" 
                                    price={120} 
                                    rating={4.5}
                                    imageUri={require('../assets/home2.jpeg')}
                                />   
                               <Home  width={width} 
                                    name="The cozy place"
                                    type="PRIVATE ROOM - 1 BED" 
                                    price={56} 
                                    rating={1.5}
                                    imageUri={require('../assets/home3.jpeg')}
                                />                                                                          
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        )
    }
}
export default Explore;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });