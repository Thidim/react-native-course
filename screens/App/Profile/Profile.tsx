import { faCircleCheck, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { StyleSheet } from "react-native";
import CustomButton from "../../../components/CustomButton";
import CustomInput from "../../../components/CustomInput";
import { Text, View } from "../../../components/Themed";
import globalStyles from "../../../constants/Styles";
import { UserContext } from "../../../contexts/UserContext";

const Profile = () => {
    const { user } = useContext(UserContext);
    const [editable, setEdit] = useState<boolean>(false);
    const { control, handleSubmit } = useForm();

    return (
        <View style={[
            globalStyles.container,
            styles.profile
        ]}>
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
                    name={'Full name'}
                    control={control}
                    placeholder={user.fullname}
                    editable={editable}
                />
                <CustomInput
                    name={'Username'}
                    control={control}
                    placeholder={user.username}
                    editable={editable}
                />
                <View style={styles.email_info}>
                    <CustomInput
                        name={'Email'}
                        control={control}
                        placeholder={user.email}
                        editable={false}
                    />
                    <FontAwesomeIcon
                        style={{/* TODO */}}
                        icon={{/* TODO */}}
                    />
                </View>
            </View>
            <View style={styles.save_buttons}>
                {editable && (
                    <>
                        <CustomButton
                            value={"Save"}
                            submit={() => setEdit(!editable)}
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