import { Pressable, StyleSheet, Text } from "react-native";
import globalStyles from '../constants/Styles';

const CustomButton = ({ value, submit, type = "primary", size = 'is_full' }:
    { value: string, submit: () => void, type?: string, size?: string }) => {
    return (
        <Pressable
            onPress={submit}
            style={[
                {/*
                    TODO
                */},
                styles.button,
                type === "primary" ? styles.button_primary : styles.button
            ]}
        >
            <Text style={
                type === "primary" ? styles.text_primary : styles.text_secondary
                }
            >
                {value}
            </Text>
        </Pressable>
    );
}

export default CustomButton;

const styles = StyleSheet.create({
    button: {
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
    },
    button_primary: {
        backgroundColor: '#3B71F3',
    },
    text_primary: {
        fontWeight: 'bold',
        color: 'white',
    },
    text_secondary: {
        fontWeight: '100',
        color: 'white',
    }

});