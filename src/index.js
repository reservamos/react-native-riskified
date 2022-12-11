import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-riskified' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const Riskified = NativeModules.Riskified
  ? NativeModules.Riskified
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function initRiskified(merchantId, userToken) {
  Riskified.initRiskified(merchantId, userToken);
}

export function logRequest(path) {
  Riskified.logRequest(path);
}

export function updateSessionToken(newToken) {
  Riskified.updateSessionToken(newToken);
}
