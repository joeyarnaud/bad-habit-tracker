import React from 'react';
import { Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { FontAwesome } from '@expo/vector-icons';
import IndexScreen from './src/screens/IndexScreen';
import CreateScreen from './src/screens/CreateScreen';
import CustomHabitScreen from './src/screens/CustomHabitScreen';

const navigator = createStackNavigator(
  {
    index: CustomHabitScreen,
    create: CustomHabitScreen,
    custom: CustomHabitScreen,
  },
  {
    initialRouteName: 'index',
    defaultNavigationOptions: {
      title: (
        <React.Fragment>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '900',
              fontFamily: 'sans-serif',
              marginHorizontal: 10,
            }}
          >
            Habits
          </Text>
          <FontAwesome
            name='line-chart'
            style={{
              fontSize: 20,
            }}
          />
        </React.Fragment>
      ),
      headerStyle: {
        backgroundColor: '#8AFA96',
      },
      headerTitleStyle: {
        color: '#fff',
        fontWeight: 'boldest',
      },
      headerBackTitleStyle: {
        color: '#fff',
      },
      cardStyle: {
        backgroundColor: '#d3d3d3',
      },
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return <App />;
};
