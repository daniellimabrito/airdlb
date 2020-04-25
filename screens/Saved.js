import React, { Component } from 'react'                       
import { Text, View, StyleSheet, TouchableOpacity  } from 'react-native'
import { connect } from "react-redux";

class Saved extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> Saved </Text>
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
const mapDispatchToProps = (dispatch) => {
    return  {
        removeItemToHome: (item) => dispatch({
            type: 'REMOVE_FROM_HOME', payload: item
        }), 
       addItemToHome: (item) => dispatch({
           type: 'ADD_TO_HOME', payload: item
       })
    }
}
const mapStateToProps = (state) => {
    return  {
        homeItems: state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Saved);

const styles = StyleSheet.create({
    container: {
      flex: 1,
     // backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });