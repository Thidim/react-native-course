import { useState } from "react";
import globalStyles from "../../../constants/Styles";
import View from "../../../components/View/View";
import { faFacebook, faFacebookMessenger, faYoutube } from "@fortawesome/free-brands-svg-icons";
import AppList from "../../../components/Apps/AppList/AppList";
import { App } from "../../../constants/types/Apps";

const apps: App[] = [
    {
        title: 'Youtube',
        location: 'youtube',
        icon: faYoutube,
        color: 'red',
        owned: true
    },
    {
        title: 'Facebook',
        location: 'youtube',
        icon: faFacebook,
        color: 'blue',
        owned: false
    },
    {
        title: 'Messenger',
        location: 'youtube',
        icon: faFacebookMessenger,
        color: 'blue',
        owned: false
    },
];

const Home = () => {
    const [owned, setOwned] = useState(apps.filter(app => app.owned))
    const [available, setavailable] = useState(apps.filter(app => !app.owned))

    return (
        <View style={[
            globalStyles.wrapper,
            globalStyles.f,
            globalStyles.fr
        ]}>
            <View style={[
                globalStyles.section,
                globalStyles.f,
                globalStyles.fc,
                globalStyles.fsb,
                globalStyles.f1
            ]}>
                {/* TODO */}
            </View>
        </View>
    );
}

export default Home;