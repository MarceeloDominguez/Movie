import {View, ActivityIndicator, StyleSheet} from 'react-native';
import React from 'react';

export default function Loading() {
  return (
    <View style={styles.containerActivityIndicator}>
      <ActivityIndicator color="red" size={30} />
    </View>
  );
}

const styles = StyleSheet.create({
  containerActivityIndicator: {
    justifyContent: 'center',
    flex: 1,
  },
});
