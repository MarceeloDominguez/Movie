import React from 'react';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDarkMode} from '../context/ThemeContext';

export default function Search() {
  const navigation = useNavigation();
  const {colors} = useDarkMode();

  return (
    <TouchableOpacity
      style={{...styles.container, backgroundColor: colors.primary}}
      activeOpacity={0.8}
      onPress={() =>
        navigation.dispatch(CommonActions.navigate('SearchScreen'))
      }>
      <Text style={{...styles.placeholder, color: colors.text}}>Buscar...</Text>
      <Icon size={20} name="search" style={styles.icon} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 42,
    marginHorizontal: 26,
    borderRadius: 21,
    marginBottom: 30,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    opacity: 0.6,
  },
  placeholder: {
    marginLeft: 12,
    letterSpacing: 0.5,
    fontSize: 12,
    fontWeight: '600',
  },
  icon: {
    color: '#fff',
    marginRight: 12,
    opacity: 0.5,
  },
});
