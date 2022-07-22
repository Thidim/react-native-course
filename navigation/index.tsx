/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import NewPassword from '../screens/Password/NewPassword';
import NotFoundScreen from '../screens/NotFoundScreen/';
import LogIn from '../screens/Authentification/LogIn';
import SignUp from '../screens/Authentification/SignUp';
import { RootStackParamList } from '../constants/types/types';
import LinkingConfiguration from './LinkingConfiguration';
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

export default function Navigation() {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}>
      <LanguageContextProvider>
        <ThemeContextProvider>
          <SettingsContextProvider>
            <UserContextProvider>
              <Header />
              <RootNavigator />
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
  const { connected } = React.useContext(UserContext)
  return (
    <Stack.Navigator>
        {connected ? (
          <Stack.Group>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
            <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
            <Stack.Screen name="NewPassword" component={NewPassword} options={{ headerShown: false }} />
            <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen name="Login" component={LogIn} options={{ headerShown: false }} />
            <Stack.Screen name="Signup" component={SignUp} options={{ headerShown: false }} />
            <Stack.Screen name="ConfirmEmail" component={ConfirmEmail} options={{ headerShown: false }} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
          </Stack.Group>
        )
        }
    </Stack.Navigator>
  );
}