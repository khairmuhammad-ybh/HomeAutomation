import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';

// Styles
import styles from '../styles/styles';

// Properties
import properties from '../utils/properties';

// Image Assets
import powerOff from '../assets/power_off.png';
import powerOn from '../assets/power_on.png';

class HomeScreen extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  render() {
    const btn1 = this.props.btn1 ? powerOn : powerOff;
    const btn2 = this.props.btn2 ? powerOn : powerOff;
    const btn3 = this.props.btn3 ? powerOn : powerOff;
    const btn4 = this.props.btn4 ? powerOn : powerOff;
    const btn5 = this.props.btn5 ? powerOn : powerOff;
    const btn6 = this.props.btn6 ? powerOn : powerOff;
    const btn7 = this.props.btn7 ? powerOn : powerOff;
    const btn8 = this.props.btn8 ? powerOn : powerOff;

    return (
      <ImageBackground
        source={require('../assets/background.png')}
        style={{flex: 1}}>
        <View style={styles.container}>
          <Text style={[styles.header, styles.textStyle]}>
            {`${properties.title}`}}
          </Text>
          {/* Row 1 */}
          <View style={styles.horizontalContainer}>
            <TouchableOpacity style={styles.button}>
              <Image style={styles.image} source={btn1}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Image style={styles.image} source={btn2}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Image style={styles.image} source={btn3}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Image style={styles.image} source={btn4}></Image>
            </TouchableOpacity>
          </View>
          {/* Row 2 */}
          <View style={styles.horizontalContainer}>
            <TouchableOpacity style={styles.button}>
              <Image style={styles.image} source={btn5}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Image style={styles.image} source={btn6}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Image style={styles.image} source={btn7}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Image style={styles.image} source={btn8}></Image>
            </TouchableOpacity>
          </View>
          {/* Navigate user to Setting screen */}
          <TouchableOpacity
            style={styles.touchLink}
            onPress={() => this.props.navigation.navigate('Setting')}>
            <Text style={[styles.textLink]}>Not Connected</Text>
          </TouchableOpacity>
          {/* Footer */}
          <Text style={[styles.footer, styles.fontStyle]}>
            {`Developed By: ${properties.developer} @ ${properties.organization}`}
          </Text>
        </View>
      </ImageBackground>
    );
  }
}
export default HomeScreen;
