import React from 'react';
import {
  Image,
  StyleSheet, View,
} from 'react-native';
import { Text, Button } from '@ui-kitten/components';

export default function Main() {
  return (
    <View style={styles.container}>
      <Text style={styles.myText} category="h3">Добро пожаловать в USEApp</Text>
      <Image
        source={require('../../../assets/mainIcon.jpg')}
        style={{ width: 200, height: 200 }}
      />
      <Text style={styles.myText} category="h3">
        Привет! Давай начнем учиться!
        Проведи время с пользой.
      </Text>
      <Button style={styles.button} status="success">
        Начать!
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  myText: {
    textAlign: 'center',
    fontSize: '32',
    margin: '5%',
  },
});
