import { useContext, useState } from "react";
import { Image, StyleSheet, Switch } from "react-native";
import CustomButton from "../../../components/CustomButton";
import Ionicons from 'react-native-vector-icons/Ionicons';
import globalStyles, { dark } from "../../../constants/Styles";
import SelectDropdown from "react-native-select-dropdown";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { SettingsContext } from "../../../contexts/SettingsContext";
import { Country } from "../../../constants/types/Country";
import Toast from "react-native-toast-message";
import { languageContext } from "../../../contexts/LanguageContext";
import View from "../../../components/View/View";
import Text from "../../../components/Text/Text";
import Icon from "../../../components/Icon/Icon";
import ThemeSwitch from "../../../components/ThemeSwitch/ThemeSwitch";

const countriesWithFlags: Country[] = [
    { id: 'fr', title: 'France', image: require('../../../assets/images/fr.png') },
    { id: 'en', title: 'England', image: require('../../../assets/images/en.png') },
];

const Settings = () => {
    const { settings, updateSettings } = useContext(SettingsContext);
    const [editable, setEdit] = useState<boolean>(false);
    const { lang, setLanguage, t } = useContext(languageContext);

    const update = () => {
        updateSettings({
            id: settings.id,
            language: lang
        });
        Toast.show({
            type: 'info',
            text1: t('settings.updated')
        })
    }

    return (
        <View style={globalStyles.wrapper}>
            <View style={[
                globalStyles.container,
                styles.settings
            ]}>
                <Toast />
                <View style={styles.settings_header}>
                    <Text style={styles.settings_header_text}>{t('settings.title')}</Text>
                    {!editable && (
                        <CustomButton
                            value={t("buttons.edit")}
                            submit={() => setEdit(!editable)}
                            size={'min'}
                        />

                    )}
                </View>
                <View style={styles.settings_data}>
                    <View style={[styles.theme, globalStyles.half]}>
                        <View style={globalStyles.full}>
                            <Text style={styles.theme_title}>{t('settings.theme')}</Text>
                        </View>
                        <ThemeSwitch editable={editable} />
                    </View>
                    <View style={[styles.lang, globalStyles.half]}>
                        <View style={globalStyles.full}>
                            <Text style={styles.lang_title}>{t('settings.language')}</Text>
                        </View>
                        <View style={[styles.lang_selector, globalStyles.is_full]}>
                            {editable &&
                                <SelectDropdown
                                    data={countriesWithFlags}
                                    rowTextForSelection={(a: any, b: number): string => { return '' }}
                                    buttonTextAfterSelection={(a: any, b: number): string => { return '' }}
                                    defaultValue={lang === 'fr'
                                        ? { id: 'fr', title: 'France', image: require('../../../assets/images/fr.png') }
                                        : { id: 'en', title: 'England', image: require('../../../assets/images/en.png') }}
                                    onSelect={(selectedItem: any, index: any) => {
                                        console.log(selectedItem, index);
                                        setLanguage(selectedItem.id);
                                    }}
                                    buttonStyle={styles.dropdown3BtnStyle}
                                    renderCustomizedButtonChild={(selectedItem: { image: any; title: any; }, index: any) => {
                                        if (editable)
                                            return (
                                                <View style={styles.dropdown3BtnChildStyle}>
                                                    {selectedItem ? (
                                                        <Image source={selectedItem.image} style={styles.dropdown3BtnImage} />
                                                    ) : (
                                                        <Ionicons name="md-earth-sharp" color={'#444'} size={32} />
                                                    )}
                                                    <Text style={styles.dropdown3BtnTxt}>{selectedItem ? selectedItem.title : 'Select country'}</Text>
                                                    <Icon icon={faChevronDown} />
                                                </View>
                                            );
                                    }}
                                    dropdownStyle={styles.dropdown3DropdownStyle}
                                    rowStyle={styles.dropdown3RowStyle}
                                    renderCustomizedRowChild={(item: { image: any; title: any; }, index: any) => {
                                        return (
                                            <View style={styles.dropdown3RowChildStyle}>
                                                <Image source={item.image} style={styles.dropdownRowImage} />
                                                <Text style={styles.dropdown3RowTxt}>{item.title}</Text>
                                            </View>
                                        );
                                    }}
                                />
                            }
                        </View>
                    </View>
                </View>
                <View style={styles.save_buttons}>
                    {editable && (
                        <>
                            <CustomButton
                                value={t("buttons.save")}
                                submit={() => {
                                    setEdit(!editable);
                                    update();
                                }}
                                size={'is_min'}
                            />
                            <CustomButton
                                value={t("buttons.cancel")}
                                submit={() => setEdit(!editable)}
                                type={'editing'}
                                size={'is_min'}
                            />
                        </>
                    )}
                </View >
            </View>
        </View>
    );
}

export default Settings;

const styles: any = StyleSheet.create({
    settings: {
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        width: '100%',
        padding: 20,
        margin: 'auto'
    },
    settings_header: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    settings_header_text: {
        flex: 1,
        marginVertical: 5,
        fontSize: 50,
        fontWeight: 'bold'
    },
    settings_data: {
        width: '100%',
        padding: 15,
        height: 200,
        display: 'flex',
        flexDirection: 'row',
    },
    theme: {
    },
    theme_title: {
        fontSize: 25,
        marginTop: 15,
        marginBottom: 20,
        textAlign: 'center',
    },
    lang_title: {
        fontSize: 25,
        marginTop: 15,
        textAlign: 'center',
    },
    switch: {
        alignSelf: 'center',
    },
    save_buttons: {
        width: '100%',
        height: 60,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    dropdown3BtnStyle: {
        width: '80%',
        height: 50,
        backgroundColor: '#FFF',
        paddingHorizontal: 0,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#444',
    },
    dropdown3BtnChildStyle: {
        marginTop: 25,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 18,
    },
    dropdown3BtnImage: { width: 33, height: 33, resizeMode: 'cover' },
    dropdown3BtnTxt: {
        color: '#444',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15,
        marginHorizontal: 12,
    },
    dropdown3DropdownStyle: { backgroundColor: 'slategray' },
    dropdown3RowStyle: {
        backgroundColor: 'slategray',
        borderBottomColor: '#444',
        height: 50,
    },
    dropdown3RowChildStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 18,
    },
    dropdownRowImage: { width: 33, height: 33, resizeMode: 'cover' },
    dropdown3RowTxt: {
        color: 'black',
        textAlign: 'center',
        flex: 1,
        fontWeight: 'bold',
        fontSize: 15,
        marginHorizontal: 12,
    },
});
