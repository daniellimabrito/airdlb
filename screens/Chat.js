import React, { Component } from 'react'
import { Text, View, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Platform, KeyboardAvoidingView} from 'react-native'
import {GiftedChat} from 'react-native-gifted-chat'
import Fire from '../API/fire'

var nameVal= '';

class Chat extends Component {

    state = {
        messages: []
    };

    continue = () => {
        this.props.navigation.navigate("Login", { name: nameVal });
    }

     BackToLoginScreen({ navigation }) {
        return (
         //<SafeAreaView >
            <View style={styles.container}>
                <Text>Please set username</Text>
                <Button
                title="Go to Inbox"
                onPress={this.continue}
                />
            </View>
          // </SafeAreaView>
        );
      }
     

    get user() {
      // console.log(this.props.navigation.state.params);
        nameVal = this.props.navigation.state.params === undefined || this.props.navigation.state.params.name === "" ? '' : this.props.navigation.state.name
        return {
            _id: Fire.uid,
            name: nameVal// this.props.navigation.state.params.name
        }
    }

    componentDidMount() {
        Fire.get(message =>
            this.setState(previous  => ({
                messages: GiftedChat.append(previous.messages, message)
            }))    
        )
    }

    componentWillUnmount() {
        Fire.off();
    }

    render() {
        const chat = <GiftedChat messages={this.state.messages} onSend={Fire.send} user={this.user} />;
        
        if (Platform.OS === 'android'){
            return(
                <KeyboardAvoidingView state={{flex:1}} behavior="padding" keyboardVerticalOffset={30} enabled>
                 {chat}
                </KeyboardAvoidingView>
            )
        }

        if (nameVal === ''){
            //return <View style={styles.container}><Text>User not specified</Text></View>  //this.BackToLoginScreen 
            return ( <SafeAreaView style={styles.container}>
                        <Text style={styles.message}>Invalid username</Text>
                       
                        <TouchableOpacity                        
                        onPress={this.continue}
                        style={styles.button}
                        >
                            <Text> Go to Inbox </Text>
                        </TouchableOpacity>
                    </SafeAreaView>
            )
        }
        
        return <View style={{flex:1}}>{chat}</View> 
    }
}


export default Chat;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
        fontSize: 16,
        backgroundColor: '#ddd',
        padding: 10,
        height:40,
        width:100,
        borderRadius: 5,
        shadowRadius: 1
    },
    message: {
        fontSize: 22,
        fontWeight: '600',
        
        marginBottom:20
    }
  });