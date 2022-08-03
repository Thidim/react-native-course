import { ParamListBase, useNavigation, useRoute } from "@react-navigation/native";
import { Auth, DataStore } from "aws-amplify";
import { createContext, useContext, useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";
import Toast from "react-native-toast-message";
import { RootStackParamList } from "../constants/types/types";
import { UserModelBase } from "../constants/types/User";
import { User } from "../models";

interface defaultUserContext {
    user: User;
    connected: boolean | null;
    location: string;
    params: {
        query?: string,
        watch?: string,
        maxNumber?: number
    };
    keepInTouch: (redirect: keyof RootStackParamList, color?: string) => void;
    updateUser: ({ fullname, email, username }:
        { fullname: string, email: string, username: string }) => void;
    logIn: (data: FieldValues) => void;
    logOut: () => void;
};

const defaultState = {
    user: UserModelBase,
    connected: null,
    location: 'home',
    params: {
        query: undefined,
        watch: undefined,
        maxNumber: undefined
    },
    keepInTouch: () => { },
    updateUser: () => { },
    logIn: () => { },
    logOut: () => { },
}

export const UserContext = createContext<defaultUserContext>(defaultState);

const UserContextProvider = ({ children }: { children: any }) => {
    const [user, setUser] = useState<User>(defaultState.user);
    const [location, setLocation] = useState<string>(defaultState.location);
    const [connected, setConnected] = useState<boolean | null>(defaultState.connected);
    const [params, setParams] = useState(defaultState.params);
    const navigation = useNavigation();

    const updateUser = async ({ fullname, email, username }:
        { fullname: string, email: string, username: string }) => {
        try {
            const users = await DataStore.query(User, (u) => u.email('eq', email));
            const newUser = await DataStore.save(
                User.copyOf(users[0], updated => {
                    updated.fullname = fullname,
                    updated.email = email,
                    updated.confirmedEmail = user.confirmedEmail,
                    updated.username = username
                })
            )
            setUser(newUser);
            console.log('Profile Updated');
            Toast.show({
                type: 'info',
                text1: 'Profile Updated successfully',
            })
        } catch (error: any) {
            console.warn(error.message);
            Toast.show({
                type: 'error',
                text1: error.message.toString(),
            })
        }
    }

    const keepInTouch = (redirect: keyof RootStackParamList) => {
        setLocation(redirect);
        navigation.navigate(redirect);
    }

    const checkUser = async () => {
        try {
            const cognito = await Auth.currentAuthenticatedUser();
            const queryUsers = (await DataStore.query(User))
            .filter(u => u.username !== cognito.username);
            setConnected(true);
            setUser({
                ...UserModelBase,
                ...queryUsers[0]
            });
            keepInTouch(window.location.pathname.substring(1) as keyof RootStackParamList);
        } catch (error: any) {
            setConnected(false)
            console.warn(error);
            keepInTouch('login');
        }
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
            keepInTouch('login');
        } catch (error: any) {
            console.warn(error.message);
            Toast.show({
                type: 'error',
                text1: error.message.toString(),
            })
        }
    }

    useEffect(() => {
        checkUser();
    }, []);


    return (
        <UserContext.Provider value={{
            user, connected, location, params, keepInTouch, updateUser, logIn, logOut
        }}>
            <Toast />
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;