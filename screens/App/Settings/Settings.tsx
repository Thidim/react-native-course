import { useContext, useState } from "react";
import { Image, StyleSheet, Switch } from "react-native";
import CustomButton from "../../../components/CustomButton";
import Ionicons from 'react-native-vector-icons/Ionicons';
import globalStyles from "../../../constants/Styles";
import SelectDropdown from "react-native-select-dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { SettingsContext } from "../../../contexts/SettingsContext";
import { Country } from "../../../constants/Country";
import Toast from "react-native-toast-message";
import { Text, View } from "../../../components/Themed";

const countriesWithFlags: Country[] = [
    { id: 'fr', title: 'France', image: require('../../../assets/images/fr.png') },
    { id: 'en', title: 'England', image: require('../../../assets/images/en.png') },
];

const Settings = () => {
    const { settings, updateSettings } = useContext(SettingsContext);
    const [editable, setEdit] = useState<boolean>(false);
    const [lang, setLang] = useState(settings.language);
    const [isEnabled, setIsEnabled] = useState(settings.theme);

    const update = () => {
        {/* TODO */}
        Toast.show({
            type: 'info',
            text1: 'Settings successfully updated'
        })
    }

    return (
        <View style={[
            globalStyles.container,
            styles.settings
        ]}>
            <Toast />
            <View style={styles.settings_header}>
                <Text style={styles.settings_header_text}>Settings</Text>
                {!editable && (
                    <CustomButton
                        value="Edit"
                        submit={() => setEdit(!editable)}
                        size={'is_min'}
                    />

                )}
            </View>
            <View style={styles.settings_data}>
                <View style={[styles.theme, globalStyles.is_half]}>
                    <View style={globalStyles.is_full}>
                        <Text style={styles.theme_title}>Theme</Text>
                    </View>
                    <View style={[styles.theme_mode, globalStyles.is_full]}>
                        <Text style={styles[`light_${isEnabled}`]}>Light</Text>
                        <Switch
                            style={styles.switch}
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                            onValueChange={() => {
                                if (editable) {
                                    setIsEnabled(!isEnabled)
                                }
                            }}
                            value={isEnabled || false}
                        />
                        <Text style={styles[`dark_${isEnabled}`]}>Dark</Text>
                    </View>
                </View>
                <View style={[styles.lang, globalStyles.is_half]}>
                    <View style={globalStyles.is_full}>
                        <Text style={styles.lang_title}>Language</Text>
                    </View>
                    <View style={[styles.lang_selector, globalStyles.is_full]}>
                        {editable &&
                            <SelectDropdown
                                data={countriesWithFlags}
                                rowTextForSelection={(a:any, b:number): string => {return ''}}
                                buttonTextAfterSelection={(a:any, b:number): string => {return ''}}
                                defaultValue={lang === 'fr'
                                    ? { id: 'fr', title: 'France', image: require('../../../assets/images/fr.png') }
                                    : { id: 'en', title: 'England', image: require('../../../assets/images/en.png') }}
                                onSelect={(selectedItem: any, index: any) => {
                                    console.log(selectedItem, index);
                                    setLang(selectedItem.id);
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
                                                <FontAwesomeIcon icon={faChevronDown} />
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
                    </View >
                </View >
            </View >
            <View style={styles.save_buttons}>
                {editable && (
                    <>
                        <CustomButton
                            value={"Save"}
                            submit={() => {
                                setEdit(!editable);
                                update();
                            }}
                            size={'is_min'}
                        />
                        <CustomButton
                            value={"Cancel"}
                            submit={() => setEdit(!editable)}
                            type={'editing'}
                            size={'is_min'}
                        />
                    </>
                )}
            </View>
        </View >
    );
}

export default Settings;

const styles: any = StyleSheet.create({
    settings: {
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        width: 600,
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
        textAlign: 'center',
    },
    lang_title: {
        fontSize: 25,
        marginTop: 15,
        textAlign: 'center',
    },
    theme_mode: {
        marginTop: 35,
        marginBottom: 35,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    switch: {
        alignSelf: 'center',
    },
    light_true: {
        color: '#0000'
    },
    dark_false: {
        color: '#0000'
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
        fontWeight: 'bold',
        fontSize: 15,
        marginHorizontal: 12,
    },
});
