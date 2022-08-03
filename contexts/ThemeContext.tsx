import { createContext, useState } from "react";
import { SettingsModelBase } from "../constants/types/settings";

interface DefaultThemeContext {
    theme?: boolean | null;
    setTheme: (newTheme: boolean) => void;
};

const defaultState = {
    theme: SettingsModelBase.theme,
    setTheme: () => { }
}

export const ThemeContext = createContext<DefaultThemeContext>(defaultState);

const ThemeContextProvider = ({ children }: { children: any }) => {
    const [theme, setThema] = useState(defaultState.theme);

    const setTheme = (newTheme: boolean) => {
        setThema(newTheme);
    }

    return (
        <ThemeContext.Provider value={{
            theme, setTheme
        }} >
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;