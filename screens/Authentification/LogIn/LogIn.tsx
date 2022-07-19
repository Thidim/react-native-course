import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Toast from 'react-native-toast-message';
import CustomButton from '../../../components/CustomButton';
import CustomInput from '../../../components/CustomInput';

import { Text, View } from 'react-native';
import globalStyles from '../../../constants/Styles';
import { UserContext } from '../../../contexts/UserContext';
import { languageContext } from '../../../contexts/LanguageContext';

const LogIn = () => {
  const navigation = useNavigation();
  const { control, handleSubmit } = useForm();
  const { logIn } = useContext(UserContext);
  const { t, lang } = useContext(languageContext);

  const forgotPassword = () => {
    console.warn("Forgot");
    navigation.navigate('ForgotPassword');
  }
  const facebookLogin = () => {
    console.warn("fb");
  }
  const googleLogin = () => {
    console.warn("google");
  }
  const noAccount = () => {
    console.warn("No account yet");
    navigation.navigate('Signup');
  }

  return (
    <View style={globalStyles.container}>
      <CustomInput
        name={'username'}
        control={control}
        placeholder={t('username.title')}
        rules={{
          required: t('username.required'),
        }}
      />
      <CustomInput
        name={'password'}
        control={control}
        placeholder={t('password.title')}
        secureTextEntry
        rules={{
          required: t('password.required'),
        }}
      />
      <Toast />
      <CustomButton
        value={t("auth.login")}
        submit={handleSubmit(logIn)}
      />
      <CustomButton
        value={t("auth.forgot")}
        submit={forgotPassword}
        type={"secondary"}
      />
      {/* <CustomButton
        value={"Login with Google"}
        submit={facebookLogin}
      />
      <CustomButton
        value={"Login with Facebook"}
        submit={googleLogin}
      /> */}
      <CustomButton
        value={t("auth.noaccount")}
        submit={noAccount}
        type={"secondary"}
      />
    </View>
  );
}

export default LogIn;