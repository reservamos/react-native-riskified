# react-native-riskified

Riskified library for react native projects.

## Installation

```sh
yarn add git+https://github.com/reservamos/react-native-riskified.git#1.0.0
```

## Requirements

**Check if your app is compatible:**

- Android mininal sdk version: 21 - Android Lollipop
- iOS minimal build target: iOS 12.4

## Usage

```js
import { v4 as uuidv4 } from 'uuid';
import {
  initRiskified,
  logRequest,
  updateSessionToken,
} from 'react-native-riskified';

const STORE_MERCHANT_ID = 'YOUR_MERCHANT_ID';
const sessionId = uuidv4();

// init Riskified SDK
function init() {
  initRiskified(STORE_MERCHANT_ID, sessionId);
}

// update session token
function updateToken() {
  const newSessionId = uuidv4();
  updateSessionToken(newSessionId);
}

// log request path or views
function logRequestPath(path) {
  logRequest(path);
}
```

## Demo app

you can see an example to use `react-native-riskified` library in our [demo app](https://github.com/reservamos/react-native-riskified/tree/main/example).

<table>
  <tr>
    <th>iOS</th>
    <th>Android</th>
  </tr>
  <tr>
    <td><img src="https://user-images.githubusercontent.com/11278416/203370239-d0db54e7-b574-4e37-bdf4-77eb8a2b5f29.png" height=480 /></td>
    <td><img src="https://user-images.githubusercontent.com/11278416/203370473-875e4068-6fd0-4898-8ed5-7aef2cabee81.png" height=480 /></td>
  </tr>
</table>

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
# react-native-riskified
