import { StyleSheet } from "react-native";

export const lighter = '#ffffff';
export const light = '#898989';
export const smoky = '#eaeaea';
export const smoke = '#2d2d2d';
export const standard = '#1e1e1e';
export const dark = '#0f0f0f';

const primary = {
    backgroundColor: '#3B71F3',
    color: 'white',
    fontWeight: 'bold',
}


const globalStyles: any = StyleSheet.create({
    primary,
    inner: {
        height: '100%'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        margin: 'auto',
        justifyContent: 'center',
        width: 300,
    },
    header_dark: {
        backgroundColor: standard
    },
    header_light: {
        backgroundColor: '#f4f4f4'
    },
    modal_menu_dark: {
        backgroundColor: smoke,
        borderWidth: 1,
        border: 'solid ' + light
    },
    modal_menu_light: {
        backgroundColor: smoky
    },
    is_min: {
        width: 'fit-content'
    },
    is_half: {
        width: '50%',
    },
    is_full: {
        width: '100%',
    },
    view_dark: {
        backgroundColor: dark,
    },
    view_light: {
        backgroundColor: lighter,
    },
    text_dark: {
        color: 'white',
    },
    to_dark: {
        borderWidth: 1,
        border: 'solid ' + light,
    },
    to_light: {
        borderWidth: 1,
        border: 'solid grey',
    },
    icon_dark: {
        color: light,
    },
    icon_light: {
        color: 'grey',
    },
    text_input_dark: {
        color: 'black',
    },
    text_input_light: {
        color: 'black',
    }
});

export default globalStyles;