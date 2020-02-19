import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';

import {withNavigation} from 'react-navigation';

// Styles
import styles from '../styles/styles';

class SettingCard extends Component {
  render() {

    let {onPress, onChangeText, isLoading } = this.props
    return (
      <View style={styles.card}>
        <Text style={[styles.cardHeader, styles.textStyle]}>Name</Text>
        <TextInput
          editable={!isLoading}
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder={this.props.NetworkConfigState.name}
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          keyboardType={'default'}
          value={this.state.name}
          returnKeyType={'next'}
          blurOnSubmit={false}
          onChangeText={txtName => onChangeText({name: txtName})}
          ref={input => {
            this.nameInput = input;
          }}
          onSubmitEditing={() => {
            this.ipAddrInput.focus();
          }}></TextInput>
        {/* Loading screen */}
        {isLoading ? (
          <ActivityIndicator
            style={{position: 'absolute'}}
            size="large"
            color="#0000ff"
          />
        ) : null}
        {/* End of Loading screen */}
        <Text style={[styles.cardHeader, styles.textStyle]}>IP ADDRESS</Text>
        <TextInput
          editable={!isLoading}
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder={this.props.NetworkConfigState.ipAddr}
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          keyboardType={'numeric'}
          value={this.state.ipAddr}
          onChangeText={txtIpAddr => onChangeText({ipAddr: txtIpAddr})}
          ref={input => {
            this.ipAddrInput = input;
          }}></TextInput>
        <TouchableOpacity
          disabled={isLoading}
          style={styles.cardButton}
          onPress={() => onPress()}>
          <Text style={styles.cardButtonText}>Connect</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(SettingCard);
