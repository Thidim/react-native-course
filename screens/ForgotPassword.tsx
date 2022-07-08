import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Platform, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation()

  const send = () => {
    console.warn("Sent");
    navigation.navigate('ResetPassword');
  }

  return (
    <View style={styles.container}>
      <CustomInput
        value={email}
        setValue={setEmail}
        placeholder={"email"}
      />
      <CustomButton
        value={"Send reset link"}
        submit={send}
      />

    </View>
  );
}

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: 'auto',
    justifyContent: 'center',
    width: 300,
  },
});
