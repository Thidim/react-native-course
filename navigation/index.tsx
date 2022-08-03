/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
//import { FontAwesome } from '@expo/vector-icons';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ColorSchemeName } from 'react-native';

import LinkingConfiguration from './LinkingConfiguration';
import { RootParamList, AuthParamList } from '../constants/types';
import NotFound from '../screens/NotFound';
import LogIn from '../screens/Auth/LogIn';
import SignUp from '../screens/Auth/SignUp';
import NewPassword from '../screens/Auth/Password/NewPassword';

const Navigation = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Root = createNativeStackNavigator<RootParamList>();

const RootNavigator = () => {
  return (
    <Root.Navigator initialRouteName='auth' screenOptions={{ headerShown: false }}>
      <Root.Screen name="auth" component={AuthNavigator} />
      <Root.Screen name="not_found" component={NotFound} options={{ title: 'Oops!' }} />
    </Root.Navigator>
  );
}

const Auth = createNativeStackNavigator<AuthParamList>();

const AuthNavigator = () => {
  return (
    <Auth.Navigator initialRouteName='login' screenOptions={{ headerShown: false }}>
      <Auth.Screen name="login" component={LogIn} />
      <Auth.Screen name="signup" component={SignUp} />
      <Auth.Screen name="new_password" component={NewPassword} />
    </Auth.Navigator>
  );
}

export default Navigation;