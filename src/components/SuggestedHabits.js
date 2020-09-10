import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import HabitSummary from './HabitSummary';
import {
  ENVIRONMENT,
  FINANCE,
  TIME,
  HEALTH,
  SAVE,
  AVOID,
  GRAMS,
  DAY,
  METER_SQ,
  MILLIGRAMS,
  NA,
  DOLLARS,
  POSITIVE,
  NEGATIVE,
  MINUTE,
  MONTH,
} from '../helpers/constants';

const smoking = {
  effects: [
    {
      effect: SAVE,
      category: ENVIRONMENT,
      amount: 20.2,
      unit: GRAMS,
      name: 'CO{2}',
      time: DAY,
    },
    {
      effect: SAVE,
      category: ENVIRONMENT,
      amount: 16,
      unit: GRAMS,
      name: 'Methane',
      time: DAY,
    },
    {
      effect: SAVE,
      category: ENVIRONMENT,
      amount: 0.84,
      unit: METER_SQ,
      name: 'Land',
      time: DAY,
    },
    {
      effect: SAVE,
      category: ENVIRONMENT,
      amount: 14,
      unit: GRAMS,
      name: 'Waste',
      time: DAY,
    },
    {
      effect: AVOID,
      category: HEALTH,
      amount: 240,
      unit: MILLIGRAMS,
      name: 'Tar',
      time: DAY,
    },
    {
      effect: AVOID,
      category: HEALTH,
      amount: 20,
      unit: NA,
      name: 'Cigarette',
      time: DAY,
    },
    {
      effect: SAVE,
      category: FINANCE,
      amount: 30,
      unit: DOLLARS,
      name: 'Money',
      time: DAY,
    },
  ],
  name: 'Smoking',
  totalAmount: 20,
  timeSpan: DAY,
  prompt: 'How many cigarettes do you smoke per day?',
  icon: 'smoking',
  positiveOrNegative: NEGATIVE,
  id: 1,
  type: 'premade',
};

const drinking = {
  name: 'Alcohol',
  icon: 'glass-martini-alt',
  effects: [
    {
      effect: AVOID,
      category: HEALTH,
      amount: 25,
      unit: GRAMS,
      name: 'Alcohol',
      time: DAY,
    },
    {
      effect: SAVE,
      category: FINANCE,
      amount: 4.5,
      unit: DOLLARS,
      name: 'Money',
      time: DAY,
    },
  ],
  id: 2,
  totalAmount: 2.5,
  prompt: 'How many drinks do you have per day?',
  timeSpan: DAY,
  type: 'premade',
  positiveOrNegative: NEGATIVE,
};

const social = {
  name: 'Social Media',
  icon: 'users',
  effects: [
    {
      effect: SAVE,
      category: TIME,
      amount: 144,
      unit: MINUTE,
      name: 'Saved Time',
      time: DAY,
    },
  ],
  id: 3,
  totalAmount: 144,
  positiveOrNegative: NEGATIVE,
  timeSpan: DAY,
  prompt: 'How many minutes do you spend on social media per day?',
  type: 'premade',
};

const gambling = {
  name: 'Gambling',
  icon: 'dice',
  effects: [
    {
      effect: SAVE,
      category: FINANCE,
      amount: 110,
      unit: DOLLARS,
      name: 'Money',
      time: MONTH,
    },
  ],
  id: 4,
  totalAmount: 110,
  positiveOrNegative: NEGATIVE,
  timeSpan: MONTH,
  prompt: 'How much do you spend gambling each month?',
  type: 'premade',
};

const habits = [smoking, drinking, social, gambling];

function SuggestedHabits(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Common Negative Habits</Text>
      <FlatList
        data={habits}
        keyExtractor={(habit) => habit.name}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Common Habit', item)}
            >
              <HabitSummary key={item.name} name={item.name} icon={item.icon} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
  },
});

SuggestedHabits.propTypes = {};

export default SuggestedHabits;
