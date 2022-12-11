import React, { useEffect, useState } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableHighlight,
} from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  initRiskified,
  logRequest,
  updateSessionToken,
} from 'react-native-riskified';
import { STORE_MERCHANT_ID } from '@env';

const STORAGE_KEY = '@Session:Storage';
const paths = [
  { value: 'Home' },
  { value: 'Product' },
  { value: 'Detail' },
  { value: 'Purchase' },
];

export default function App() {
  const [token, setToken] = useState('');
  const [selectedPath, setSelectedPath] = useState(paths[0].value);

  async function getSessionId() {
    let sessionId = await AsyncStorage.getItem(STORAGE_KEY);

    if (!sessionId) {
      sessionId = uuidv4();
      await AsyncStorage.setItem(STORAGE_KEY, sessionId);
    }

    setToken(sessionId);
    return sessionId;
  }

  async function resetSessionId() {
    const sessionId = uuidv4();
    await AsyncStorage.setItem(STORAGE_KEY, sessionId);
    updateSessionToken(sessionId);
    setToken(sessionId);
    return sessionId;
  }

  function logRequestPath(path) {
    logRequest(path);
  }

  useEffect(() => {
    getSessionId().then((sessionId) => {
      if (sessionId) {
        initRiskified(STORE_MERCHANT_ID, sessionId); //set your merchant id within .env file
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.tokenContainer}>
        <View style={styles.verticalMargin}>
          <Text>Session Id:</Text>
          <Text>{token}</Text>
        </View>
        <Button onPress={resetSessionId} title={'Reset Token'} />
      </View>
      <View style={styles.listContainer}>
        <Text>Select a path to log request:</Text>
        <View style={styles.verticalMargin}>
          {paths.map((path, index) => (
            <TouchableHighlight
              key={index}
              underlayColor={'#E9EAF6'}
              onPress={() => setSelectedPath(path.value)}
              style={
                selectedPath === path.value
                  ? [styles.listTile, { backgroundColor: '#E9EAF6' }]
                  : styles.listTile
              }
            >
              <Text>{path.value}</Text>
            </TouchableHighlight>
          ))}
        </View>
        <Button
          onPress={() => logRequestPath(selectedPath)}
          title={`Log request (${selectedPath})`}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: '#E6E6E6',
  },
  tokenContainer: {
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 10,
  },
  listContainer: {
    width: '100%',
    backgroundColor: 'white',
    padding: 20,
  },
  listTile: {
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  verticalMargin: {
    marginVertical: 20,
  },
});
