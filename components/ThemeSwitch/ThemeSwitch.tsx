import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { StyleSheet, Switch } from "react-native";
import globalStyles, { smoke, smoky } from "../../constants/Styles";
import { ThemeContext } from "../../contexts/ThemeContext";
import Icon from "../Icon/Icon";
import View from "../View/View";

const ThemeSwitch = ({ editable = true, style = globalStyles.is_full }: { editable?: boolean, style?: object }) => {
    const { theme, setTheme } = useContext(ThemeContext);
    const [isEnabled, setIsEnabled] = useState(theme);

    const toggleSwitch = () => {
        setTheme(!isEnabled);
        setIsEnabled(!isEnabled);
    };
    return (
        <View style={[styles.theme_mode, style]}>
            <Icon icon={faSun} style={styles[`light_${isEnabled}`]} />
            <Switch
                style={styles.switch}
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                onValueChange={() => {
                    if (editable)
                        toggleSwitch()
                }}
                value={isEnabled || false}
            />
            <Icon icon={faMoon} style={styles[`dark_${isEnabled}`]} />
        </View>

    );
}

export default ThemeSwitch;

const styles:any = StyleSheet.create({
    theme_mode: {
        backgroundColor: 'inherit',
        margin: '0 auto',
        alignSelf: 'center',
        paddingTop: 14,
        paddingBottom: 14,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    light_true: {
        color: smoke,
    },
    light_false: {
        color: 'yellow'
    },
    dark_true: {
        color: 'white'
    },
    dark_false: {
        color: smoky
    }
});