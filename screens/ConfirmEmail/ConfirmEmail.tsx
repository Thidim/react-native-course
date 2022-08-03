import { Auth } from "aws-amplify";
import React from "react";
import { useForm, FieldValues } from "react-hook-form";
import Toast from "react-native-toast-message";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import { View } from "../../components/Themed";
import globalStyles from '../../constants/Styles';
import { AuthParamScreenProps } from "../../constants/types";

const ConfirmEmail = ({ navigation }: AuthParamScreenProps<'confirm_email'>) => {
    const { control, handleSubmit } = useForm();

    const confirm = async (data: FieldValues) => {
        const { username , code } = data;

        try {
            {/*
                TODO
            */}
        } catch (error: any) {
            console.warn(error);
            Toast.show({
                type: 'error',
                text1: error.message,
            });
        }
    }

    const reSend = async (data: FieldValues) => {
        const { username } = data;

        try {
            await Auth.resendSignUp(username)
            .then((res) => {
                console.log(res);
                Toast.show({
                    type: 'info',
                    text1: res,
                });
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
            <CustomInput
                name={'code'}
                control={control}
                placeholder={'Enter your confirmation code'}
                rules={{
                    required: 'User code is required',
                }}
            />
            <CustomButton
                value={'Confirm'}
                submit={handleSubmit(confirm)}
            />
            <CustomButton
                value={'Resend confirmation code'}
                submit={handleSubmit(reSend)}
            />
            <CustomButton
                value={'Back to log in'}
                submit={() => navigation.replace('login')}
                type={'secondary'}
            />

        </View>
    );
}

export default ConfirmEmail;