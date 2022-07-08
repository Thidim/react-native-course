import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Platform, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

const ResetPassword = () => {
  const [confirmationCode, setConfirmationCode] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation()

  const reset = () => {
    console.warn("reset");
    navigation.navigate('Login');
  }

  return (
    <View style={styles.container}>
      <Text>Reset your password</Text>
      <CustomInput
        value={confirmationCode}
        setValue={setConfirmationCode}
        placeholder={"Confirmation code"}
      />
      <CustomInput
        value={password}
        setValue={setPassword}
        placeholder={"New Password"}
        secure
      />
      <CustomButton
        value={"Reset password"}
        submit={reset}
      />

    </View>
  );
}

export default ResetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 300,
    margin: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
