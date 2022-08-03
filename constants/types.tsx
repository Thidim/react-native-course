/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootParamList = {
  auth: NavigatorScreenParams<AuthParamList> | undefined;
  not_found: undefined;
};

export type AuthStackScreenProps<Screen extends keyof RootParamList> = NativeStackScreenProps<
  RootParamList,
  Screen
>;

export type AuthParamScreenProps<Screen extends keyof AuthParamList> = NativeStackScreenProps<
  AuthParamList,
  Screen
>;

export type AuthParamList = {
  login: undefined;
  signup: undefined;
  new_password: undefined;
};