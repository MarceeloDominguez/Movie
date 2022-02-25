import React, {createContext, useContext, useState} from 'react';
import {DefaultTheme, Theme} from '@react-navigation/native';

interface ThemeContextProps {
  toggleDarkMode: () => void;
  isDarkTheme: boolean;
  theme: Theme;
}

export const themeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: any) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const myThemeDark = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#1f1f1f',
      text: '#fff',
      card: 'rgba(255,255,355,0.1)',
      primary: 'rgba(255,255,355,0.1)',
      border: 'rgba(255,255,355,0.1)',
    },
  };

  const myThemeLight = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'rgb(242, 242, 242)',
      text: '#000',
      card: '#1f1f1f',
      primary: '#1f1f1f',
      border: '#1f1f1f',
    },
  };

  const theme = isDarkTheme ? myThemeLight : myThemeDark;

  const toggleDarkMode = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <themeContext.Provider value={{toggleDarkMode, isDarkTheme, theme}}>
      {children}
    </themeContext.Provider>
  );
};

export const useDarkMode = () => {
  const {
    toggleDarkMode,
    isDarkTheme,
    theme: {colors},
  } = useContext(themeContext);

  return {toggleDarkMode, isDarkTheme, colors};
};
