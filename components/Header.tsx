import { useNavigation } from "@react-navigation/native";
import { Auth } from "aws-amplify";
import { useContext, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { UserContext } from "../contexts/UserContext";
import CustomButton from "./CustomButton";
import { Text, View } from "./Themed";

const Header = () => {
    const { user, connected, logOut } = useContext(UserContext);
    const navigation = useNavigation();
    
    return (
        <View style={styles.header}>
            <View style={styles.connection}>
                {connected ? (
                    <>

                        <View><Text style={styles.welcome}>Welcome, {user?.username}</Text></View>
                        <CustomButton
                            value="Log out"
                            submit={ async () => {
                                await Auth.signOut().then(() => {
                                    console.warn('log out');
                                    logOut();
                                });
                                navigation.navigate('Login');
                            }}
                            type="secondary"
                            size="is_half"
                        />
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
        alignItems: 'flex-end',
    },
    connection: {
        width: 300,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    welcome: {
        margin: 'auto'
    }
});