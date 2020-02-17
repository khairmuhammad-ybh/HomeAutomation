import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  Button,
} from 'react-native';

import {withNavigation} from 'react-navigation';

// Styles
import styles from '../styles/styles';

// Redux
import {connect} from 'react-redux';
import {store} from '../redux/store';
import * as NetworkConfigStore from '../redux/actions';

// Properties
import properties from '../utils/properties';

// API
import * as service from '../api/homeAuto.service';

class SettingCard extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      name: null,
      ipAddr: null,
      isLoading: false,
    };
  }

  updateNetConfig() {
    const cond = new RegExp(properties.validateIP_regex);
    let connectIP = this.state.ipAddr
      ? this.state.ipAddr
      : this.props.NetworkConfigState.ipAddr;
    let connectName = this.state.name
      ? this.state.name
      : this.props.NetworkConfigState.name;

    // Validate ip address with Regex
    if (cond.test(connectIP)) {
      this.setState({isLoading: true});
      service
        .checkConnection(connectIP)
        .then(result => {
          let {resp} = result;
          // Call action to update network state
          store.dispatch(
            NetworkConfigStore.update_network_state({
              name: connectName,
              ipAddr: connectIP,
              connected: true,
            }),
          );
          this.props.navigation.goBack();
        })
        .catch(err => {
          if (err.message.includes('timeout')) {
            Alert.alert(
              properties.Err_Title_Server_No_Found,
              properties.Err_Message_Server_No_Found,
            );
          } else {
            // Logging error message
            // console.log(err);
            if (connectIP !== properties.serverIP)
              Alert.alert(
                properties.Err_Title_Server_Err,
                properties.Err_Message_Server_Err,
              );
            else
              Alert.alert(
                properties.Err_Title_Invalid_Connection,
                properties.Err_Message_Invalid_Connection,
              );
            this.setState({name: null});
            this.setState({ipAddr: null});
          }
          this.setState({isLoading: false});
          store.dispatch(
            NetworkConfigStore.update_connected_state({connected: false}),
          );
        });
      // this.props.navigation.goBack();
    } else {
      Alert.alert(
        properties.Err_Title_Invalid_IP,
        properties.Err_Message_Invalid_IP,
      );
      this.setState({name: null});
      this.setState({ipAddr: null});
    }
  }

  render() {
    return (
      <View style={styles.card}>
        <Text style={[styles.cardHeader, styles.textStyle]}>Name</Text>
        <TextInput
          editable={!this.state.isLoading}
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder={this.props.NetworkConfigState.name}
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          keyboardType={'default'}
          value={this.state.name}
          returnKeyType={'next'}
          blurOnSubmit={false}
          onChangeText={txtName => {
            this.setState({name: txtName});
          }}
          ref={input => {
            this.nameInput = input;
          }}
          onSubmitEditing={() => {
            this.ipAddrInput.focus();
          }}></TextInput>
        {/* Loading screen */}
        {this.state.isLoading ? (
          <ActivityIndicator
            style={{position: 'absolute'}}
            size="large"
            color="#0000ff"
          />
        ) : null}
        {/* End of Loading screen */}
        <Text style={[styles.cardHeader, styles.textStyle]}>IP ADDRESS</Text>
        <TextInput
          editable={!this.state.isLoading}
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder={this.props.NetworkConfigState.ipAddr}
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          keyboardType={'numeric'}
          value={this.state.ipAddr}
          onChangeText={txtIpAddr => {
            this.setState({ipAddr: txtIpAddr});
          }}
          ref={input => {
            this.ipAddrInput = input;
          }}></TextInput>
        <TouchableOpacity
          disabled={this.state.isLoading}
          style={styles.cardButton}
          onPress={() => this.updateNetConfig()}>
          <Text style={styles.cardButtonText}>Connect</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const stp = store => {
  let {NetworkConfig} = store;

  return {
    NetworkConfigState: {
      name: NetworkConfig.name,
      ipAddr: NetworkConfig.ipAddr,
    },
  };
};

export default connect(stp)(withNavigation(SettingCard));
