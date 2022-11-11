import React from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { Provider } from 'react-redux';
import Main from './src/components/Main/Main';
import store from './src/redux/store';

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Provider store={store}>
        <View style={styles.container}>
          <Main />
        </View>
      </Provider>
    </ApplicationProvider>
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
