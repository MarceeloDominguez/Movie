import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function Error() {
  return (
    <View style={styles.containerError}>
      <Text style={styles.textError}>Error</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerError: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
  },
  textError: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
    opacity: 0.5,
  },
});
