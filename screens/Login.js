import React, { Component } from 'react'
import { Text, View, TextInput, SafeAreaView, TouchableOpacity, StyleSheet, Image } from 'react-native'


 export default class Login extends React.Component {

    constructor(props){
        super(props);
        
 
    }  

    state = {
        name: ''
    }
    continue = () => {
        console.log(this.state.name);
        this.props.navigation.navigate("Chat", { name: this.state.name });
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
            <View style={styles.circle}>
                <View style={{paddingTop:250, alignItems:'center', justifyContent:'center'}}>
                <View >
                    <Text style={styles.header}>Username</Text>      
                </View>
                <View style={{paddingBottom:15, alignSelf:'flex-end',paddingRight: 80 }}>
                    <TextInput 
                        style={{borderWidth:1, 
                                borderColor:'grey',
                               // borderStyle: StyleSheet.hairlineWidth,
                                shadowOpacity: 0.3, 
                                borderRadius:7, 
                                width:250, 
                                height:35, 
                                paddingHorizontal:10}} 
                                onChangeText={name => {this.setState({name})
                                }} 
                                value={this.state.name}
                    />
                </View>
                <View style={{alignSelf:'flex-end', paddingRight: 80}}>
                    <TouchableOpacity  onPress={this.continue}>
                         <Image source={require('../assets/login-avatar.png')} style={{width:40, height: 40, alignSelf:'flex-end'}}/>  
                    </TouchableOpacity>
                </View>
                </View>
            </View>
            </SafeAreaView>
        )
    }
}

//export default Login;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F4f5f7',
   //   alignItems: 'center',
    //  justifyContent: 'center',
          },

    circle: {
        width: 500,
        height: 500,
        borderRadius: 500/2,
        position: 'absolute',
        left: -100,
        top:-30,
        backgroundColor: '#fff',
       
    },
    header: {
        fontWeight: '700',
        fontSize:30,
        color: '#514E5A',
        marginTop: 32

    }
  });