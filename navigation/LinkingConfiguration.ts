/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../constants/types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              Home: 'Home',
            },
          },
          Settings: {
            screens: {
              Settings: 'Settings',
            },
          },
          Profile: {
            screens: {
              Profile: 'Profile',
            },
          },
          Login: {
            screens: {
              LogIn: 'Login',
            },
          },
          Signup: {
            screens: {
              SignUp: 'Signup',
            },
          },
          ForgotPassword: {
            screens: {
              ForgotPassword: 'ForgotPassword',
            },
          },
          NewPassword: {
            screens: {
              NewPassword: 'NewPassword',
            },
          },
          ConfirmEmail: {
            screens: {
              ConfirmEmail: 'ConfirmEmail',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};

export default linking;
