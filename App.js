import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeContext, themes } from './ThemeContext';
import React from 'react';
import UpdateThemeButton from './UpdateThemeButton';

export default function App() {
  let [theme, setTheme] = React.useState(themes.dark);
  
  let themeStyle = {
    backgroundColor: theme.background,
    color: theme.foreground
  };
  return (
    <ThemeContext.Provider value={{ theme: theme, updateTheme: () => { theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark)} }}>
      <View style={[styles.container, themeStyle]}>
        <Text style={themeStyle}>Open up App.js to start working on your app!</Text>
        <UpdateThemeButton />
        <StatusBar style="auto" />
      </View>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
