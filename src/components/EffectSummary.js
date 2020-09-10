import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { convertTimeUnitToWord } from '../helpers/unitConverters';
import { formatUnit } from '../helpers/unitFormatter';

function EffectSummary(props) {
  const { effect, category, amount, name, unit, time } = props;
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.text }}>{effect}</Text>
      <Text style={{ ...styles.text }}>{category}</Text>
      <View style={styles.row}>
        {unit.includes('$') ? (
          <React.Fragment>
            {formatUnit(unit)}
            <Text>{Math.round(amount * 100) / 100}</Text>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Text>{Math.round(amount * 100) / 100}</Text>
            {formatUnit(unit)}
          </React.Fragment>
        )}
      </View>

      <Text style={{ ...styles.text }}>{name}</Text>
      <Text style={styles.text}>{convertTimeUnitToWord(time)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 5,
    padding: 5,
  },
  text: {
    fontSize: 15,
  },
  row: {
    flexDirection: 'row',
  },
});

export default EffectSummary;
