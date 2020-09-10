import React, { useEffect, useState } from 'react';
import { AsyncStorage } from 'react-native';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { calculateEffects } from '../helpers/calculateEffects';
import IndexNavigationButton from '../components/IndexNavigationButton';
import { ScrollView } from 'react-native-gesture-handler';
import isEmpty from '../helpers/is-empty';
import DashboardEffectSummary from '../components/DashboardEffectSummary';

function IndexScreen(props) {
  const { navigation } = props;
  const [effects, setEffects] = useState([]);

  const getHabits = async () => {
    const keys = await AsyncStorage.getAllKeys();
    const habs = [];
    for (let i = 0; i < keys.length; i++) {
      habs.push(JSON.parse(await AsyncStorage.getItem(keys[i])));
    }

    setEffects(calculateEffects(habs));
  };

  useEffect(() => {
    getHabits();
    const interval = setInterval(() => {
      getHabits();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.screenContainer}>
        <Text style={styles.title}>Habit Tracker</Text>
        {!isEmpty(effects) && (
          <Text style={styles.subtitle}>
            So far you have made these differences in your life:
          </Text>
        )}
        <View style={styles.effectsContainer}>
          {!isEmpty(effects) &&
            effects.map((effect, index) => {
              return (
                <DashboardEffectSummary
                  {...effect}
                  key={`${effect.name}-${index}`}
                />
              );
            })}
        </View>

        <IndexNavigationButton
          text='My Habits'
          handleClick={() => navigation.navigate('Habits')}
          color='#61A3E8'
          iconName='calendar'
        />
        <IndexNavigationButton
          text='Create Habit'
          handleClick={() => navigation.navigate('Create Habit')}
          color='#61A3E8'
          iconName='plus'
        />
      </View>
    </ScrollView>
  );
}

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
    flex: 1,
  },
  screenContainer: {
    padding: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: '900',
    textAlign: 'center',
    paddingVertical: 20,
  },
  effectsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default IndexScreen;
