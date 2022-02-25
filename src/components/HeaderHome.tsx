import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDarkMode} from '../context/ThemeContext';

export default function HeaderHome() {
  const {toggleDarkMode, isDarkTheme, colors} = useDarkMode();

  return (
    <View style={styles.container}>
      <Text
        style={{
          ...styles.title,
          color: colors.text,
        }}>
        ¡Bienvenido!
      </Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        {isDarkTheme ? (
          <Icon name="moon-outline" size={20} />
        ) : (
          <Icon name="sunny-outline" size={20} color={colors.text} />
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    marginBottom: 12,
    marginTop: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    letterSpacing: 0.5,
    fontWeight: '700',
  },
});
