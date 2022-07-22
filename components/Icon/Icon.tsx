import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { useContext } from "react"
import globalStyles from "../../constants/Styles"
import { ThemeContext } from "../../contexts/ThemeContext"

const Icon = ({
    icon,
    size,
    style
} : {
    icon: IconDefinition,
    size?: number,
    style?: object
}) => {
    const { theme } = useContext(ThemeContext);

    return <FontAwesomeIcon
                icon={icon}
                style={[
                    globalStyles[`icon_${theme ? 'dark' : 'light'}`],
                    style
                ]}
                size={size}
            />
}

export default Icon;