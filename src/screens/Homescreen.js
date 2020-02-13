import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

// Styles
import styles from '../styles/styles';

class HomeScreen extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>HomeScreen</Text>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.push('Setting');
          }}>
          <Text>Go to Setting</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default HomeScreen;
