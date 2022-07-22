import { useNavigation } from "@react-navigation/native";
import { Auth } from "aws-amplify";
import { useContext, useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { UserContext } from "../contexts/UserContext";
import CustomButton from "./CustomButton";
import ModalMenu from "./ModalMenu";
import { faChevronDown, faChevronUp, faCogs, faHome, faRightToBracket, faUser, faUserGear } from "@fortawesome/free-solid-svg-icons";
import { languageContext } from "../contexts/LanguageContext";
import View from "./View/View";
import Icon from "./Icon/Icon";
import globalStyles from "../constants/Styles";
import { ThemeContext } from "../contexts/ThemeContext";
import ThemeSwitch from "./ThemeSwitch/ThemeSwitch";

const Header = () => {
    const { user, connected, logOut } = useContext(UserContext);
    const [show, setShow] = useState<Boolean>(false);
    const { t } = useContext(languageContext);
    const { theme } = useContext(ThemeContext);
    const navigation = useNavigation();

    return (
        <View style={[styles.header, globalStyles[`header_${theme ? 'dark' : 'light'}`]]}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Home')}
            >
                <Icon
                    style={{ margin: 'auto' }}
                    size={30}
                    icon={faHome}
                />
            </TouchableOpacity>
            <View style={[styles.connection, globalStyles[`header_${theme ? 'dark' : 'light'}`]]}>
                {connected ? (
                    <>
                        <View style={globalStyles[`header_${theme ? 'dark' : 'light'}`]}>
                            <CustomButton
                                value={`${t('welcome')}, ${user.username}`}
                                style={globalStyles[`to_${theme ? 'dark' : 'light'}`]}
                                submit={() => setShow(!show)}
                                type={'secondary'}
                            >
                                <Icon
                                    icon={ show ? faChevronUp : faChevronDown }
                                />
                            </CustomButton>
                        </View>
                        <ModalMenu
                            show={show}
                            style={globalStyles[`modal_menu_${theme ? 'dark': 'light'}`]}
                        >
                            <CustomButton
                                value={t("profile.title")}
                                submit={() => {
                                    setShow(!show)
                                    navigation.navigate('Profile')
                                }}
                                type="secondary"
                            >
                                <Icon icon={faUser} />
                            </CustomButton>
                            <CustomButton
                                value={t("settings.title")}
                                submit={() => {
                                    setShow(!show)
                                    navigation.navigate('Settings')
                                }}
                                type="secondary"
                            >
                                <Icon icon={faCogs} />
                            </CustomButton>
                            <ThemeSwitch />
                            <CustomButton
                                value={t("auth.logout")}
                                submit={() => {
                                    logOut()
                                    setShow(!show)
                                }}
                                type="tertiary"
                            >
                                <Icon icon={faRightToBracket} />
                            </CustomButton>
                        </ModalMenu>
                    </>
                ) : (
                    <>
                        <CustomButton
                            value={t("auth.login")}
                            submit={() => navigation.navigate('Login')}
                            type="secondary"
                            size="is_min"
                        />
                        <CustomButton
                            value={t("auth.signup")}
                            submit={() => navigation.navigate('Signup')}
                            size="is_min"
                        />
                    </>
                )}
            </View>
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    header: {
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        zIndex: 1
    },
    connection: {
        flex: 1,
        display: 'flex',
        backgroundColor: 'inherit',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    welcome: {
        margin: 'auto'
    }
});