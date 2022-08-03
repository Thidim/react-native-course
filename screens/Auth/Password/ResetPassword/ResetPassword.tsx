import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import CustomButton from '../../../../components/CustomButton';
import CustomInput from '../../../../components/CustomInput';

import { Text, View } from '../../../../components/Themed';
import { AuthParamScreenProps } from '../../../../types';

const ResetPassword = ({ navigation }: AuthParamScreenProps<'forgot_password'>) => {
  const [confirmationCode, setConfirmationCode] = useState('');
  const [password, setPassword] = useState('');

  const reset = () => {
    console.warn("reset");
    navigation.replace('login');
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
