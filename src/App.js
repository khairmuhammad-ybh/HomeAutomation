import React, {Component} from 'react';

// React Navigation Stack
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// Screens
import HomeScreen from './screens/Homescreen';
import SettingScreen from './screens/SettingScreen';

class App extends Component {
  render() {
    return <MyNav />;
  }
}

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Setting : SettingScreen
});

const MyNav = createAppContainer(AppNavigator);

export default App;
