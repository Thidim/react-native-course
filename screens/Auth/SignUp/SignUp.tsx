import { Auth, DataStore } from 'aws-amplify';
import React, { useContext } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import Toast from 'react-native-toast-message';
import CustomButton from '../../../components/CustomButton/CustomButton';
import CustomInput from '../../../components/CustomInput/CustomInput';

import globalStyles from '../../../constants/Styles';
import { Settings, User } from '../../../models';
import { View } from '../../../components/Themed';
import { AuthParamScreenProps } from '../../../constants/types/types';
import { SettingsModelBase } from '../../../constants/types/Settings';
import { UserModelBase } from '../../../constants/types/User';
import { languageContext } from '../../../contexts/LanguageContext';

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUp = ({ navigation }: AuthParamScreenProps<'signup'>) => {
  const { control, handleSubmit, watch } = useForm();
  const { t } = useContext(languageContext);
  const passw = watch('password');
  
  const signup = async (data: FieldValues) => {
    const {username, password, email, name} = data;
    try {
      await Auth.signUp({
        username,
        password,
        attributes: {email, name, preferred_username: username},
      }).then(async () => {
        Toast.show({
          type: 'info',
          text1: 'Welcome, ' + username,
        });
        const settings = await DataStore.save(new Settings({ ...SettingsModelBase }));
        await DataStore.save(new User({
          ...UserModelBase,
          username,
          email,
          fullname: name,
          settings: settings
        }));
        navigation.replace('confirm_email');
      });
    } catch (error: any) {
      console.warn(error);
      Toast.show({
        type: 'error',
        text1: error.message,
      });
    }
  }
  const gotAccount = () => {
    console.warn("Got an account");
    navigation.replace('login');
  }


  return (
    <View style={globalStyles.container}>
      <Toast />
      <CustomInput
        name={'name'}
        control={control}
        placeholder={t('fullname.title')}
        rules={{
          required: t('fullname.required'),
        }}
      />
      <CustomInput
        name={'email'}
        control={control}
        placeholder={t('email.title')}
        rules={{
          required: t('email.required'),
          pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
        }}
      />
      <CustomInput
        name={'username'}
        control={control}
        placeholder={t('username.title')}
        rules={{
          required: t('username.required'),
          minLength: {
            value: 3,
            message: 'Username should be at least 3 characters long',
          },
          maxLength: {
            value: 24,
            message: 'Username should be max 24 characters long',
          },
        }}
      />
      <CustomInput
        name={'password'}
        control={control}
        placeholder={t('password.title')}
        secureTextEntry
        rules={{
          required: t('password.required'),
            minLength: {
              value: 8,
              message: 'Password should be at least 8 characters long',
            },
        }}
      />
      <CustomInput
        name={'verify password'}
        control={control}
        placeholder={t('password.confirm')}
        secureTextEntry
        rules={{
          validate: ( value: string ) => value === passw || 'Password do not match',
        }}
      />
      <CustomButton
        value={'Sign up'}
        submit={handleSubmit(signup)}
      />
      <CustomButton
        value={'Log in'}
        submit={gotAccount}
        type={'secondary'}
      />
    </View>
  );
}

export default SignUp;