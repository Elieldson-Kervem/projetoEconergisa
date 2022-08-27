import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Route from './Src/routes'
import { Amplify } from 'aws-amplify'
import {withAuthenticator} from 'aws-amplify-react-native'
import awsconfig from './Src/aws-exports'

Amplify.configure(awsconfig)

export default function App() {
  return (
    <Route></Route>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
