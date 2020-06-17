import React, { Component } from 'react';
import { Animated, Image, StyleSheet, View, Text } from 'react-native';

import mainStyle from "../styles/main.js";

import Menu from '../components/Menu';

export default class AnimationMode extends Component {
    
    constructor(props) {
        super(props);
        this.sizeAnim = new Animated.Value(200)
        this.state = {
          big: false
        }
    }

  render() {
    return (
        <View style={mainStyle.container}>
            <View style={mainStyle.container}>
                <Text>Animation Mode</Text>
            </View>
            <Menu/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
});
