import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Toast from 'react-native-toast-message';
import CustomButton from '../../../components/CustomButton';
import CustomInput from '../../../components/CustomInput';

import globalStyles from '../../../constants/Styles';
import { UserContext } from '../../../contexts/UserContext';
import { languageContext } from '../../../contexts/LanguageContext';
import View from '../../../components/View/View';

const LogIn = () => {
  const { control, handleSubmit } = useForm();
  const { logIn, keepInTouch } = useContext(UserContext);
  const { t } = useContext(languageContext);

  const forgotPassword = () => {
    console.warn("Forgot");
    keepInTouch('forgot_password');
  }
  const facebookLogin = () => {
    console.warn("fb");
  }
  const googleLogin = () => {
    console.warn("google");
  }
  const noAccount = () => {
    console.warn("No account yet");
    keepInTouch('signup');
  }

  return (
    <View style={[
      globalStyles.inner,
      globalStyles.f,
      globalStyles.fr
    ]}>
      <View style={[
        globalStyles.section,
        globalStyles.f,
        globalStyles.f1
      ]}>
        <View style={globalStyles.container}>
          <CustomInput
            name={'username'}
            control={control}
            placeholder={t('profile.username.title')}
            rules={{
              required: t('profile.username.required'),
            }}
          />
          <CustomInput
            name={'password'}
            control={control}
            placeholder={t('profile.password.title')}
            secureTextEntry
            rules={{
              required: t('profile.password.required'),
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
          <CustomButton
            value={t("auth.noaccount")}
            submit={noAccount}
            type={"secondary"}
          />
        </View>
      </View>
    </View>
  );
}

export default LogIn;