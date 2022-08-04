/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ColorSchemeName } from 'react-native';

import Header from '../components/Header';
import UserContextProvider, { UserContext } from '../contexts/UserContext';
import Home from '../screens/App/Home';
import LinkingConfiguration from './LinkingConfiguration';
import { RootParamList, AuthParamList, AppsParamList } from '../constants/types';
import NotFound from '../screens/NotFound';
import LogIn from '../screens/Auth/LogIn';
import SignUp from '../screens/Auth/SignUp';
import NewPassword from '../screens/Auth/Password/NewPassword';
import { useContext } from 'react';

const Navigation = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <UserContextProvider>
        <Header />
        <RootNavigator />
      </UserContextProvider>
    </NavigationContainer>
  );
}

const Root = createNativeStackNavigator<RootParamList>();

const RootNavigator = () => {
  const { connected } = useContext(UserContext);
  return (
    <Root.Navigator initialRouteName='auth' screenOptions={{ headerShown: false }}>
      {connected ? (
        <Root.Screen name="apps" component={AppsNavigator} />
      ) : (
        <Root.Screen name="auth" component={AuthNavigator} />
      )}
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

const Apps = createNativeStackNavigator<AppsParamList>();

const AppsNavigator = () => {
  return (
    <Apps.Navigator initialRouteName='home' screenOptions={{ headerShown: false }}>
      <Apps.Screen name='home' component={Home} />
    </Apps.Navigator>
  );
}

export default Navigation;