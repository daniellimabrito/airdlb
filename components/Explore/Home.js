import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import StarRating from 'react-native-star-rating';


class Home extends Component {
    render() {
        return (
            <View style={{width:this.props.width / 2 - 30, height: this.props.width / 2 - 30, borderWidth: 0.5, borderColor: '#dddddd'}}>
            <View style={{flex:1}}>
                <Image
                    source={this.props.imageUri} 
                   // source={require('../../assets/home.jpeg')}            
                    style={{flex:1, height:null, width:null, resizeMode:'cover'}}
                />
            </View>
            <View style={{flex:1, alignItems:'flex-start', paddingLeft:10, justifyContent:'space-evenly'}}>
                <Text style={{fontSize: 10, color: '#b63838'}}>{this.props.type}</Text>
                <Text style={{fontSize: 12, fontWeight:'bold'}}>{this.props.name}</Text>
                <Text style={{fontSize: 10}}>${this.props.price}</Text>
                <StarRating 
                    disabled={true}
                    maxStars={5}
                    rating={this.props.rating}
                    starSize={10}
                />
            </View> 
        </View>
        )
    }
}
export default Home;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });