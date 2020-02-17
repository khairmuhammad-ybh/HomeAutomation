import properties from '../utils/properties';
import axios from 'axios';

export const checkStatus = () => {
  return new Promise((resolve, reject) => {
    let url = `http://${properties.serverIP}:${properties.checkStatus_Port}/api/relays/checkStatus`;
    axios({
      url: url,
      method: 'GET',
    })
      .then(resp => {
        // resolve(resp.data.payload.Relays);
        const relayArr = Object.keys(resp.data.payload.Relays);
        const dataArr = Object.keys(resp.data.payload.Relays).reduce(
          (arr, key) => arr.concat(resp.data.payload.Relays[key]),
          [],
        );
        resolve({
          relays: relayArr,
          datas: dataArr,
        });
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const checkConnection = ipAddr => {
  return new Promise((resolve, reject) => {
    let url = `http://${ipAddr}:${properties.checkStatus_Port}/api/relays/checkConnection`;
    axios({
      url: url,
      method: 'GET',
      timeout: properties.server_timeout,
    })
      .then(resp => {
        resolve({
          resp,
        });
      })
      .catch(err => {
        reject(err);
      });
  });
};
