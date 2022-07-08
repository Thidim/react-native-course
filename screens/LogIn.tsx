import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const navigation = useNavigation();

  const login = () => {
    console.warn("Login");
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
        value={"Login with Google"}
        submit={facebookLogin}
      />
      <CustomButton
        value={"Login with Facebook"}
        submit={googleLogin}
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
