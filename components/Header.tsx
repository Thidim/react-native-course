import { useContext, useEffect, useState } from "react";
import { Pressable, StyleSheet, useWindowDimensions } from "react-native";
import { UserContext } from "../contexts/UserContext";
import CustomButton from "./CustomButton";
import ModalMenu from "./ModalMenu";
import { faBars, faChevronDown, faChevronUp, faCogs, faHome, faRightToBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import { languageContext } from "../contexts/LanguageContext";
import View from "./View/View";
import Icon from "./Icon/Icon";
import globalStyles from "../constants/Styles";
import { ThemeContext } from "../contexts/ThemeContext";
import ThemeSwitch from "./ThemeSwitch/ThemeSwitch";
import { SearchInput } from "./Apps/Youtube/SearchInput";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
    const { user, connected, location, keepInTouch, logOut } = useContext(UserContext);
    const [show, setShow] = useState<Boolean>(false);
    const { t } = useContext(languageContext);
    const { theme } = useContext(ThemeContext);
    const { width } = useWindowDimensions();
    const [yt, setYt] = useState(false);

    useEffect(() => {
        setYt(location === "youtube");
    }, [location])

    return (
        <View style={[styles.header, globalStyles[`header_${theme ? 'dark' : 'light'}`]]}>
            {!!connected && width > 360 ? (
                <>
                    {yt ? (
                        <Pressable
                            style={{ width: 120 }}
                            onPress={() => keepInTouch('youtube')}
                        >
                            <Icon
                                style={{ margin: 'auto', color: 'red' }}
                                size={45}
                                icon={faYoutube}
                            />
                        </Pressable>
                    ) : (
                        <Pressable
                            style={{ width: 120 }}
                            onPress={() => keepInTouch('home')}
                        >
                            <Icon
                                style={{ margin: 'auto' }}
                                size={30}
                                icon={faHome}
                            />
                        </Pressable>
                    )}
                </>
            ) : (
                <View>{ }</View>
            )}
            {yt &&
                <SearchInput />}
            <View style={[styles.connection, { backgroundColor: 'inherit' }]}>
                {!!connected ? (
                    <>
                        <View style={{ backgroundColor: 'inherit', margin: 'auto' }}>
                            {width > 360 &&
                                <CustomButton
                                    value={`${t('welcome')}, ${user.username}`}
                                    style={globalStyles[`to_${theme ? 'dark' : 'light'}`]}
                                    submit={() => setShow(!show)}
                                    type={'secondary'}
                                >
                                    <Icon
                                        icon={show ? faChevronUp : faChevronDown}
                                    />
                                </CustomButton>
                            }
                        </View>
                    </>
                ) : (
                    <>
                        <CustomButton
                            value={t("auth.login")}
                            submit={() => keepInTouch('login')}
                            type="secondary"
                            size="min"
                        />
                        <CustomButton
                            value={t("auth.signup")}
                            submit={() => keepInTouch('signup')}
                            size="min"
                        />
                    </>
                )}
                <ModalMenu
                    show={show}
                    style={globalStyles[`modal_menu_${theme ? 'dark' : 'light'}`]}
                >
                    {width <= 360 && !!connected || yt &&
                        <CustomButton
                            value={t("home")}
                            submit={() => {
                                setShow(!show)
                                keepInTouch('home')
                            }}
                            type="secondary"
                        >
                            <Icon icon={faHome} />
                        </CustomButton>
                    }
                    {!!connected &&
                        <>
                            <CustomButton
                                value={t("profile.title")}
                                submit={() => {
                                    setShow(!show)
                                    keepInTouch('profile')
                                }}
                                type="secondary"
                            >
                                <Icon icon={faUser} />
                            </CustomButton>
                            <CustomButton
                                value={t("settings.title")}
                                submit={() => {
                                    setShow(!show)
                                    keepInTouch('settings')
                                }}
                                type="secondary"
                            >
                                <Icon icon={faCogs} />
                            </CustomButton>
                        </>
                    }
                    <ThemeSwitch />
                    {!!connected &&
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
                    }
                </ModalMenu>
                {width <= 360 &&
                    <Pressable
                        style={globalStyles.m}
                        onPress={() => setShow(!show)}
                    >
                        <Icon icon={faBars} size={30} />
                    </Pressable>
                }
            </View>
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    header: {
        width: '100%',
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        zIndex: 2
    },
    connection: {
        display: 'flex',
        backgroundColor: 'inherit',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    welcome: {
        margin: 'auto'
    }
});