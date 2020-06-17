import React, { Component } from 'react';
import { Animated, Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Menu() {
    const navigation = useNavigation();

    return (
      <View style={styles.container}>
        <TouchableOpacity
            onPress={() => navigation.replace("Home")} style={styles.hitbox}>
            <Animated.Image
                source={require('../../assets/home.png')}
                style={styles.button}
            />
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => navigation.replace("ColorMode")} style={styles.hitbox}>
            <Animated.Image
                source={require('../../assets/color.png')}
                style={styles.button}
            />
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => navigation.replace("AnimationMode")} style={styles.hitbox}>
            <Animated.Image
                source={require('../../assets/animate.png')}
                style={styles.button}
            />
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => navigation.replace("Settings")} style={styles.hitbox}>
            <Animated.Image
                source={require('../../assets/settings.png')}
                style={styles.button}
            />
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
   height: 65,
   width: "100%",
   justifyContent: 'space-around',
   alignItems: 'center',
   backgroundColor: '#5bc0de',
   flexDirection: "row",
   paddingLeft: 30,
   paddingRight: 30
  },
  button: {
    width: 30,
    height: 30,
    tintColor: "#fff"
  },
  hitbox: {
      width: 65,
      height: 65,
      alignItems: "center",
      justifyContent: "center"
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
