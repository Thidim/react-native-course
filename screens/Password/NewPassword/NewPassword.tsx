import { useNavigation } from '@react-navigation/native';
import { Auth } from 'aws-amplify';
import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message';
import CustomButton from '../../../components/CustomButton';
import CustomInput from '../../../components/CustomInput';

import { Text, View } from '../../../components/Themed';
import globalStyles from '../../../constants/Styles';

const NewPassword = () => {
  const { control, handleSubmit } = useForm();
  const navigation = useNavigation()

  const set = async (data: FieldValues) => {
    const { username } = data;

    try {
      await Auth.forgotPassword(username)
      .then((res) => {
        console.log(res);
        navigation.navigate('NewPassword');  
      });
    } catch (error: any) {
      console.warn(error);
      Toast.show({
        type: 'error',
        text1: error.message,
      });
    }
  }

  return (
    <View style={globalStyles.container}>
      <Toast />
      <Text>Set your password</Text>
      <CustomInput
        name={'username'}
        control={control}
        placeholder={'Username'}
        rules={{
          required: 'Username is required',
        }}
      />
      <CustomButton
        value={"Send"}
        submit={handleSubmit(set)}
      />
      <CustomButton
        value={"Back to log in"}
        submit={() => navigation.navigate('Login')}
        type={'secondary'}
      />

    </View>
  );
}

export default NewPassword;