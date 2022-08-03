import { useNavigation } from '@react-navigation/native';
import { Auth, DataStore } from 'aws-amplify';
import { FieldValues, useForm } from 'react-hook-form';
import Toast from 'react-native-toast-message';
import CustomButton from '../../../components/CustomButton';
import CustomInput from '../../../components/CustomInput';

import { View } from 'react-native';
import { SettingsModelBase } from '../../../constants/types/Settings';
import globalStyles from '../../../constants/Styles';
import { UserModelBase } from '../../../constants/types/User';
import { Settings, User } from '../../../models';
import { useContext } from 'react';
import { languageContext } from '../../../contexts/LanguageContext';
import awsmobile from '../../../aws-exports';
import Amplify from 'aws-amplify';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { UserContext } from '../../../contexts/UserContext';

const isLocalhost = Boolean(
  window.location.hostname === "localhost" ||
  window.location.hostname === "[::1]" ||
  window.location.hostname.match(
    /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
  )
);

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUp = () => {
  const { t } = useContext(languageContext);
  const { keepInTouch } = useContext(UserContext);
  const navigation = useNavigation();
  const { control, handleSubmit, watch } = useForm();
  const passw = watch('password');

  const [
    localRedirectSignIn,
    productionRedirectSignIn,
  ] = awsmobile.oauth.redirectSignIn.split(",");
  
  const [
    localRedirectSignOut,
    productionRedirectSignOut,
  ] = awsmobile.oauth.redirectSignOut.split(",");
  
  const updatedConfig = {
    ...awsmobile,
    oauth: {
      ...awsmobile.oauth,
      redirectSignIn: isLocalhost ? localRedirectSignIn : productionRedirectSignIn,
      redirectSignOut: isLocalhost ? localRedirectSignOut : productionRedirectSignOut,
    }
  }
  Amplify.configure(updatedConfig)


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
        keepInTouch('confirm_email');
      });
    } catch (error: any) {
      console.warn(error);
      Toast.show({
        type: 'error',
        text1: error.message,
      });
    }
  }
  const facebooklogin = () => {
    console.warn("fb");
  }
  const googlelogin = () => {
    // Auth.federatedSignIn({provider: CognitoHostedUIIdentityProvider.Google });
  }
  const gotAccount = () => {
    console.warn("Got an account");
    keepInTouch('login');
  }


  return (
    <View style={globalStyles.container}>
      <Toast />
      <CustomInput
        name={'name'}
        control={control}
        placeholder={t('profile.fullname.title')}
        rules={{
          required: t('profile.fullname.required'),
        }}
      />
      <CustomInput
        name={'email'}
        control={control}
        placeholder={t('profile.email.title')}
        rules={{
          required: t('profile.email.required'),
          pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
        }}
      />
      <CustomInput
        name={'username'}
        control={control}
        placeholder={t('profile.username.title')}
        rules={{
          required: t('profile.username.required'),
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
        placeholder={t('profile.password.title')}
        secureTextEntry
        rules={{
          required: t('profile.password.required'),
            minLength: {
              value: 8,
              message: 'Password should be at least 8 characters long',
            },
        }}
      />
      <CustomInput
        name={'verify password'}
        control={control}
        placeholder={t('profile.password.confirm')}
        secureTextEntry
        rules={{
          validate: ( value: string ) => value === passw || 'Password do not match',
        }}
      />
      <CustomButton
        value={t('auth.signup')}
        submit={handleSubmit(signup)}
      />
      {/* <CustomButton
        value={"login with Google"}
        submit={googlelogin}
      /> */}
      {/* <CustomButton
        name={"login with Facebook"}
        submit={googlelogin}
      /> */}
      <CustomButton
        value={t('auth.already')}
        submit={gotAccount}
        type={'secondary'}
      />
    </View>
  );
}

export default SignUp;