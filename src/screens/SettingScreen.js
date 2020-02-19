import React, {Component} from 'react';
import {View, ImageBackground, Alert} from 'react-native';
// Styles
import styles from '../styles/styles';
// Components
import SettingCard from '../components/SettingCard.component';
// Redux
import {connect} from 'react-redux';
import {store} from '../redux/store';
import * as Action from '../redux/actions';
// Properties
import properties from '../utils/properties';
// API
import * as services from '../api/homeAuto.service';
// Navigation
import {withNavigation} from 'react-navigation';

class SettingScreen extends Component {
  static navigationOptions = {
    title: 'Settings',
    headerStyle: {
      backgroundColor: '#82F0FC',
    },
  };

  onNameUpdate = netName => {
    store.dispatch(
      Action.update_network_name_state({
        name: netName,
      }),
    );
  };

  onIPAddrUpdate = netIP => {
    store.dispatch(
      Action.update_network_ip_state({
        ipAddr: netIP,
      }),
    );
  };

  onPressReduxConnect = netData => {
    services
      .checkNewConnection(netData)
      .then(resp => {
        this.props.navigation.goBack();
      })
      .catch(err => {
        // console.log(err);  // For Debugging

        if (err.message.includes('timeout')) {
          Alert.alert(
            properties.Err_Title_Server_No_Found,
            properties.Err_Message_Server_No_Found,
          );
          // Invoke Loading [OFF]
          store.dispatch(
            Action.btn_network_state_load({...store.getState().NetworkConfig}),
          );
        }
      });
  };

  render() {
    return (
      <ImageBackground source={properties.mainBg} style={{flex: 1}}>
        <View style={styles.container}>
          <SettingCard
            onChangeName={this.onNameUpdate}
            onChangeIP={this.onIPAddrUpdate}
            onPress={this.onPressReduxConnect}
          />
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

export default withNavigation(connect(stp)(SettingScreen));
