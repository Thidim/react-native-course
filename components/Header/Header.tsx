import React, { useContext, useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { faChevronDown, faChevronUp, faCogs, faHome, faRightToBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../contexts/UserContext";
import globalStyles from "../../constants/Styles";
import { languageContext } from "../../contexts/LanguageContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import View from "../View/View";
import Icon from "../Icon/Icon";
import CustomButton from "../CustomButton";
import ModalMenu from "../ModalMenu";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import { RootParamScreenProps } from "../../constants/types/types";

const Header = ({ navigation }: RootParamScreenProps<'not_found'>) => {
    const { user, connected, logOut } = useContext(UserContext);
    const [show, setShow] = useState<Boolean>(false);
    const { t } = useContext(languageContext);
    const { theme } = useContext(ThemeContext);

    return (
        <View style={[styles.header, globalStyles[`header_${theme ? 'dark' : 'light'}`]]}>
            <TouchableOpacity
                onPress={() => navigation.navigate('apps', { screen : 'home' })}
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
                                    navigation.navigate('apps', { screen: 'profile' })
                                }}
                                type="secondary"
                            >
                                <Icon icon={faUser} />
                            </CustomButton>
                            <CustomButton
                                value={t("settings.title")}
                                submit={() => {
                                    setShow(!show)
                                    navigation.navigate('apps', { screen: 'settings' })
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
                            submit={() => navigation.navigate('auth', { screen: 'login' })}
                            type="secondary"
                            size="is_min"
                        />
                        <CustomButton
                            value={t("auth.signup")}
                            submit={() => navigation.navigate('auth', { screen: 'signup' })}
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