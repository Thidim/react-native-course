import { Pressable, StyleSheet } from "react-native";
import globalStyles from '../constants/Styles';
import Text from "./Text/Text";

const CustomButton = ({ value, submit, type = "primary", size = 'is_full', children, style }:
    { value: string, submit: () => void, type?: string, size?: string, children?: any, style?: object }) => {
    return (
        <Pressable
            onPress={submit}
            style={[
                style,
                globalStyles[size],
                styles.button,
                globalStyles[type]
            ]}
        >
            {children}
            <Text style={[
                styles.text,
                globalStyles[type]
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
        margin: 5,
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderRadius: 5,
    },
    button_editing: {
        borderWidth: 1,
        border: '1px solid black',
    },
    text: {
        flex: 1,
        textAlign: 'center',
    },
    text_secondary: {
    },
    text_tertiary: {
        fontWeight: '100',
        color: 'rgba(0, 0, 0, 0.5)',
    }

});