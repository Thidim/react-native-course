import { useState } from 'react';
import { StyleSheet } from 'react-native';
import CustomButton from '../../../components/CustomButton';
import CustomInput from '../../../components/CustomInput';
import { View } from '../../../components/Themed';
import { AuthParamScreenProps } from '../../../types';

const LogIn = ({ navigation }: AuthParamScreenProps<'login'>) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    console.warn("Login");
  }
  const forgotPassword = () => {
    console.warn("Forgot");
    navigation.replace('forgot_password');
  }
  const noAccount = () => {
    console.warn("No account yet");
    navigation.replace('signup');
  }

  return (
    <View style={styles.container}>
      <CustomInput
        value={email}
        setValue={setEmail}
        placeholder={"Email"}
      />
      <CustomInput
        value={password}
        setValue={setPassword}
        placeholder={"Password"}
        secure
      />
      <CustomButton
        value={"Log in"}
        submit={login}
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

const styles = StyleSheet.create({
  container: {
    width: 300,
    margin: 'auto',
    padding: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
