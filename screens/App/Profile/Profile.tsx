import { faCircleCheck, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useContext, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { StyleSheet } from "react-native";
import Toast from "react-native-toast-message";
import CustomButton from "../../../components/CustomButton";
import CustomInput from "../../../components/CustomInput";
import { Text, View } from "../../../components/Themed";
import globalStyles from "../../../constants/Styles";
import { AppsParamScreenProps } from "../../../constants/types";
import { UserContext } from "../../../contexts/UserContext";

const Profile = ({ navigation }: AppsParamScreenProps<'profile'>) => {
    const { user, updateUser } = useContext(UserContext);
    const [editable, setEdit] = useState<boolean>(false);
    const { control, handleSubmit } = useForm();

    const updateProfile = (data: FieldValues) => {
        setEdit(!editable);
        updateUser({
            fullname: data.name,
            email: data.email,
            username: data.username
        });
        Toast.show({
            type: 'info',
            text1: 'Profile successfully updated'
        })
    }

    return (
        <View style={[
            globalStyles.container,
            styles.profile
        ]}>
            <Toast />
            <View style={styles.profile_header}>
                <Text style={styles.profile_header_text}>Profile</Text>
                {!editable && (
                    <CustomButton
                        value="Edit"
                        submit={() => setEdit(!editable)}
                        size={'is_min'}
                    />
                )}
            </View>
            <View style={styles.profile_data}>
                <CustomInput
                    value={user.fullname}
                    name={'name'}
                    control={control}
                    placeholder={'Full name'}
                    editable={editable}
                />
                <CustomInput
                    name={'username'}
                    control={control}
                    placeholder={'Username'}
                    editable={editable}
                    value={user.username}
                />
                <View style={styles.email_info}>
                    <CustomInput
                        name={'email'}
                        control={control}
                        placeholder={'Email'}
                        editable={false}
                        value={user.email}
                    />
                    <FontAwesomeIcon
                        style={[styles.email_valid, user.confirmedEmail ? styles.yes : styles.no]}
                        icon={user.confirmedEmail ? faCircleCheck : faCircleXmark}
                    />
                </View>
            </View>
            <View style={styles.save_buttons}>
                {editable && (
                    <>
                        <CustomButton
                            value={"Save"}
                            submit={{/* TODO */}}
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
        </View>
    );
}

export default Profile;

const styles = StyleSheet.create({
    profile: {
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        width: 600,
        padding: 20,
        margin: 'auto'
    },
    profile_header: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    profile_header_text: {
        flex: 1,
        marginVertical: 5,
        fontSize: 50,
        fontWeight: 'bold'
    },
    profile_data: {
        height: 200,
        width: '100%',
        padding: 15,
    },
    email_info: {
        display: 'flex',
        flexDirection: "row",
    },
    email_valid: {
        width: 30,
        margin: 'auto',
    },
    yes: {
        color: 'green',
    },
    no: {
        color: 'red',
    },
    save_buttons: {
        width: '100%',
        height: 60,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    }
});