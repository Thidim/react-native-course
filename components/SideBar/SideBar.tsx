import { faCogs, faUser, faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import globalStyles from "../../constants/Styles";
import { languageContext } from "../../contexts/LanguageContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import { UserContext } from "../../contexts/UserContext";
import CustomButton from "../CustomButton";
import Icon from "../Icon/Icon";
import View from "../View/View";

const SideBar = () => {
    const { t } = useContext(languageContext);
    const { theme } = useContext(ThemeContext);
    const { connected, keepInTouch } = useContext(UserContext);
    const [show, setShow] = useState(true);
    const { width } = useWindowDimensions();

    return (
        <>
            {connected && width > 360? (
                <View style={[
                    styles.sidebar,
                    show ? styles.show : styles.hide,
                    globalStyles[`header_${theme ? 'dark' : 'light'}`]
                ]}>
                    <CustomButton
                        value=""
                        style={{ justifyContent: 'flex-end', }}
                        submit={() => setShow(!show)}
                        type={'secondary'}
                    >
                        <Icon
                            size={16}
                            icon={show ? faAngleDoubleLeft : faAngleDoubleRight}
                        />
                    </CustomButton>
                    <CustomButton
                        value={show ? t("profile.title") : ""}
                        submit={() => keepInTouch('apps', 'profile')}
                        type="secondary"
                    >
                        <Icon icon={faUser} />
                    </CustomButton>
                    <CustomButton
                        value={show ? t("settings.title") : ""}
                        submit={() => keepInTouch('apps', 'settings')}
                        type="secondary"
                    >
                        <Icon icon={faCogs} />
                    </CustomButton>

                </View>
            ) : (
                <View>{}</View>
            )}
        </>            
    );
}

export default SideBar;

const styles = StyleSheet.create({
    sidebar: {
        backgroundColor: 'white',
        Width: 200,
        zIndex: 1
    },
    show: {
        maxWidth: 200,
        padding: 25
    },
    hide: {
        maxWidth: 'fit-content',
        paddingVertical: 25,
        paddingHorizontal: 5
    }
});