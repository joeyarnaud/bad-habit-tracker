import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';
import isEmpty from '../helpers/is-empty';

function YourHabitSummary(props) {
  const { name, date, effects, handlePress } = props;

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View style={styles.flex}>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text}>{moment().diff(moment(date), 'days')}</Text>
      </View>
      {
        //   <View style={styles.flex}>
        //   {!isEmpty(effects) ? (
        //     effects.map((effect) => {
        //       return <Text style={styles.text}>{effect.name}</Text>;
        //     })
        //   ) : (
        //     <Text style={styles.text}>No Specified Effects</Text>
        //   )}
        // </View>
      }
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    // paddingVertical: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  text: {
    fontWeight: '700',
    fontSize: 16,
  },
});

YourHabitSummary.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  effects: PropTypes.array.isRequired,
  handlePress: PropTypes.func.isRequired,
};

export default YourHabitSummary;
