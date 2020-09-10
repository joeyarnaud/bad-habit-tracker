import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  AsyncStorage,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment';
import ConfirmationModal from '../components/ConfirmationModal';
import CalendarResetModal from '../components/CalendarResetModal';
import EffectSummary from '../components/EffectSummary';
import RunningTotalEffectSummary from '../components/RunningTotalEffectSummary';

function HabitsScreen(props) {
  const { navigation, route } = props;
  const id = route.params.id;
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
        <View style={styles.modifications}>
          <ConfirmationModal
            actionText='Delete'
            confirmatonText='Are you sure you want to delete this habit?'
            actionColor='#DB6153'
            action={() => {
              AsyncStorage.removeItem(`habit-${id}`);
              navigation.reset({ index: 0, routes: [{ name: 'Habits' }] });
            }}
            buttonTitle='Delete Habit'
            buttonStyles={styles.modificationButton}
            iconName='trash'
          />
          <CalendarResetModal
            action={async (newDate) => {
              const habs = await JSON.parse(
                await AsyncStorage.getItem(`habit-${id}`)
              );
              habs.date = newDate;
              AsyncStorage.setItem(`habit-${id}`, JSON.stringify(habs));
              navigation.reset({ index: 2, routes: [{ name: 'Habits' }] });
            }}
          />
        </View>
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
  modifications: {
    flexDirection: 'row',
    marginVertical: 20,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  modificationButton: {
    backgroundColor: '#DB6153',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5,
    flexDirection: 'row',
    marginBottom: 10,
  },
});

export default HabitsScreen;
