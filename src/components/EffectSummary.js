import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { convertTimeUnitToWord } from '../helpers/unitConverters';
import { formatUnit } from '../helpers/unitFormatter';

function EffectSummary(props) {
  const { effect, category, amount, name, unit, time } = props;
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.text }}>{effect}</Text>
      <Text style={{ ...styles.text, width: 85 }}>{category}</Text>
      <View style={styles.row}>
        {unit.includes('$') ? (
          <React.Fragment>
            <Text>{formatUnit(unit)}</Text>
            <Text>{Math.round(amount * 100) / 100}</Text>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Text>{Math.round(amount * 100) / 100}</Text>
            <Text>{formatUnit(unit)}</Text>
          </React.Fragment>
        )}
      </View>

      <Text style={{ ...styles.text, width: 70 }}>{name}</Text>
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
