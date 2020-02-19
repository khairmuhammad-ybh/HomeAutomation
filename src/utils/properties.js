import mainBg from '../assets/background.png'

const properties = {
  title: 'Home Automation Wireless Controller',
  developer: 'Jatizso',
  organization: 'noCorp',

  // server properties
  serverName: 'Localhost',
  serverIP: '127.0.0.1',
  server_timeout: 3 * 1000, // Server timeout

  // Validations
  validateIP_regex:
    '^([1-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-4])(.([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3}$',

  // General properties
  connState_connected: 'Connected',
  connState_disconnected: 'Not Connected',
  mainBg : mainBg,

  // PORTS
  checkStatus_Port: '8664',

  // Error Handlings
  Err_Title_Server_No_Found: 'Server Not Found',
  Err_Message_Server_No_Found:
    'Unable to connect to server \nPlease make sure server is turned on',

  Err_Title_Server_Err: 'Server Error',
  Err_Message_Server_Err: 'Something wrong in the server',

  Err_Title_Invalid_Connection: 'Invalid Connection',
  Err_Message_Invalid_Connection:
    'Connection to `localhost (127.0.0.1)` is not allowed',

  Err_Title_Invalid_IP: 'Invalid IP Address',
  Err_Message_Invalid_IP:
    'Please key in the correct IP Address\n(e.g. 127.0.0.1)',

  Err_Title_Empty_Field: 'Empty fields',
  Err_Messsage_Empty_Field:
    'Please provide Name and IP Address \nfor your network to connect successfully',
};

export default properties;
