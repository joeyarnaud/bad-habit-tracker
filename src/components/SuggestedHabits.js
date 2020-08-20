import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import HabitSummary from './HabitSummary';

const smoking = {
  environment: [
    { amount: 0.0011, unit: 'kg', description: 'CO{2}', impact: 'saved' },
    { amount: 0.0008, unit: 'kg', description: 'Methane', impact: 'saved' },
    { amount: 0.042, unit: 'M{2}', description: 'Land Used', impact: 'saved' },
    { amount: 0.00017, unit: 'kg', description: 'Waste', impact: 'saved' },
    { amount: 1, unit: 'n/a', description: 'Cigarette Butt', impact: 'saved' },
  ],
  health: [
    { amount: 12, unit: 'mg', description: 'Tar', impact: 'avoided' },
    { amount: 1, unit: 'n/a', description: 'Cigarettes', impact: 'avoided' },
  ],
  finance: [{ amount: 1, unit: 'aud', description: 'Money', impact: 'saved' }],
  name: 'Smoking',
  icon: <FontAwesome5 name='smoking' size={24} color='black' />,
  categories: ['environment', 'health', 'finance'],
};

const drinking = {
  name: 'Alcohol',
  categories: ['health', 'finance'],
  icon: <Entypo name='drink' size={24} color='black' />,
  health: [
    { amount: 10, unit: 'g', description: 'Alcohol', impact: 'avoided' },
  ],
  finance: [{ amount: 31, unit: 'aud', description: 'Money', impact: 'saved' }],
};

const social = {
  name: 'Social Media',
  categories: ['time'],
  icon: <Foundation name='social-myspace' size={24} color='black' />,
  time: [
    { amount: 144, unit: 'minutes', description: 'Time', impact: 'saved' },
  ],
};

const gambling = {
  name: 'Gambling',
  categories: ['finance'],
  icon: <FontAwesome5 name='dice' size={24} color='black' />,
  finance: [
    { amount: 3.5, unit: 'aud', description: 'Money', impact: 'saved' },
  ],
};

const habits = [smoking, drinking, social, gambling];

function SuggestedHabits(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Common Negative Habits</Text>
      {habits.map((habit) => {
        return (
          <HabitSummary key={habit.name} name={habit.name} icon={habit.icon} />
        );
      })}
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
