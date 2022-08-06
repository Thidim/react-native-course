import i18n from 'i18n-js'
import memoize from 'lodash.memoize'
import { createContext, useEffect, useState } from 'react';
import en from '../constants/locales/en.json';
import fr from '../constants/locales/fr.json';

i18n.defaultLocale = 'en';
i18n.translations = { en, fr };

const tGetters: any = {
    en: () => en,
    fr: () => fr
};

interface DefaultLanguageContext {
    lang: string;
    setLanguage: (newLang: string) => void;
    t: (key: any, config?: any) => string;
};

const defaultState = {
    lang: 'en',
    setLanguage: () => { },
    t: () => ""
}

export const languageContext = createContext<DefaultLanguageContext>(defaultState);

const LanguageContextProvider = ({ children }: { children: any }) => {
    const [lang, setLang] = useState(defaultState.lang);

    const setLanguage = (newLang: string) => {
        setI18nConfig(newLang);
    }

    const setI18nConfig = (lang: string) => {
        i18n.locale = lang;
        setLang(i18n.locale);
    }
    
    const t = memoize(
        (key, config) => i18n.t(key, config),
        (key, config) => (config ? key + JSON.stringify(config) : key)
    );    

    useEffect(() => {
        setI18nConfig(lang);
    }, [])

    return (
        <languageContext.Provider value={{
            lang, setLanguage, t
        }} >
            {children}
        </languageContext.Provider>
    );
}

export default LanguageContextProvider;