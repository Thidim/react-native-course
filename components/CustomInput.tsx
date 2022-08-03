import { Control, Controller, FieldValues } from 'react-hook-form';
import { StyleSheet, TextInput } from 'react-native';
import { Text, View } from './Themed';

const CustomInput = ({
    control,
    name,
    rules = {},
    placeholder,
    secureTextEntry,
  } : {
    control: Control<FieldValues, object>,
    name: string,
    rules: object,
    placeholder: string,
    secureTextEntry?: boolean
  }) => {
    return (
      <Controller
      {/*
        TODO
      */}
      />
    );
  };

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
