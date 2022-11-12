import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text } from '@ui-kitten/components';
import {
  StyleSheet, View,
} from 'react-native';
import { useFonts } from 'expo-font';
import { ScrollView } from 'react-native-gesture-handler';
import { setTopicsThunk } from '../../redux/actions/topicsActions';
import OneSubject from '../OneSubject/OneSubject';

export default function SubjectPage({ navigation }) {
  const topics = useSelector((state) => state.topics);
  const dispatch = useDispatch();
  const [fontsLoaded] = useFonts({
    MontserratMedium: require('../../../assets/fonts/Montserrat-Medium.ttf'),
    MontserratBold: require('../../../assets/fonts/Montserrat-Bold.ttf'),
  });

  useEffect(() => {
    dispatch(setTopicsThunk());
  }, []);

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <Text style={styles.title}>Предметы</Text>
        <Text style={styles.text}>Выбери предмет</Text>
        <View style={styles.innerContainer}>
          {topics && topics.map((el) => (
            <OneSubject
              navigation={navigation}
              subject={el}
              key={el.title}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'start',
    width: '100%',
    margin: 0,
    padding: 0,
    paddingTop: '15%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '35',
    alignSelf: 'flex-start',
    marginLeft: '10%',
    marginBottom: '5%',
    marginTop: '15%',
    fontFamily: 'MontserratBold',
    color: '#353739',
  },
  text: {
    fontSize: '20',
    alignSelf: 'flex-start',
    marginLeft: '10%',
    marginBottom: '10%',
    fontFamily: 'MontserratMedium',
    color: '#353739',
  },
  scroll: {
    width: '100%',
  },
  innerContainer: {
    display: 'flex',
    width: '100%',
  },
});
