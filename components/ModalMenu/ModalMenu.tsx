import { StyleSheet, View } from "react-native";

const ModalMenu = ({ show, children }: { show: Boolean, children: any }) => {
    return (
        <View style={[
            styles.modal,
            {/* TODO */}
        ]}>
            {/* TODO */}
        </View>
    );
}

export default ModalMenu;

const styles: any = StyleSheet.create({
    modal:{
        position:'absolute',
        width: '200px',
        marginTop: 67,
        right: -10,
        backgroundColor: 'inherit'
    },
    true: {
        display: 'flex',
    },
    false: {
        display: 'none',
    }
});