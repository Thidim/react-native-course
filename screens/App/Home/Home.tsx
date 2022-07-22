import { useContext } from "react";
import globalStyles from "../../../constants/Styles";
import { UserContext } from "../../../contexts/UserContext";
import View from "../../../components/View/View";
import Text from "../../../components/Text/Text";

const Home = () => {
    const { user } = useContext(UserContext);

    return (
        <View style={globalStyles.inner}>
            <View style={globalStyles.container}>
                <Text>
                    {user.email}
                </Text>
            </View>
        </View>
    );
}

export default Home;