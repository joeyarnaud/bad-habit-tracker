import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { withNavigation } from 'react-navigation';
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
  id: 1,
  type: 'premade',
};

const drinking = {
  name: 'Alcohol',
  categories: ['health', 'finance'],
  icon: <Entypo name='drink' size={24} color='black' />,
  health: [
    { amount: 10, unit: 'g', description: 'Alcohol', impact: 'avoided' },
  ],
  finance: [{ amount: 31, unit: 'aud', description: 'Money', impact: 'saved' }],
  id: 2,
  type: 'premade',
};

const social = {
  name: 'Social Media',
  categories: ['time'],
  icon: <Foundation name='social-myspace' size={24} color='black' />,
  time: [
    { amount: 144, unit: 'minutes', description: 'Time', impact: 'saved' },
  ],
  id: 3,
  type: 'premade',
};

const gambling = {
  name: 'Gambling',
  categories: ['finance'],
  icon: <FontAwesome5 name='dice' size={24} color='black' />,
  finance: [
    { amount: 3.5, unit: 'aud', description: 'Money', impact: 'saved' },
  ],
  id: 4,
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
              onPress={() => navigation.navigate('premade', item)}
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

export default withNavigation(SuggestedHabits);
