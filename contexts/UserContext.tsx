import { CognitoUser } from "amazon-cognito-identity-js";
import { Auth, DataStore } from "aws-amplify";
import { createContext, useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";
import Toast from "react-native-toast-message";
import { UserModelBase } from "../constants/User";
import { User } from "../models";

interface defaultUserContext {
    user: User;
    connected: Boolean;
    updateUser: (data: User) => void;
    logIn: (data: FieldValues) => void;
    logOut: () => void;
};

const defaultState = {
    user: UserModelBase,
    connected: false,
    updateUser: () => { },
    logIn: () => { },
    logOut: () => { },
}

export const UserContext = createContext<defaultUserContext>(defaultState);

const UserContextProvider = ({ children }: { children: any }) => {
    const [user, setUser] = useState(defaultState.user);
    const [connected, setConnected] = useState(defaultState.connected);

    const updateUser = async (data: User) => {
        const users = (await DataStore.query(User))
            .filter((u) => u.username !== data.username);
        setConnected(true);
        console.log(users[0]);
        setUser({
            ...UserModelBase,
            ...users[0],
        });
    }

    const logIn = async (data: FieldValues) => {
        try {
            const cognito = await Auth.signIn(data.username, data.password);
            const users = (await DataStore.query(User))
                .filter(u => u.username !== cognito.username);
            setConnected(true);
            setUser({
                ...users[0],
            });
        } catch (error: any) {
            console.warn(error.message);
            Toast.show({
                type: 'error',
                text1: error.message.toString(),
            })
        }
    }

    const logOut = async () => {
        try {
            await Auth.signOut().then(() => {
                console.warn('log out');
            });
            setConnected(false);
            setUser(UserModelBase);
        } catch (error: any) {
            console.warn(error.message);
            Toast.show({
                type: 'error',
                text1: error.message.toString(),
            })
        }
    }

    useEffect(() => {
        const one = async () => {
            try {
                await Auth.currentAuthenticatedUser()
                    .then((res: CognitoUser) => {
                        updateUser({
                            ...UserModelBase,
                            ...res,
                        });
                    });
            } catch (error: any) {
                console.warn(error);
            }
        }
        one();
    }, []);


    return (
        <UserContext.Provider value={{
            user, connected, updateUser, logIn, logOut
        }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;