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

import NewPassword from '../screens/Password/NewPassword';
import NotFoundScreen from '../screens/NotFoundScreen/';
import login from '../screens/Authentification/login';
import SignUp from '../screens/Authentification/SignUp';
import { RootStackParamList } from '../constants/types/types';
import { rootLinking } from './LinkingConfiguration';
import ForgotPassword from '../screens/Password/ForgotPassword';
import ConfirmEmail from '../screens/ConfirmEmail/';
import Header from '../components/Header';
import UserContextProvider, { UserContext } from '../contexts/UserContext';
import Home from '../screens/App/Home';
import Settings from '../screens/App/Settings';
import Profile from '../screens/App/Profile';
import SettingsContextProvider from '../contexts/SettingsContext';
import LanguageContextProvider from '../contexts/LanguageContext';
import ThemeContextProvider from '../contexts/ThemeContext';
import Youtube from '../screens/App/Apps/Youtube';
import SideBar from '../components/SideBar';
import View from '../components/View/View';
import globalStyles from '../constants/Styles';

export default function Navigation() {

  return (
    <NavigationContainer
      linking={rootLinking}>
      <LanguageContextProvider>
        <ThemeContextProvider>
          <SettingsContextProvider>
            <UserContextProvider>
              <Header />
              <View style={[
                globalStyles.f,
                globalStyles.fr,
                globalStyles.f1,
              ]}>
                <SideBar />
                <RootNavigator />
              </View>
            </UserContextProvider>
          </SettingsContextProvider>
        </ThemeContextProvider>
      </LanguageContextProvider>
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying NewPasswords on top of all other content.
 * https://reactnavigation.org/docs/NewPassword
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const { connected } = useContext(UserContext);

  return (
    <>
      {connected != null ? (
        <>
          {!!connected ? (
              <ConnectedNavigator />
          ) : (
              <DisConnectedNavigator />
          )}
        </>
      ) : (
        <ActivityIndicator size='large' style={{ margin: 'auto' }} />
      )}
    </>
  )
}

const ConnectedNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="settings"
          component={Settings}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NotFound"
          component={NotFoundScreen}
          options={{ title: 'Oops!' }}
        />
        <Stack.Screen
          name="new_password"
          component={NewPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="youtube"
          component={Youtube}
          options={{ headerShown: false }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
const DisConnectedNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="login"
          component={login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="signup"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="confirm_email"
          component={ConfirmEmail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="forgot_password"
          component={ForgotPassword}
          options={{ headerShown: false }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}