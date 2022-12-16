# react-native-riskified

Riskified library for react native projects.

## Installation

```sh
yarn add git+https://github.com/reservamos/react-native-riskified.git#1.2.0
```

## Requirements

**Check if your app is compatible:**

- Android mininal sdk version: 21 - Android Lollipop
- iOS minimal build target: iOS 12.4

**Advertising ID**

Android 13 (API 33) introduces changes to advertising ID
Apps that use advertising ID and target Android 13 or later must declare the com.google.android.gms.permission.AD_ID permission in their app manifest. If you don't include this permission, your advertising identifier will be zeroed out, any attempts to access the identifier will receive a string of zeros instead of the identifier. [Learn more](https://support.google.com/googleplay/android-developer/answer/6048248?hl=en)

We'll use this declaration to provide safeguards in Play Console
If you say that your app uses advertising ID, we will block releases that don't include the `com.google.android.gms.permission.AD_ID` permission in the manifest file when targeting Android 13. When we block these releases, we will remind you to add the permission. If your release doesn't need advertising ID, you'll be able to skip the error and release. You can also update the declaration to turn off advertising ID release errors.

⚠️ Important: please declare within Google Play Console that your app uses the **Advertising ID** in **App Content** section

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
