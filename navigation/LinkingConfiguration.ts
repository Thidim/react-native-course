/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { AppsStackParamList, RootStackParamList } from '../constants/types/types';

const rootLinking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Root: {
        initialRouteName: 'home',
        screens: {
          home: {
            screens: {
              home: 'home',
            },
          },
          youtube: {
            path: 'youtube',
            screens: {
              youtube: 'youtube'
            },
          },
          settings: {
            screens: {
              settings: 'settings',
            },
          },
          profile: {
            screens: {
              profile: 'profile',
            },
          },
          login: {
            screens: {
              login: 'login',
            },
          },
          signup: {
            screens: {
              signup: 'signup',
            },
          },
          forgot_password: {
            screens: {
              forgot_password: 'forgot_password',
            },
          },
          new_password: {
            screens: {
              new_password: 'new_password',
            },
          },
          confirm_email: {
            screens: {
              confirm_email: 'confirm_email',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};

const appsLinking: LinkingOptions<AppsStackParamList> = {
  prefixes: [Linking.createURL('/'), Linking.createURL('/apps/')],
  config: {
    screens: {
      Apps: {
        screens: {
          home: {
            screens: {
              home: 'home',
            },
          },
          youtube: {
            screens: {
              youtube: 'youtube',
            },
          },
        },
      },
    },
  },
}

export { rootLinking, appsLinking };
