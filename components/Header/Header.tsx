import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import { StyleSheet } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCogs, faRightToBracket, faUser } from "@fortawesome/free-solid-svg-icons";
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
                                submit={() => {/* TODO */}}
                                type="secondary"
                            >
                                <FontAwesomeIcon icon={faUser} />
                            </CustomButton>
                            <CustomButton
                                value="Settings"
                                submit={() => {/* TODO */}}
                                type="secondary"
                            >
                                <FontAwesomeIcon icon={faCogs} />
                            </CustomButton>
                            <CustomButton
                                value="Log out"
                                submit={() => {/* TODO */}}
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
                            size="is_half"
                        />
                        <CustomButton
                            value="Sign up"
                            submit={() => navigation.navigate('auth', { screen: 'signup' })}
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