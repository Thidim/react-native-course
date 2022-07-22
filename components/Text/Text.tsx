import React, { useContext } from "react"
import globalStyles from "../../constants/Styles"
import { Text as TextBase } from 'react-native'
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
        globalStyles[`text_${theme ? 'dark' : 'light'}`]
    ]}>{children}</TextBase>
}

export default Text;