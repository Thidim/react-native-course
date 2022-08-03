import { useNavigation } from '@react-navigation/native';
import { Auth } from 'aws-amplify';
import React, { useContext } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import Toast from 'react-native-toast-message';
import CustomButton from '../../../components/CustomButton';
import CustomInput from '../../../components/CustomInput';
import { View } from 'react-native';
import globalStyles from '../../../constants/Styles';
import { UserContext } from '../../../contexts/UserContext';

const ForgotPassword = () => {
  const { keepInTouch } = useContext(UserContext);
  const { control, handleSubmit } = useForm();

  const send = async (data: FieldValues) => {
    try {
      await Auth.forgotPassword(data.username)
      .then((res) => {
        console.log(res);
        keepInTouch('new_password');
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
        value={"Send reset link"}
        submit={handleSubmit(send)}
      />
      <CustomButton
        value={"Back to log in"}
        submit={() => keepInTouch('login')}
        type={'secondary'}
      />
    </View>
  );
}

export default ForgotPassword;
