import { useNavigation } from "@react-navigation/native";
import { Auth, DataStore } from "aws-amplify";
import { createContext, useContext, useEffect, useState } from "react";
import Toast from "react-native-toast-message";
import { SettingsModelBase } from "../constants/types/Settings";
import { User } from "../models";
import { Settings } from "../models";
import { languageContext } from "./LanguageContext";

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
    const { lang, setLanguage } = useContext(languageContext);

    const updateSettings = async ({ id, theme, language }:
        { id?: string, theme?: boolean | null, language?: string | null }) => {
        try {
            const settings = await DataStore.query(Settings, (u) => u.id('eq', id || '' ));
            const newSettings = await DataStore.save(
                Settings.copyOf(settings[0], updated => {
                    updated.theme = theme,
                    updated.language = language !== lang ? language : lang
                })
            )
            setSettings(newSettings);
            setLanguage(newSettings.language || lang)
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
            const cognito = await Auth.currentAuthenticatedUser();
            const querySettings = (await DataStore.query(User))
            .filter(u => u.username !== cognito.username);
            setSettings({
                ...SettingsModelBase,
                ...querySettings[0].settings
            });
            setLanguage(querySettings[0].settings?.language || lang)
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