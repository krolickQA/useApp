import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Text } from '@ui-kitten/components';
import {
  StyleSheet, TouchableOpacity, View,
} from 'react-native';
import { useFonts } from 'expo-font';
import { setQuestionsThunk } from '../../redux/actions/questionsActions';
import { setCurrentOption } from '../../redux/actions/currentOptionActions';
import { clearTimer } from '../../redux/actions/timerActions';
import { getGoodAnswer } from '../../../utils/storage';

export default function OneOption({ option, navigation }) {
  const currSubject = useSelector((state) => state.currSubject);
  const dispatch = useDispatch();
  const [fontsLoaded] = useFonts({
    MontserratMedium: require('../../../assets/fonts/Montserrat-Medium.ttf'),
    MontserratSemiBold: require('../../../assets/fonts/Montserrat-SemiBold.ttf'),
  });
  const [itsDone, setItsDone] = useState(null);
  useEffect(() => {
    // try {
    getGoodAnswer(option)
      .then((res) => {
        if (res) { setItsDone(res); }
      })
      .catch((e) => console.log(e));
  }, []);

  if (!fontsLoaded) return null;

  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(setQuestionsThunk(option.url));
        dispatch(setCurrentOption(option));
        dispatch(clearTimer());
        navigation.navigate('Question');
      }}
      style={styles.container}
    >
      <View
        style={{
          width: '90%',
          height: 110,
          borderRadius: 30,
          margin: 10,
          borderWidth: 3,
          borderColor: currSubject?.color,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text style={styles.text}>{option.title}</Text>
        {itsDone && (
        <Text style={styles.text}>
          {itsDone}
          /
            {20}
        </Text>
        )}

      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: '25',
    marginLeft: '10%',
    fontWeight: 'bold',
    fontFamily: 'MontserratSemiBold',
    color: '#353739',
  },
  container: {
    width: '90%',
    height: 110,
    borderRadius: 30,
    margin: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
