import properties from '../utils/properties';
import axios from 'axios';
import {store} from '../redux/store';
import * as Actions from '../redux/actions';

export const checkSwitchStatus = networkState => {
  return new Promise((resolve, reject) => {
    // Invoke Loading [ON]
    if(networkState.periodic){
      store.dispatch(Actions.btn_switch_state_onload());
    }
    // axios fetch data from server
    let url = `http://${networkState.storedIpAddr}:${properties.checkStatus_Port}/api/relays/checkStatus`;
    axios({
      url: url,
      method: 'GET',
      timeout: properties.server_timeout,
    })
      .then(resp => {
        // Tranform data into array [relayArr, dataArr]
        const relayArr = Object.keys(resp.data.payload.Relays);
        const dataArr = Object.keys(resp.data.payload.Relays).reduce(
          (arr, key) => arr.concat(resp.data.payload.Relays[key]),
          [],
        );
        // Recreate data into JSON object
        let btnState = {
          btn1: dataArr[0],
          btn2: dataArr[1],
          btn3: dataArr[2],
          btn4: dataArr[3],
          btn5: dataArr[4],
          btn6: dataArr[5],
          btn7: dataArr[6],
          btn8: dataArr[7],
        };
        // Invoke Loading [OFF]
        store.dispatch(Actions.btn_switch_state_load(btnState));
        // resolve promise
        resolve();
      })
      .catch(err => {
        // console.log(err); // For Debugging
        
        // reject promise
        reject(err);
      });
  });
};

export const checkNewConnection = data => {
  // Invoke Loading [ON]
  store.dispatch(Actions.btn_network_state_onload());
  // axios check new connection to server
  return new Promise((resolve, reject) => {
    let url = `http://${data.ipAddr}:${properties.checkStatus_Port}/api/relays/checkConnection`;
    axios({
      url: url,
      method: 'GET',
      timeout: properties.server_timeout,
    })
      .then(resp => {
        // Recreate data into JSON object
        let btnNetworkState = {
          name: properties.serverName,
          ipAddr: properties.serverIP,
          storedName: data.name,
          storedIpAddr: data.ipAddr,
          connected: true,
        };
        // Invoke Loading [OFF]
        store.dispatch(Actions.btn_network_state_load(btnNetworkState));
        resolve();
      })
      .catch(err => {
        // console.log(err); // For Debugging

        // reject promise
        reject(err);
      });
  });
};

export const checkCurrentConnection = networkState => {
  // Invoke Loading [ON]
  if(networkState.periodic){
    store.dispatch(Actions.btn_network_state_onload());
  }
  // axios check current connection to server
  return new Promise((resolve, reject) => {
    let url = `http://${networkState.storedIpAddr}:${properties.checkStatus_Port}/api/relays/checkConnection`;
    axios({
      url: url,
      method: 'GET',
      timeout: properties.server_timeout,
    })
      .then(resp => {
        let btnNetworkState = {
          connected: true
        };
        // Invoke Loading [OFF]
        store.dispatch(Actions.btn_network_state_load(btnNetworkState));
        resolve();
      })
      .catch(err => {
        // console.log(err); // For Debugging

        let btnNetworkState = {
          connected: false
        };
        // Invoke Loading [OFF]
        store.dispatch(Actions.btn_network_state_load(btnNetworkState));
        // reject promise
        reject(err);
      });
  });
};
