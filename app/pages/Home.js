import React, { Component } from 'react';
import { Animated, Image, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import mainStyle from "../styles/main.js";

import Menu from '../components/Menu';

export default class Home extends Component {
    
    constructor(props) {
        super(props);
        this.switchState = new Animated.Value(0)
        this.backgroundColorAnim = this.switchState.interpolate({
          inputRange: [0, 1],
          outputRange:["#122e36" , "#fff"]
        })
        this.fadeMoonAnim = this.switchState.interpolate({
          inputRange: [0, 0.5, 1],
          outputRange:[1.0, 0.0,  0.0]
        })
        this.fadeSunAnim = this.switchState.interpolate({
          inputRange: [0, 0.5, 1],
          outputRange:[0.0, 0.0, 1.0]
        })
        this.state = {
          isOn: false
        }
    }

    componentDidMount() {
      this._retrieveData()
    }

    componentWillUnmount() {
      this._storeData()
    }

    _onPressButton = () => {
      let nextValue = this.state.isOn ? 0 : 1
      this.setState({isOn: !this.state.isOn})
      Animated.timing( this.switchState, {
          toValue: nextValue,
          duration: 500,
          useNativeDriver: false,
      }).start();
    }

    _storeData = async () => {
      try {
          await AsyncStorage.setItem('lightStatus', JSON.stringify(this.state.isOn));
      } catch (error) {
          // Error saving data
          console.log(error)
      }
    }

    _retrieveData = async () => {
      try {
          console.log("getting data")
          const value = JSON.parse(await AsyncStorage.getItem('lightStatus'));
          if (value !== null) {
              // Our data is fetched successfully
              this.setState({isOn: value})
              this.switchState.setValue(value)
          } else {
            console.log("got ", value)
          }
      } catch (error) {
          // Error retrieving data
          console.log(error)
      }
    }

  render() {
    return (
      <View style={mainStyle.container}>
        <Animated.View style={{...styles.container, backgroundColor: this.backgroundColorAnim}}>
        <TouchableOpacity
            onPress={this._onPressButton}>
            <Animated.Image
                source={require('../../assets/moon.png')}
                style={{
                  width: 200,
                  height: 200,
                  marginBottom: -100,
                  opacity: this.fadeMoonAnim
                }}
            />
            <Animated.Image
                source={require('../../assets/sun.png')}
                style={{
                  width: 200,
                  height: 200,
                  marginTop: -100,
                  opacity: this.fadeSunAnim
                }}
            />
        </TouchableOpacity>
        <Animated.Text style={{
          ...styles.status,
          color: "#122e36",
          opacity: this.fadeSunAnim
        }}>Hoverlight is On</Animated.Text>
        <Animated.Text style={{
          ...styles.status,
          color: "#fff",
          marginTop: -20,
          opacity: this.fadeMoonAnim
        }}>Hoverlight is Off</Animated.Text>
        </Animated.View>
      <Menu/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  },
  status: {
    marginTop: 30,
    fontSize: 20,
    fontWeight: "bold",
  }
});
