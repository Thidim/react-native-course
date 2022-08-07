/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type YoutubeParams = {
  query?: string | null;
  watch?: string | null;
  maxResults?: number | null;
}

export type RootParamList = {
  auth: NavigatorScreenParams<AuthParamList> | undefined;
  apps: NavigatorScreenParams<AppsParamList> | undefined;
  not_found: undefined;
};

export type RootParamScreenProps<Screen extends keyof RootParamList> = NativeStackScreenProps<
  RootParamList,
  Screen
>;

export type AuthParamScreenProps<Screen extends keyof AuthParamList> = NativeStackScreenProps<
  AuthParamList,
  Screen
>;

export type AppsParamScreenProps<Screen extends keyof AppsParamList> = NativeStackScreenProps<
  AppsParamList,
  Screen
>;

export type AuthParamList = {
  login: undefined;
  signup: undefined;
  new_password: undefined;
  confirm_email: undefined;
};

export type AppsParamList = {
  home: undefined;
  profile: undefined;
  settings: undefined;
  youtube: YoutubeParams;
};
