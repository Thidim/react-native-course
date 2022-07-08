/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
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
          ResetPassword: {
            screens: {
              ResetPassword: 'ResetPassword',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};

export default linking;
