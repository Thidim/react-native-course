import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import CustomButton from '../../../../components/CustomButton';
import CustomInput from '../../../../components/CustomInput';

import { View } from '../../../../components/Themed';
import { AuthParamScreenProps } from '../../../../constants/types';

const NewPassword = ({ navigation }: AuthParamScreenProps<'new_password'>) => {
    const [username, setUsername] = useState('');

    const set = () => {
        console.warn('New password');
    }

    return (
        <View style={styles.container}>
            <CustomInput
                value={username}
                setValue={setUsername}
                placeholder={'Username'}
            />
            <CustomButton
                value={"Send"}
                submit={() => set}
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 300,
        margin: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
    },
});