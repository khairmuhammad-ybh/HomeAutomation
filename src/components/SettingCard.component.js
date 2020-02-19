import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
// Styles
import styles from '../styles/styles';
import {store} from '../redux/store';
import properties from '../utils/properties';

class SettingCard extends Component {
  render() {
    // Get value from parents SettingScreen.js
    let {onPress, onChangeName, onChangeIP} = this.props;
    return (
      <View style={styles.card}>
        {/* Network Name Field */}
        <Text style={[styles.cardHeader, styles.textStyle]}>Name</Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          placeholder={
            store.getState().NetworkConfig.storedName
              ? store.getState().NetworkConfig.storedName
              : properties.serverName
          }
          keyboardType={'default'}
          blurOnSubmit={false}
          returnKeyType={'next'}
          onChangeText={txtName => onChangeName(txtName)}
          ref={input => {
            this.nameInput = input;
          }}
          onSubmitEditing={() => {
            this.ipAddrInput.focus();
          }}></TextInput>
        {/* Loading screen */}
        {store.getState().NetworkConfig.btnNetworkOnLoad ? (
          <ActivityIndicator
            style={{position: 'absolute'}}
            size="large"
            color="#0000ff"
          />
        ) : null}
        {/* IP Address Field */}
        <Text style={[styles.cardHeader, styles.textStyle]}>IP ADDRESS</Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          placeholder={
            store.getState().NetworkConfig.storedIpAddr
              ? store.getState().NetworkConfig.storedIpAddr
              : properties.serverIP
          }
          keyboardType={'numeric'}
          onChangeText={txtIpAddr => onChangeIP(txtIpAddr)}
          ref={input => {
            this.ipAddrInput = input;
          }}></TextInput>
        <TouchableOpacity
          style={styles.cardButton}
          onPress={() =>
            onPress({
              name: store.getState().NetworkConfig.name,
              ipAddr: store.getState().NetworkConfig.ipAddr,
            })
          }>
          <Text style={styles.cardButtonText}>Connect</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default SettingCard;
