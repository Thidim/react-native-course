import { useNavigation } from "@react-navigation/native";
import { Auth } from "aws-amplify";
import { useContext, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { UserContext } from "../contexts/UserContext";
import CustomButton from "./CustomButton";
import ModalMenu from "./ModalMenu";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronDown, faChevronUp, faCogs, faHome, faRightToBracket, faUser, faUserGear } from "@fortawesome/free-solid-svg-icons";
import { languageContext } from "../contexts/LanguageContext";

const Header = () => {
    const { user, connected, logOut } = useContext(UserContext);
    const [show, setShow] = useState<Boolean>(false);
    const { t } = useContext(languageContext);
    const navigation = useNavigation();

    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <FontAwesomeIcon
                    style={{ margin: 'auto' }}
                    size={30}
                    icon={faHome}
                />
            </TouchableOpacity>
            <View style={styles.connection}>
                {connected ? (
                    <>
                        <View>
                            <CustomButton
                                value={`${t('welcome')}, ${user.username}`}
                                submit={() => setShow(!show)}
                                type={'secondary'}
                            >
                                <FontAwesomeIcon icon={ show ? faChevronUp : faChevronDown } />
                            </CustomButton>
                        </View>
                        <ModalMenu show={show} >
                            <CustomButton
                                value={t("profile.title")}
                                submit={() => {
                                    setShow(!show)
                                    navigation.navigate('Profile')
                                }}
                                type="secondary"
                            >
                                <FontAwesomeIcon icon={faUser} />
                            </CustomButton>
                            <CustomButton
                                value={t("settings.title")}
                                submit={() => {
                                    setShow(!show)
                                    navigation.navigate('Settings')
                                }}
                                type="secondary"
                            >
                                <FontAwesomeIcon icon={faCogs} />
                            </CustomButton>
                            <CustomButton
                                value={t("auth.logout")}
                                submit={() => {
                                    logOut()
                                    setShow(!show)
                                }}
                                type="tertiary"
                            >
                                <FontAwesomeIcon icon={faRightToBracket} />
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
        // alignItems: 'flex-end',
        zIndex: 1
    },
    connection: {
        width: 300,
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