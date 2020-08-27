import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, AsyncStorage } from 'react-native';
import moment from 'moment';
import EffectSummary from '../components/EffectSummary';
import RunningTotalEffectSummary from '../components/RunningTotalEffectSummary';

function HabitsScreen(props) {
  const { navigation } = props;
  const id = navigation.getParam('id');
  const [habit, setHabit] = useState({});
  const { date, effects, name, positiveOrNegative } = habit;

  const getHabit = async (id) => {
    const habs = await JSON.parse(await AsyncStorage.getItem(`habit-${id}`));
    setHabit(habs);
  };

  useEffect(() => {
    getHabit(id);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.screenContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.summaryText}>
          It is been {moment().diff(moment(date), 'days')} days since you{' '}
          {positiveOrNegative === 'Positive' ? 'started' : 'stopped'} this habit
        </Text>
        {effects && (
          <React.Fragment>
            <Text style={styles.subtitle}>
              Effects of{' '}
              {positiveOrNegative === 'Positive' ? 'maintaining' : 'quitting'}{' '}
              this habit
            </Text>
            {effects.map((effect, index) => {
              return (
                <EffectSummary
                  effect={effect.effect}
                  category={effect.category}
                  amount={effect.amount}
                  name={effect.name}
                  unit={effect.unit}
                  time={effect.time}
                  key={effect.name + index}
                />
              );
            })}
          </React.Fragment>
        )}
        {effects && (
          <React.Fragment>
            <Text style={styles.subtitle}>Running Total Effects</Text>
            {effects.map((effect, index) => {
              return (
                <RunningTotalEffectSummary
                  effect={effect.effect}
                  category={effect.category}
                  amount={effect.amount}
                  name={effect.name}
                  unit={effect.unit}
                  time={effect.time}
                  date={date}
                  key={effect.name + index}
                />
              );
            })}
          </React.Fragment>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screenContainer: {
    padding: 20,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 15,
    fontWeight: '900',
  },
  summaryText: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '700',
    paddingHorizontal: 20,
    marginVertical: 20,
  },
});

export default HabitsScreen;
