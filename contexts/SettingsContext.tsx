import { useNavigation } from "@react-navigation/native";
import { Auth, DataStore } from "aws-amplify";
import { createContext, useContext, useEffect, useState } from "react";
import Toast from "react-native-toast-message";
import { SettingsModelBase } from "../constants/Settings";
import { User } from "../models";
import { Settings } from "../models";

interface DefaultSettingsContext {
    settings: Settings;
    updateSettings: ({ id, theme, language }:
        { id?: string, theme?: boolean | null, language?: string | null }) => void;
    checkSettings: (data?: Settings | null) => void;
};

const defaultState = {
    settings: SettingsModelBase,
    updateSettings: () => { },
    checkSettings: () => { },
}

export const SettingsContext = createContext<DefaultSettingsContext>(defaultState);

const SettingsContextProvider = ({ children }: { children: any }) => {
    const [settings, setSettings] = useState<Settings>(defaultState.settings);
    const navigation = useNavigation();

    const updateSettings = async ({ id, theme, language }:
        { id?: string, theme?: boolean | null, language?: string | null }) => {
        try {
            {/* TODO */}
            console.log('Settings Updated');
            Toast.show({
                type: 'info',
                text1: 'Settings Updated successfully',
            })
        } catch (error: any) {
            console.warn(error.message);
            Toast.show({
                type: 'error',
                text1: error.message.toString(),
            })
        }
    }

    const checkSettings = async () => {
        try {
            {/* TODO */}
            setSettings({
                ...SettingsModelBase,
                ...querySettings[0].settings
            });
        } catch (error: any) {
            console.warn(error.message);
        }
    }

    useEffect(() => {
        checkSettings();
    }, [])

    return (
        <SettingsContext.Provider value={{
            settings, checkSettings, updateSettings
        }}>
            {children}
        </SettingsContext.Provider>
    );
}

export default SettingsContextProvider;