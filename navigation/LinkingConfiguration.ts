/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootParamList } from '../constants/types';

const linking: LinkingOptions<RootParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      auth: {
        screens: {
          login: 'auth/login',
          signup: 'auth/signup',
          forgot_password: 'auth/password/forgot-password',
          reset_password: 'auth/password/reset-password',
        },
      },
      not_found: '*',
    },
  },
};

export default linking;