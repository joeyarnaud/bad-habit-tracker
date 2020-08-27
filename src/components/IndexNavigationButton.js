import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

function IndexNavigationButton(props) {
  const { text, handleClick, color, iconName } = props;
  return (
    <TouchableOpacity
      style={{
        borderRadius: 10,
        width: '100%',
        backgroundColor: color,
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
      }}
      onPress={handleClick}
    >
      <Text style={styles.text}>{text}</Text>
      <FontAwesome name={iconName} style={styles.icon} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    textAlign: 'center',
    color: '#fff',
    paddingVertical: 20,
    marginRight: 20,
  },
  icon: {
    fontSize: 25,
    color: '#fff',
    paddingVertical: 20,
  },
});

IndexNavigationButton.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
};

export default IndexNavigationButton;
