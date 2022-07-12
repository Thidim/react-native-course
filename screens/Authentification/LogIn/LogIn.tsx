import { useNavigation } from '@react-navigation/native';
import { Auth } from 'aws-amplify';
import { FieldValues, useForm } from 'react-hook-form';
import Toast from 'react-native-toast-message';
import CustomButton from '../../../components/CustomButton';
import CustomInput from '../../../components/CustomInput';

import { View } from '../../../components/Themed';
import globalStyles from '../../../constants/Styles';

const LogIn = () => {
  const navigation = useNavigation();
  const { control, handleSubmit, formState:{errors} } = useForm();

  const login = async (data: FieldValues) => {
    try {
      const resp = await Auth.signIn(data.username, data.password);
      console.log(resp);
    } catch (error: any) {
      console.warn(error.message);
      Toast.show({
        type: 'error',
        text1: error.message.toString(),
      })
    }
  }
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
        placeholder={'Username'}
        rules={{
          required: 'Username is required',
        }}
      />
      <CustomInput
        name={'password'}
        control={control}
        placeholder={'Password'}
        secureTextEntry
        rules={{
          required: 'Password is required',
        }}
      />
      <Toast />
      <CustomButton
        value={"Log in"}
        submit={handleSubmit(login)}
      />
      <CustomButton
        value={"Forgot your password ?"}
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
        value={"Don't have an account yet ?"}
        submit={noAccount}
        type={"secondary"}
      />
    </View>
  );
}

export default LogIn;