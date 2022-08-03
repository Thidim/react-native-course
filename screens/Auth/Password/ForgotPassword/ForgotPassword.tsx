import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import CustomButton from '../../../../components/CustomButton';
import CustomInput from '../../../../components/CustomInput';

import { View } from '../../../../components/Themed';
import { AuthParamScreenProps } from '../../../../types';

const ForgotPassword = ({ navigation }: AuthParamScreenProps<'forgot_password'>) => {
  const [email, setEmail] = useState('');

  const send = () => {
    console.warn("Sent");
    navigation.replace('reset_password');
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
