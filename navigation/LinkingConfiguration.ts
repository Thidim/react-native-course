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
          new_password: 'auth/password/new-password',
          confirm_email: 'auth/email/confirm-email',
        },
      },
      apps: {
        screens: {
          home: 'dashboard',
          profile: 'dashboard/profile',
          settings: 'dashboard/settings',
        },
      },
      not_found: '*',
    },
  },
};

export default linking;
