import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronDown, faChevronUp, faCogs, faHome, faRightToBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../contexts/UserContext";
import CustomButton from "../CustomButton";
import ModalMenu from "../ModalMenu";
import { View } from "../Themed";

const Header = () => {
    const { user, connected, logOut } = useContext(UserContext);
    const [show, setShow] = useState<Boolean>(false);
    const navigation = useNavigation();

    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('apps', { screen: 'home' })}>
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
                                value={`Welcome, ${user.username}`}
                                submit={() => setShow(!show)}
                                type={'secondary'}
                            >
                                <FontAwesomeIcon icon={ show ? faChevronUp : faChevronDown } />
                            </CustomButton>
                        </View>
                        <ModalMenu show={show} >
                            <CustomButton
                                value="Profile"
                                submit={() => {
                                    setShow(!show)
                                    navigation.navigate('apps', { screen: 'profile' })
                                }}
                                type="secondary"
                            >
                                <FontAwesomeIcon icon={faUser} />
                            </CustomButton>
                            <CustomButton
                                value="Settings"
                                submit={() => {
                                    setShow(!show)
                                    navigation.navigate('apps', { screen: 'settings' })
                                }}
                                type="secondary"
                            >
                                <FontAwesomeIcon icon={faCogs} />
                            </CustomButton>
                            <CustomButton
                                value="Log out"
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
                            value="Log in"
                            submit={() => navigation.navigate('auth', { screen: 'login' })}
                            type="secondary"
                            size="is_min"
                        />
                        <CustomButton
                            value="Sign up"
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