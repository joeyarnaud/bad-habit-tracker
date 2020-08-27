import React, { useEffect, useState } from 'react';
import { AsyncStorage } from 'react-native';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { calculateEffects } from '../helpers/calculateEffects';
import IndexNavigationButton from '../components/IndexNavigationButton';

function IndexScreen({ navigation }) {
  const [habits, setHabits] = useState([]);
  const [effects, setEffects] = useState({});

  const getHabits = async () => {
    const keys = await AsyncStorage.getAllKeys();
    const habs = [];
    for (let i = 0; i < keys.length; i++) {
      habs.push(JSON.parse(await AsyncStorage.getItem(keys[i])));
    }
    setHabits(habs);

    setEffects(calculateEffects(habs));
  };

  useEffect(() => {
    console.log('here');
    getHabits();
  }, []);

  return (
    <View style={styles.container}>
      <Text></Text>
      <IndexNavigationButton
        text='My Habits'
        handleClick={() => navigation.navigate('habits')}
        color='#61A3E8'
        iconName='calendar'
      />
      <IndexNavigationButton
        text='Create Habit'
        handleClick={() => navigation.navigate('create')}
        color='#61A3E8'
        iconName='plus'
      />
    </View>
  );
}

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        style={styles.plusContainer}
        onPress={() => navigation.navigate('create')}
      >
        <React.Fragment>
          {
            //  <Text style={styles.plusText}>Add Habit</Text>{' '}
          }
          <Feather name='plus' style={styles.plus} />
        </React.Fragment>
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  plus: {
    color: '#fff',
    fontSize: 30,
    marginHorizontal: 10,
  },
  plusContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
  },
  plusText: {
    color: '#fff',
    marginTop: 8,
    fontWeight: '900',
  },
  container: {
    padding: 10,
  },
});

export default IndexScreen;
