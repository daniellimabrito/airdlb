import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { connect } from "react-redux";

class Profile extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> Profile </Text>
                <TouchableOpacity                        
                     onPress={this.props.addItemToHome}  
                    style={styles.button}
                 >
                            <Text> ADD </Text>
                </TouchableOpacity>
                <TouchableOpacity                        
                     onPress={this.props.removeItemToHome}  
                    style={styles.button}
                 >
                            <Text> REMOVE </Text>
                </TouchableOpacity>
            </View>

        )
    }
}

 removeItem = () =>  Alert.alert(this.props.homeItems.length);

const mapStateToProps = (state) => {
    return  {
        homeItems: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return  {
       addItemToHome: (item) => dispatch({
           type: 'ADD_TO_HOME', payload: item
       }),
       removeItemToHome: (item) => dispatch({
        type: 'REMOVE_FROM_HOME', payload: item
    })
    }
}

export default connect(null, mapDispatchToProps)(Profile);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });