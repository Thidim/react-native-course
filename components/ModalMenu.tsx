import { StyleSheet } from "react-native";
import View from "./View/View";

const ModalMenu = ({ show, children, style }: { show: Boolean, children: any, style?: object }) => {
    return (
        <View style={[
            styles.modal,
            styles[show.toString()],
            style
        ]}>
            {children}
        </View>
    );
}

export default ModalMenu;

const styles: any = StyleSheet.create({
    modal:{
        position:'absolute',
        width: '200px',
        marginTop: 70,
        borderWidth: 1,
        borderRadius: 10,
        borderTopRightRadius: 0,
        right: -10,
    },
    true: {
        display: 'flex',
    },
    false: {
        display: 'none',
    }
});