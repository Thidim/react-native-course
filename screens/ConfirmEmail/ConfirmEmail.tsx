import { useNavigation } from "@react-navigation/native";
import { Auth } from "aws-amplify";
import { FieldValues, useForm } from "react-hook-form";
import Toast from "react-native-toast-message";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import { View } from "../../components/Themed";
import globalStyles from '../../constants/Styles';

const ConfirmEmail = () => {
    const { control, handleSubmit } = useForm();
    const navigation = useNavigation();

    const confirm = async (data: FieldValues) => {
        const { username , code } = data;

        try {
            await Auth.confirmSignUp(username, code)
            .then((res) => {
                console.log(res);
                navigation.navigate('Login');
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
                submit={() => navigation.navigate('Login')}
                type={'secondary'}
            />

        </View>
    );
}

export default ConfirmEmail;