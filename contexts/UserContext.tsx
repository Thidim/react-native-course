import { CognitoUser } from "amazon-cognito-identity-js";
import { Auth } from "aws-amplify";
import { createContext, useEffect, useState } from "react";
import { UserModelBase } from "../constants/User";
import { User } from "../models";

interface defaultUserContext {
    user: User | null;
    connected: Boolean;
    updateUser: (data: CognitoUser) => void;
    logIn: (data: CognitoUser) => void;
    logOut: () => void;
};

const defaultState = {
    user: UserModelBase,
    connected: false,
    updateUser: () => {},
    logIn: () => {},
    logOut: () => {},
}

export const UserContext = createContext<defaultUserContext>(defaultState);

const UserContextProvider = ({ children }: { children: any }) => {
    const [user, setUser] = useState(defaultState.user);
    const [connected, setConnected] = useState(defaultState.connected);

    const updateUser = ( data: CognitoUser ) => {
        setConnected(true);
        setUser({
            ...UserModelBase,
            username: data.getUsername(),
        });
    }

    const logIn = (data: CognitoUser) => {
        setConnected(true);
        setUser({
            ...UserModelBase,
            username: data.getUsername(),
        });
    }

    const logOut = ()  => {
        setConnected(false);
        setUser(UserModelBase);
    }

    useEffect(() => {
        const one = async () => {
            try {
                await Auth.currentAuthenticatedUser()
                .then((res: CognitoUser) => {
                    updateUser(res);
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