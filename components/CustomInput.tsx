import { Dispatch, SetStateAction } from 'react';
import { StyleSheet, TextInput } from 'react-native';

import { View } from './Themed';

const CustomInput = ({ value, setValue, placeholder, secure }:
    { value: string, setValue: Dispatch<SetStateAction<string>>, placeholder: string, secure?: boolean }) => {
  return (
    <View style={styles.container}>
        <TextInput
            value={value}
            onChangeText={setValue}
            placeholder={placeholder}
            secureTextEntry={secure}
        />
    </View>
  );
}

export default CustomInput;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        height: 40,
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        padding: 10,
        marginVertical: 5,
    }
});
