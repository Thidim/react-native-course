import { useContext } from "react";
import { Text, View } from "react-native";
import globalStyles from "../../../constants/Styles";
import { UserContext } from "../../../contexts/UserContext";

const Home = () => {
    const { user } = useContext(UserContext);

    return (
        <View style={globalStyles.container}>
            <Text>{user.fullname}</Text>
            <Text>{user.email}</Text>
            <Text>{user.confirmedEmail}</Text>
        </View>
    );
}

export default Home;