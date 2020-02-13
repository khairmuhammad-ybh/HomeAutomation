import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';

import {withNavigation} from 'react-navigation';

// Styles
import styles from '../styles/styles';

// Redux
import {connect} from 'react-redux';
import {store} from '../redux/store';
import * as NetworkConfigStore from '../redux/actions';

// Properties
import properties from '../utils/properties';

class SettingCard extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      name: null,
      ipAddr: null,
    };
  }

  connectServer() {
    const cond = new RegExp(properties.validateIP_regex);
    if (cond.test(this.state.ipAddr)) {
      store.dispatch(
        NetworkConfigStore.update_network_state({
          name: this.state.name,
          ipAddr: this.state.ipAddr,
        }),
      );

      this.props.navigation.goBack();
    } else {
      Alert.alert(`Please key in the correct IP Address\n(e.g. 127.0.0.1)`);
      this.setState({name: null});
      this.setState({ipAddr: null});
    }
  }

  render() {
    return (
      <View style={styles.card}>
        <Text style={[styles.cardHeader, styles.textStyle]}>Name</Text>
        <TextInput
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
        <Text style={[styles.cardHeader, styles.textStyle]}>IP ADDRESS</Text>
        <TextInput
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
          style={styles.cardButton}
          onPress={() => this.connectServer()}>
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
