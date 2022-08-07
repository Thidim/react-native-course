import { useContext } from 'react';
import CustomButton from '../../../components/CustomButton/CustomButton';
import CustomInput from '../../../components/CustomInput/CustomInput';
import { useForm } from 'react-hook-form';
import Toast from 'react-native-toast-message';
import globalStyles from '../../../constants/Styles';
import { UserContext } from '../../../contexts/UserContext';
import { languageContext } from '../../../contexts/LanguageContext';
import { AuthParamScreenProps } from '../../../constants/types/types';
import View from '../../../components/View/View';

const LogIn = ({ navigation }: AuthParamScreenProps<'login'>) => {
  const { control, handleSubmit } = useForm();
  const { logIn, keepInTouch } = useContext(UserContext);
  const { t } = useContext(languageContext);

  const forgotPassword = () => {
    console.warn("Forgot");
    keepInTouch('auth', 'new_password');
  }
  const noAccount = () => {
    console.warn("No account yet");
    keepInTouch('auth', 'signup');
  }

  return (
    <View style={[
      globalStyles.wrapper,
      globalStyles.f,
      globalStyles.fr
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
  );
}

export default LogIn;