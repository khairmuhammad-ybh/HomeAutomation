import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';

// Redux
import {connect} from 'react-redux';
import {store} from '../redux/store';
import * as Actions from '../redux/actions';

// Styles
import styles from '../styles/styles';

// Properties
import properties from '../utils/properties';

// Image Assets
import powerOff from '../assets/power_off.png';
import powerOn from '../assets/power_on.png';

class HomeScreen extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  constructor(prop) {
    super(prop);
    this.state = {
      connState: properties.connState_disconnected,
    };
  }

  componentDidMount() {
    this._onFocusListener = this.props.navigation.addListener(
      'didFocus',
      payload => {
        if (this.props.NetworkConfigState.connected) {
          this.setState({connState: properties.connState_connected});
        } else {
          this.setState({connState: properties.connState_disconnected});
        }
      },
    );
  }

  onPresRedux = relay => {
    let {lightButtonState} = this.props;
    switch (parseInt(relay)) {
      case 1:
        {
          store.dispatch(
            Actions.update_button_state({
              button: 'btn1',
              state: !lightButtonState.btn1,
            }),
          );
        }
        break;
      case 2:
        {
          store.dispatch(
            Actions.update_button_state({
              button: 'btn2',
              state: !lightButtonState.btn2,
            }),
          );
        }
        break;
      case 3:
        {
          store.dispatch(
            Actions.update_button_state({
              button: 'btn3',
              state: !lightButtonState.btn3,
            }),
          );
        }
        break;
      case 4:
        {
          store.dispatch(
            Actions.update_button_state({
              button: 'btn4',
              state: !lightButtonState.btn4,
            }),
          );
        }
        break;
      case 5:
        {
          store.dispatch(
            Actions.update_button_state({
              button: 'btn5',
              state: !lightButtonState.btn5,
            }),
          );
        }
        break;
      case 6:
        {
          store.dispatch(
            Actions.update_button_state({
              button: 'btn6',
              state: !lightButtonState.btn6,
            }),
          );
        }
        break;
      case 7:
        {
          store.dispatch(
            Actions.update_button_state({
              button: 'btn7',
              state: !lightButtonState.btn7,
            }),
          );
        }
        break;
      case 8:
        {
          store.dispatch(
            Actions.update_button_state({
              button: 'btn8',
              state: !lightButtonState.btn8,
            }),
          );
        }
        break;
    }
  };

  render() {
    const btn1 = this.props.lightButtonState.btn1 ? powerOn : powerOff;
    const btn2 = this.props.lightButtonState.btn2 ? powerOn : powerOff;
    const btn3 = this.props.lightButtonState.btn3 ? powerOn : powerOff;
    const btn4 = this.props.lightButtonState.btn4 ? powerOn : powerOff;
    const btn5 = this.props.lightButtonState.btn5 ? powerOn : powerOff;
    const btn6 = this.props.lightButtonState.btn6 ? powerOn : powerOff;
    const btn7 = this.props.lightButtonState.btn7 ? powerOn : powerOff;
    const btn8 = this.props.lightButtonState.btn8 ? powerOn : powerOff;

    return (
      <ImageBackground
        source={require('../assets/background.png')}
        style={{flex: 1}}>
        <View style={styles.container}>
          <Text style={[styles.header, styles.textStyle]}>
            {`${properties.title}`}}
          </Text>
          {/* Row 1 */}
          <View style={styles.horizontalContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.onPresRedux(1);
              }}>
              <Image style={styles.image} source={btn1}></Image>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.onPresRedux(2);
              }}>
              <Image style={styles.image} source={btn2}></Image>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.onPresRedux(3);
              }}>
              <Image style={styles.image} source={btn3}></Image>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.onPresRedux(4);
              }}>
              <Image style={styles.image} source={btn4}></Image>
            </TouchableOpacity>
          </View>
          {/* Row 2 */}
          <View style={styles.horizontalContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.onPresRedux(5);
              }}>
              <Image style={styles.image} source={btn5}></Image>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.onPresRedux(6);
              }}>
              <Image style={styles.image} source={btn6}></Image>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.onPresRedux(7);
              }}>
              <Image style={styles.image} source={btn7}></Image>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.onPresRedux(8);
              }}>
              <Image style={styles.image} source={btn8}></Image>
            </TouchableOpacity>
          </View>
          {/* Navigate user to Setting screen */}
          <TouchableOpacity
            style={styles.touchLink}
            onPress={() => this.props.navigation.navigate('Setting')}>
            {<Text style={[styles.textLink]}>{this.state.connState}</Text>}
          </TouchableOpacity>
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
  let {LightButton} = store;
  let {NetworkConfig} = store;

  return {
    lightButtonState: {
      btn1: LightButton.btn1,
      btn2: LightButton.btn2,
      btn3: LightButton.btn3,
      btn4: LightButton.btn4,
      btn5: LightButton.btn5,
      btn6: LightButton.btn6,
      btn7: LightButton.btn7,
      btn8: LightButton.btn8,
    },
    NetworkConfigState: {
      name: NetworkConfig.name,
      ipAddr: NetworkConfig.ipAddr,
      connected: NetworkConfig.connected,
    },
  };
};

export default connect(stp)(HomeScreen);
