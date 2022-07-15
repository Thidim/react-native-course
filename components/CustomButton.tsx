import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Pressable, StyleSheet, Text } from "react-native";
import globalStyles from '../constants/Styles';

const CustomButton = ({ value, submit, type = "primary", size = 'is_full', children }:
    { value: string, submit: () => void, type?: string, size?: string, children?: any }) => {
    return (
        <Pressable
            onPress={submit}
            style={[
                globalStyles[size],
                styles.button,
                styles[`button_${type}`]
            ]}
        >
            {children}
            <Text style={[
                styles.text,
                styles[`text_${type}`]
            ]}>
                {value}
            </Text>
        </Pressable>
    );
}

export default CustomButton;

const styles: any = StyleSheet.create({
    button: {
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderRadius: 5,
    },
    button_primary: {
        backgroundColor: '#3B71F3',
    },
    text: {
        flex: 1,
        textAlign: 'center',
    },
    text_primary: {
        fontWeight: 'bold',
        color: 'white',
    },
    text_secondary: {
    },
    text_tertiary: {
        fontWeight: '100',
        color: 'rgba(0, 0, 0, 0.5)',
    }

});