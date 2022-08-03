import React, { useContext } from "react"
import globalStyles from "../../constants/Styles"
import { StyleSheet, Text as TextBase } from 'react-native'
import { ThemeContext } from "../../contexts/ThemeContext"

const Text = ({
    children, style
} : {
    children?: string | null,
    style?: object
}) => {
    const { theme } = useContext(ThemeContext);

    return <TextBase style={[
        style,
        styles.text,
        styles[`${theme ? 'dark' : 'light'}`]
    ]}>{children}</TextBase>
}

export default Text;

const styles: any = StyleSheet.create({
    text: {
        maxWidth: '100%'
    },
    dark: {
        color: 'white'
    }
});