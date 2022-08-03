/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
//import { FontAwesome } from '@expo/vector-icons';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ColorSchemeName } from 'react-native';

import NotFound from '../screens/NotFound/NotFound';
import LogIn from '../screens/Auth/LogIn/LogIn';
import SignUp from '../screens/Auth/SignUp/SignUp';
import NewPassword from '../screens/Auth/Password/NewPassword';
import { AuthParamList, RootParamList } from '../constants/types';
import LinkingConfiguration from './LinkingConfiguration';

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
    <>
    {/* 
      TODO
     */}
    </>
  );
}

const Auth = createNativeStackNavigator<AuthParamList>();

const AuthNavigator = () => {
  return (
    <>
    {/* 
      TODO
     */}
    </>
  );
}

export default Navigation;