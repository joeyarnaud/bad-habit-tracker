import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function IndexScreen() {
  return (
    <View>
      <Text>Index</Text>
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
    fontSize: 20,
    alignContent: 'center',
  },
  plusText: {
    color: '#fff',
    marginTop: 8,
    fontWeight: '900',
  },
});
