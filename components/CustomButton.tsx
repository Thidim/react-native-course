import { Pressable, StyleSheet, Text } from "react-native";

const CustomButton = ({ value, submit, type = "primary" }:
    { value: string, submit: () => void, type?: string }) => {
    return (
        <Pressable
            onPress={submit}
            style={
                type === "primary" ? styles.button_primary : styles.button_secondary
            }
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
    button_primary: {
        backgroundColor: '#3B71F3',
        width: '100%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
    },
    button_secondary: {
        width: '100%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
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