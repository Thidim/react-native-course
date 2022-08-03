import React, { useContext } from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';
import { StyleSheet, TextInput } from 'react-native';
import globalStyles, { spacing } from '../constants/Styles';
import { ThemeContext } from '../contexts/ThemeContext';
import Text from './Text/Text';
import View from './View/View';

const CustomInput = ({
    control,
    name,
    value,
    rules = {},
    placeholder,
    secureTextEntry,
    editable,
    style,
    children,
  } : {
    control: Control<FieldValues, object>,
    name: string,
    rules?: object,
    placeholder?: string,
    secureTextEntry?: boolean,
    value?: string | null,
    editable?: boolean,
    style?: object,
    children?: any
  }) => {
    const { theme } = useContext(ThemeContext);

    return (
      <Controller
        control={control}
        defaultValue={value}
        name={name}
        rules={rules}
        render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
          <>
            <View
              style={[
                styles.container,
                {borderColor: error ? 'red' : '#e8e8e8'},
                style
              ]}>
              <TextInput
                style={[
                  styles.input,
                  theme && styles.dark
                ]}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                editable={editable}
              />
              {children}
            </View>
            {error && (
              <Text style={{color: 'red', alignSelf: 'stretch'}}>{error.message || 'Error'}</Text>
            )}
          </>
        )}
      />
    );
  };

export default CustomInput;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        maxHeight: 40,
        flex:1,
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        padding: 10,
        marginVertical: 5,
    },
    input: {
      paddingLeft: spacing(4),
      color: 'black',
      width: "100%"
    },
    dark: {
      color: 'white'
    }
});
