import { Auth } from "aws-amplify";
import { useContext } from "react";
import { FieldValues, useForm } from "react-hook-form";
import Toast from "react-native-toast-message";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";
import View from "../../components/View/View";
import globalStyles from '../../constants/Styles';
import { AuthParamScreenProps } from "../../constants/types/types";
import { UserContext } from "../../contexts/UserContext";

const ConfirmEmail = ({ navigation }: AuthParamScreenProps<'confirm_email'>) => {
    const { control, handleSubmit } = useForm();
    const { user, updateUser, keepInTouch } = useContext(UserContext);

    const confirm = async (data: FieldValues) => {
        const { username, code } = data;

        try {
            await Auth.confirmSignUp(username, code)
                .then((res) => {
                    console.log(res);
                    keepInTouch('auth', 'login');
                    updateUser({
                        ...user,
                        ...res,
                    })
                });
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
        <View style={globalStyles.wrapper}>
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
                    submit={() => keepInTouch('auth', 'login')}
                    type={'secondary'}
                />
            </View>
        </View>
    );
}

export default ConfirmEmail;