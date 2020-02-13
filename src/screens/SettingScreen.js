import React, {Component} from 'react';
import {View, ImageBackground} from 'react-native';

// Styles
import styles from '../styles/styles';

// Components
import SettingCard from '../components/settingCard';

class SettingScreen extends Component {
  static navigationOptions = {
    title: 'Settings',
    headerStyle: {
      backgroundColor: '#82F0FC',
    },
  };

  render() {
    return (
      <ImageBackground
        source={require('../assets/background.png')}
        style={{flex: 1}}>
        <View style={styles.container}>
          <SettingCard />
        </View>
      </ImageBackground>
    );
  }
}

export default SettingScreen;
