import { Button, Text, View } from 'react-native';
import { ThemeContext } from './ThemeContext';

export default function UpdateThemeButton() {
  return (
    <ThemeContext.Consumer>
      {
        context => {
          let themeStyle = {
            backgroundColor: context.theme.background,
            color: context.theme.foreground,
            marginTop: 32
          };

          return (
            <View>
              <Text style={themeStyle}>Press this to change theme</Text>
              <Button onPress={context.updateTheme} title="Update Theme" />
            </View>
          );
        }
      }
    </ThemeContext.Consumer>
  )
};