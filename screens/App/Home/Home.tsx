import { useContext, useState } from "react";
import globalStyles from "../../../constants/Styles";
import { UserContext } from "../../../contexts/UserContext";
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
        owned: false
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
            globalStyles.inner,
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
                <AppList
                    apps={owned}
                    title='My apps'
                />
                <AppList
                    apps={available}
                    title='available apps'
                />
            </View>
        </View>
    );
}

export default Home;