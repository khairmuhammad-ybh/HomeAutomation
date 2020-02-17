import React, {Component} from 'react';
import {View, ActivityIndicator} from 'react-native';

// Redux / Redux-persist
import {Provider} from 'react-redux';
import {store, persistor} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';

// React Navigation Stack
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// Screens
import HomeScreen from './screens/Homescreen';
import SettingScreen from './screens/SettingScreen';

// Styles
import styles from './styles/styles';

class App extends Component {
  renderLoading = () => {
    <View style={styles.container}>
      <ActivityIndicator
        style={{position: 'absolute'}}
        size="large"
        color="#0000ff"
      />
    </View>;
  };

  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={this.renderLoading()}>
          <MyNav />
        </PersistGate>
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
