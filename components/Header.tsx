import { useNavigation } from "@react-navigation/native";
import { Auth } from "aws-amplify";
import { useContext, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { UserContext } from "../contexts/UserContext";
import CustomButton from "./CustomButton";
import ModalMenu from "./ModalMenu";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCogs, faRightToBracket, faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    const { user, connected, logOut } = useContext(UserContext);
    const [show, setShow] = useState<Boolean>(false);
    const navigation = useNavigation();

    return (
        <View style={styles.header}>
            <View style={styles.connection}>
                {connected ? (
                    <>
                        <View>
                            <CustomButton
                                value={`Welcome, ${user.username}`}
                                submit={() => setShow(!show)}
                                type={'secondary'}
                            />
                        </View>
                        <ModalMenu show={show} >
                            <CustomButton
                                value="Profile"
                                submit={() => {
                                    setShow(!show)
                                    navigation.navigate('Profile')
                                }}
                                type="secondary"
                            >
                                <FontAwesomeIcon icon={faUser} />
                            </CustomButton>
                            <CustomButton
                                value="Settings"
                                submit={() => {
                                    setShow(!show)
                                    navigation.navigate('Settings')
                                }}
                                type="secondary"
                            >
                                <FontAwesomeIcon icon={faCogs} />
                            </CustomButton>
                            <CustomButton
                                value="Log out"
                                submit={() => {
                                    setShow(!show)
                                    logOut
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
                            submit={() => navigation.navigate('Login')}
                            type="secondary"
                            size="is_half"
                        />
                        <CustomButton
                            value="Sign up"
                            submit={() => navigation.navigate('Signup')}
                            size="is_half"
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
        backgroundColor: 'white',
        alignItems: 'flex-end',
        zIndex: 1
    },
    connection: {
        width: 300,
        display: 'flex',
        backgroundColor: 'inherit',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    welcome: {
        margin: 'auto'
    }
});