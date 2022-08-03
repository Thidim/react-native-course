/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type YoutubeParams = {
  query?: string | null;
  watch?: string | null;
  maxResults?: number | null;
}

export type RootStackParamList = {
  login: undefined;
  signup: undefined;
  forgot_password: undefined;
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  new_password: undefined;
  NotFound: undefined;
  confirm_email: undefined;
  home: undefined;
  settings: undefined;
  profile: undefined;
  youtube: YoutubeParams;
};

export type AppsStackParamList = {
  home: undefined;
  youtube: undefined;
  Apps: NavigatorScreenParams<AppTabParamList> | undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type AppTabParamList = {
  home: undefined;
  youtube: undefined;
};

export type RootTabParamList = {
  login: undefined;
  youtube: undefined;
  signup: undefined;
  forgot_password: undefined;
  new_password: undefined;
  confirm_email: undefined;
  home: undefined;
  settings: undefined;
  profile: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;
