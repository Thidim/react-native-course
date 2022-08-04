import { Control, Controller, FieldValues } from 'react-hook-form';
import { StyleSheet, TextInput } from 'react-native';
import { Text, View } from '../Themed';

const CustomInput = ({
    control,
    name,
    rules = {},
    placeholder,
    secureTextEntry,
    editable,
  } : {
    control: Control<FieldValues, object>,
    name: string,
    rules?: object,
    placeholder?: string | null,
    secureTextEntry?: boolean,
    editable?: boolean
  }) => {
    return (
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
          <>
            <View
              style={[
                styles.container,
                {borderColor: error ? 'red' : '#e8e8e8'},
              ]}>
              <TextInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder={placeholder || value}
                secureTextEntry={secureTextEntry}
                editable={editable}
              />
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
        backgroundColor: 'white',
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
});
