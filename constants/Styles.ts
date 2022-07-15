import { StyleSheet } from "react-native";

const globalStyles: any = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        margin: 'auto',
        justifyContent: 'center',
        width: 300,
    },
    is_min: {
        width: 'fit-content'
    },
    is_half: {
        width: '50%',
    },
    is_full: {
        width: '100%',
    }
});

export default globalStyles;