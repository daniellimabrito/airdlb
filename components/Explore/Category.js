import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

class Category extends React.Component {
    render() {
        return (
            <View style={{height:130, width:130,
                marginLeft: 20, borderWidth: 0.5,                                        
                borderColor: '#dddddd'                                    
            }}>
                <View style={{flex:2}}>
                    <Image source={this.props.imageUri} 
                        style={{flex:1, height: null, width: null, resizeMode: 'cover'}}                                            
                    />
                </View>
                <View style={{flex:1, paddingTop: 10, paddingLeft:10}}>
                        <Text>{this.props.name}</Text>
                </View>

            </View>
        )
    }
}
export default Category;

const styles = StyleSheet.create({
    container: {
      flex: 1,
     // backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });