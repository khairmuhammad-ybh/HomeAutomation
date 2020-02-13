import React, {Component} from 'react';

// Redux
import {Provider} from 'react-redux';
import {store} from './redux/store';

// React Navigation Stack
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// Screens
import HomeScreen from './screens/Homescreen';
import SettingScreen from './screens/SettingScreen';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MyNav />
      </Provider>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Setting: SettingScreen,
});

const MyNav = createAppContainer(AppNavigator);

export default App;
