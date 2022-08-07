/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { BrowserRouter, Route, Switch } from 'react-middleware-router';
import React, { useContext } from 'react';
import { ActivityIndicator } from 'react-native';

import Header from '../components/Header';
import UserContextProvider, { UserContext } from '../contexts/UserContext';
import Home from '../screens/App/Home';
import Profile from '../screens/App/Profile';
import LinkingConfiguration from './LinkingConfiguration';
import { RootParamList, AuthParamList, AppsParamList } from '../constants/types/types';
import NotFound from '../screens/NotFound';
import LogIn from '../screens/Auth/LogIn';
import SignUp from '../screens/Auth/SignUp';
import Settings from '../screens/App/Settings';
import ConfirmEmail from '../screens/ConfirmEmail';
import SettingsContextProvider from '../contexts/SettingsContext';
import LanguageContextProvider from '../contexts/LanguageContext';
import ThemeContextProvider from '../contexts/ThemeContext';
import Youtube from '../screens/App/Apps/Youtube';
import SideBar from '../components/SideBar';
import View from '../components/View/View';
import globalStyles from '../constants/Styles';
import NewPassword from '../screens/Auth/Password/NewPassword';

const Navigation = () => {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
    >
      <LanguageContextProvider>
        <ThemeContextProvider>
          <SettingsContextProvider>
            <UserContextProvider>
              <View style={globalStyles.wrapper}>
                <Header />
                <View style={[
                  globalStyles.f,
                  globalStyles.fr,
                  globalStyles.f1,
                ]}>
                  <SideBar />
                  <View style={globalStyles.wrapper}>
                    <Navigator />
                  </View>
                </View>
              </View>
            </UserContextProvider>
          </SettingsContextProvider>
        </ThemeContextProvider>
      </LanguageContextProvider>
    </NavigationContainer>
  );
}

const Navigator = () => {
  const { connected } = useContext(UserContext);

  return (
    <View style={globalStyles.f1}>
      {connected != null ? (
        <RootNavigator />
      ) : (
        <ActivityIndicator size='large' style={{ margin: 'auto' }} />
      )}
    </View>
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
      <Auth.Screen name="confirm_email" component={ConfirmEmail} />
    </Auth.Navigator>
  );
}

const Apps = createNativeStackNavigator<AppsParamList>();

const AppsNavigator = () => {
  return (
    <Apps.Navigator initialRouteName='home' screenOptions={{ headerShown: false }} style={{ backgroundColor: 'black' }}>
      <Apps.Screen name='home' component={Home} />
      <Apps.Screen name='profile' component={Profile} />
      <Apps.Screen name='settings' component={Settings} />
      <Apps.Screen name='youtube' component={Youtube} />
    </Apps.Navigator>
  );
}

export default Navigation;
