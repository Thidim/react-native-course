import { CognitoUser } from 'amazon-cognito-identity-js';
import { Auth } from 'aws-amplify';
import { useContext } from 'react';
import CustomButton from '../../../components/CustomButton/CustomButton';
import CustomInput from '../../../components/CustomInput/CustomInput';
import { FieldValues, useForm } from 'react-hook-form';
import { View } from '../../../components/Themed';
import Toast from 'react-native-toast-message';
import globalStyles from '../../../constants/Styles';
import { AuthParamScreenProps } from '../../../constants/types';
import { UserContext } from '../../../contexts/UserContext';

const LogIn = ({ navigation }: AuthParamScreenProps<'login'>) => {
  const { control, handleSubmit } = useForm();
  const { logIn } = useContext(UserContext);

  const login = async (data: FieldValues) => {
    try {
      console.log(data);
      await Auth.signIn(data.username, data.password)
      .then((resp: CognitoUser) => logIn(resp))
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
    navigation.replace('new_password');
  }
  const noAccount = () => {
    console.warn("No account yet");
    navigation.replace('signup');
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
      <CustomButton
        value={"Don't have an account yet ?"}
        submit={noAccount}
        type={"secondary"}
      />
    </View>
  );
}

export default LogIn;