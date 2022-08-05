import { Auth } from 'aws-amplify';
import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import Toast from 'react-native-toast-message';
import CustomButton from '../../../../components/CustomButton';
import CustomInput from '../../../../components/CustomInput';

import { View } from '../../../../components/Themed';
import globalStyles from '../../../../constants/Styles';
import { AuthParamScreenProps } from '../../../../constants/types';

const NewPassword = ({ navigation }: AuthParamScreenProps<'new_password'>) => {
  const { control, handleSubmit } = useForm();

  const set = async (data: FieldValues) => {
    const { username } = data;
    try {
      await Auth.forgotPassword(username)
      .then((res) => {
        console.log(res);
        navigation.replace('login');  
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
        submit={() => navigation.replace('login')}
        type={'secondary'}
      />

    </View>
  );
}

export default NewPassword;