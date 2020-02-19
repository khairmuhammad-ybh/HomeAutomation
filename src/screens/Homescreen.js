import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
// Redux / Redux-Persist
import {connect} from 'react-redux';
import {store, persistor} from '../redux/store';
import * as Actions from '../redux/actions';
// Styles
import styles from '../styles/styles';
// Properties
import properties from '../utils/properties';
// Image Assets
import bg from '../assets/background.png';
// API
import * as services from '../api/homeAuto.service';
// Components
import Switch from '../components/Switch.component';

class HomeScreen extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  // Run on Page Reload
  componentDidMount() {
    // persistor.purge(); //  Used for resetting redux persist
    this.timer = setInterval(() => this.fetchData(false), 1000);
    this.fetchData(true);
  }

  // Fetch data from server
  fetchData = periodic => {
    services
      .checkCurrentConnection({
        periodic,
        storedIpAddr: store.getState().NetworkConfig.storedIpAddr,
      })
      .then(resp => {
        services
          .checkSwitchStatus({
            periodic,
            storedIpAddr: store.getState().NetworkConfig.storedIpAddr,
          })
          .then(resp => {})
          .catch(err => {
            // console.log(err) //  For Debugging

            // Invoke Loading [OFF]
            store.dispatch(
              Actions.btn_switch_state_load({
                ...store.getState().LightButton,
              }),
            );
          });
      })
      .catch(err => {
        // console.log(err) //  For Debugging

        // Invoke Loading [OFF]
        store.dispatch(
          Actions.btn_network_state_load({
            ...store.getState().NetworkConfig,
          }),
        );

        // Reset switch [OFF]
        let btnState = {
          btn1: false,
          btn2: false,
          btn3: false,
          btn4: false,
          btn5: false,
          btn6: false,
          btn7: false,
          btn8: false,
        };
        // Invoke Loading [OFF]
        store.dispatch(Actions.btn_switch_state_load(btnState));
      });
  };

  onPressReduxSwitch = btnName => {
    let {lightButtonState} = this.props;
    // Extract number from string 'btnName'
    let btnNum = btnName.match(/\d+/g);
    services
      .updateSwitch({switch: btnNum[0], state: !lightButtonState[btnName]})
      .then(resp => {
        // console.log(resp) //  For Debugging
      })
      .catch(err => {
        // console.log(err) //  For Debugging
      });
  };

  //  Set button state dynamically [true/false]
  setBtnState = btnName => {
    let {lightButtonState} = this.props;
    return lightButtonState[btnName];
  };

  createButtons = () => {
    //   length of buttons to create
    let listBTn = [1, 2, 3, 4, 5, 6, 7, 8];

    // Create button from arrays
    // Row #1
    let row1Buttons = listBTn.map(item => {
      if (item < 5) {
        return (
          <Switch
            key={item}
            onPress={this.onPressReduxSwitch}
            number={item}
            isOn={this.setBtnState(`btn${item}`)}
          />
        );
      }
    });
    // Row #2
    let row2Buttons = listBTn.map(item => {
      if (item > 4)
        return (
          <Switch
            key={item}
            onPress={this.onPressReduxSwitch}
            number={item}
            isOn={this.setBtnState(`btn${item}`)}
          />
        );
    });
    return (
      // Create buttons using React.Fragment
      <React.Fragment>
        <View style={styles.horizontalContainer}>{row1Buttons}</View>
        <View style={styles.horizontalContainer}>{row2Buttons}</View>
      </React.Fragment>
    );
  };

  render() {
    return (
      <ImageBackground source={bg} style={{flex: 1}}>
        <View style={styles.container}>
          <Text style={[styles.header, styles.textStyle]}>
            {`${properties.title}`}}
          </Text>
          {store.getState().LightButton.btnStateOnLoad ? (
            <ActivityIndicator
              style={styles.container}
              size="large"
              color="#0000ff"
            />
          ) : (
            this.createButtons()
          )}
          {/* Loading screen */}
          {store.getState().NetworkConfig.btnNetworkOnLoad ? (
            <ActivityIndicator
              style={styles.touchLink}
              size="large"
              color="#0000ff"
            />
          ) : (
            /* Navigate user to Setting screen */
            <TouchableOpacity
              style={styles.touchLink}
              onPress={() => this.props.navigation.navigate('Setting')}>
              <Text style={[styles.textLink]}>
                {store.getState().NetworkConfig.connected
                  ? properties.connState_connected
                  : properties.connState_disconnected}
              </Text>
            </TouchableOpacity>
          )}

          {/* Footer */}
          <Text style={[styles.footer, styles.fontStyle]}>
            {`Developed By: ${properties.developer} @ ${properties.organization}`}
          </Text>
        </View>
      </ImageBackground>
    );
  }
}

const stp = store => {
  let {LightButton, NetworkConfig} = store;

  return {
    lightButtonState: LightButton,
    NetworkConfigState: NetworkConfig,
  };
};

export default connect(stp)(HomeScreen);
