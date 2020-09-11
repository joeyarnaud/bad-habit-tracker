import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import IndexScreen from './src/screens/IndexScreen';
import CreateScreen from './src/screens/CreateScreen';
import CustomHabitScreen from './src/screens/CustomHabitScreen';
import PremadeHabitScreen from './src/screens/PremadeHabitScreen';
import HabitsScreen from './src/screens/HabitsScreen';
import HabitScreen from './src/screens/HabitScreen';
import SettingsScreen from './src/screens/SettingsScreen';

const Tab = createBottomTabNavigator();
const CreateStack = createStackNavigator();
const HabitsStack = createStackNavigator();
const SettingsStack = createStackNavigator();

const SettingsStackScreen = () => {
  return (
    <SettingsStack.Navigator initialRouteName='Settings'>
      <SettingsStack.Screen name='Settings' component={SettingsScreen} />
    </SettingsStack.Navigator>
  );
};

const CreateStackScreen = () => {
  return (
    <CreateStack.Navigator initialRouteName='Create Habit'>
      <CreateStack.Screen name='Create Habit' component={CreateScreen} />
      <CreateStack.Screen name='Custom Habit' component={CustomHabitScreen} />
      <CreateStack.Screen name='Common Habit' component={PremadeHabitScreen} />
    </CreateStack.Navigator>
  );
};

const HabitsStackScreen = () => {
  return (
    <HabitsStack.Navigator initialRouteName='Habits'>
      <HabitsStack.Screen name='Habits' component={HabitsScreen} />
      <HabitsStack.Screen name='Habit' component={HabitScreen} />
    </HabitsStack.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Dashboard'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Dashboard') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            } else if (route.name === 'Create Habit') {
              iconName = focused ? 'ios-add-circle' : 'ios-add-circle-outline';
            } else if (route.name === 'Habits') {
              iconName = focused ? 'ios-alarm' : 'md-alarm';
            } else if (route.name === 'Settings') {
              iconName = 'ios-settings';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name='Dashboard' component={IndexScreen} />
        <Tab.Screen name='Create Habit' component={CreateStackScreen} />
        <Tab.Screen name='Habits' component={HabitsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
