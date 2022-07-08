import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

const SignUp = () => {
  const [username, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const navigation = useNavigation();

  const signup = () => {
    console.warn("Signup");
  }
  const forgotPassword = () => {
    console.warn("Forgot");
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
    <View style={styles.container}>
      <CustomInput
        value={email}
        setValue={setEmail}
        placeholder={"Email"}
      />
      <CustomInput
        value={username}
        setValue={setUser}
        placeholder={"Username"}
      />
      <CustomInput
        value={password}
        setValue={setPassword}
        placeholder={"Password"}
        secure
      />
      <CustomInput
        value={verifyPassword}
        setValue={setVerifyPassword}
        placeholder={"Confirm password"}
        secure
      />
      <CustomButton
        value={"Sign up"}
        submit={signup}
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
        value={"Log in"}
        submit={gotAccount}
        type={"secondary"}
      />
    </View>
  );
}

export default SignUp;

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
