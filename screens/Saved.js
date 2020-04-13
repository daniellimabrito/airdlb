import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

class Saved extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> Saved </Text>
            </View>
        )
    }
}
export default Saved;

const styles = StyleSheet.create({
    container: {
      flex: 1,
     // backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });