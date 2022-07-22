import React, { useContext } from "react"
import globalStyles from "../../constants/Styles"
import { View as ViewBase } from 'react-native'
import { ThemeContext } from "../../contexts/ThemeContext"

const View = ({
    children, style
} : {
    children: any,
    style?: object
}) => {
    const { theme } = useContext(ThemeContext);
    
    return <ViewBase style={[
        globalStyles[`view_${theme ? 'dark' : 'light'}`],
        style
    ]}>{children}</ViewBase>
}

export default View;