import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
// Image Assets
import powerOff from '../assets/power_off.png';
import powerOn from '../assets/power_on.png';
// Styles
import styles from '../styles/styles';

class Switch extends Component {
    render() {
        // Get values from parents HomescreenScreen.js
        let { onPress, number, isOn } = this.props;
        // console.log(isOn);
        return (
            <TouchableOpacity
              style={styles.button}
              onPress={() => onPress(`btn${number}`)}>
              <Image style={styles.image} source={isOn ? powerOn : powerOff}></Image>
            </TouchableOpacity>
        );
    }
}
export default Switch;