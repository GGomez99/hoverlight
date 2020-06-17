import React, { Component } from 'react';
import { Animated, Image, StyleSheet, View, Text, Button } from 'react-native';

import Slider from '@react-native-community/slider';

import mainStyle from "../styles/main.js";

import Menu from '../components/Menu';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

totalLenght = 12

export default class ColorMode extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          currentColor: new Array(totalLenght).fill("hsl(0, 46%, 77%)"),
          selected: new Array(totalLenght).fill(false)
        }
    }

    updateColor(value) {
        pixelSelected = this.state.selected
        currentColors = this.state.currentColor.slice()
        console.log(currentColors)
        for (let i = 0; i < totalLenght; i++) {
            if (pixelSelected[i]) {
                currentColors[i] = "hsl(" + value*360 + ", 46%, 77%)"
            }
        }    
        this.setState({
            currentColor: currentColors
        })
    }

    generatePixels() {
        pixelList = []
        totalLenght = 12
        for (let i = 0; i < totalLenght; i++) {
            pixelList.push(
                    <View 
                    key={i}
                    style={{...styles.pixel,
                        transform: [{rotate: i*360/totalLenght+"deg"}, {translateX: 130}],
                        backgroundColor: this.state.currentColor[i],
                        borderWidth: this.state.selected[i] ? 2 : 0
                    }}>
                        <TouchableWithoutFeedback
                            style={{width: "100%", height: "100%"}}
                            onPressIn={() => this.setState({selected: this.state.selected.map((item, j) => j == i ? !item : item)})}>
                        </TouchableWithoutFeedback>
                    </View>
            )
        }
        return pixelList
    }

  render() {
    return (
      <View style={mainStyle.container}>
        <View style={mainStyle.container}>
            <View style={styles.pixelsContainer}>
                {this.generatePixels()}
            </View>
            <View style={styles.sliderContainer}>
                <Image style={styles.gradient} source={require('../../assets/gradient.png')}></Image>
                <View style={styles.gradientTint}/>
                <Slider
                    onValueChange={(value) => this.updateColor(value)}
                    style={styles.slider}
                    minimumValue={0}
                    maximumValue={1}
                    minimumTrackTintColor="#FFFFFF00"
                    maximumTrackTintColor="#00000000"
                    thumbTintColor="#00000000"
                />
            </View>
            <View style={styles.controlsContainer}>
                <Button 
                    title={"Tout sélectionner"}
                    style={mainStyle.button}
                    color={"#5bc0de"}
                    onPress={() => this.setState({selected: new Array(totalLenght).fill(true)})}
                />
                <Button
                    title={"Déselectionner"}
                    style={mainStyle.button}
                    color={"#5bc0de"}
                    onPress={() => this.setState({selected: new Array(totalLenght).fill(false)})}
                />
            </View>
        </View>
        <Menu/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    gradient: {
        width: 300,
        height: 80,
        borderRadius: 10
    },
    gradientTint: {
        width: 300,
        height: 80,
        marginTop: -80,
        backgroundColor: "white",
        opacity: 0.4
    },
    slider: {
        width: 330,
        height: 80,
        marginTop: -80,
    },
    sliderContainer: {
        alignItems: "center",
        justifyContent: "center"
    },
    pixelsContainer: {
        width: 300,
        height: 300,
        justifyContent: "center",
        alignItems: "center",
    },
    pixel: {
        position: "absolute",
        borderRadius: 50,
        width: 50,
        height: 50,
    },
    controlsContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "100%"
    }
});
