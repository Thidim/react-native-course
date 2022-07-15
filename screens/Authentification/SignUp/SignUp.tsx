import { useNavigation } from '@react-navigation/native';
import { Auth, DataStore } from 'aws-amplify';
import { FieldValues, useForm } from 'react-hook-form';
import Toast from 'react-native-toast-message';
import CustomButton from '../../../components/CustomButton';
import CustomInput from '../../../components/CustomInput';

import { View } from 'react-native';
import { SettingsModelBase } from '../../../constants/Settings';
import globalStyles from '../../../constants/Styles';
import { UserModelBase } from '../../../constants/User';
import { Settings, User } from '../../../models';

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUp = () => {
  const navigation = useNavigation();
  const { control, handleSubmit, watch } = useForm();
  const passw = watch('password');

  const signup = async (data: FieldValues) => {
    const {username, password, email, name} = data;
    try {
      await Auth.signUp({
        username,
        password,
        attributes: {email, name, preferred_username: username},
      }).then(async () => {
        const settings = await DataStore.save(new Settings({ ...SettingsModelBase }));
        await DataStore.save(new User({
          ...UserModelBase,
          username,
          email,
          fullname: name,
          settings: settings
        }));
        navigation.navigate('ConfirmEmail');
      });
    } catch (error: any) {
      console.warn(error);
      Toast.show({
        type: 'error',
        text1: error.message,
      });
    }
  }
  const facebookLogin = () => {
    console.warn("fb");
  }
  const googleLogin = () => {
    console.warn("google");
  }
  const gotAccount = () => {
    console.warn("Got an account");
    navigation.navigate('Login');
  }


  return (
    <View style={globalStyles.container}>
      <Toast />
      <CustomInput
        name={'name'}
        control={control}
        placeholder={'Full name'}
        rules={{
          equired: 'Name is required',
        }}
      />
      <CustomInput
        name={'email'}
        control={control}
        placeholder={'Email'}
        rules={{
          equired: 'Email is required',
          pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
        }}
      />
      <CustomInput
        name={'username'}
        control={control}
        placeholder={'Username'}
        rules={{
          required: 'Username is required',
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
        placeholder={'Password'}
        secureTextEntry
        rules={{
          required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password should be at least 8 characters long',
            },
        }}
      />
      <CustomInput
        name={'verify password'}
        control={control}
        placeholder={'Verify password'}
        secureTextEntry
        rules={{
          validate: ( value: string ) => value === passw || 'Password do not match',
        }}
      />
      <CustomButton
        value={'Sign up'}
        submit={handleSubmit(signup)}
      />
      {/* <CustomButton
        name={"Login with Google"}
        submit={facebookLogin}
      />
      <CustomButton
        name={"Login with Facebook"}
        submit={googleLogin}
      /> */}
      <CustomButton
        value={'Log in'}
        submit={gotAccount}
        type={'secondary'}
      />
    </View>
  );
}

export default SignUp;