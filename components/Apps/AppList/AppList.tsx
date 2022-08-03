import { useContext, useEffect } from "react";
import globalStyles from "../../../constants/Styles";
import { App } from "../../../constants/types/Apps";
import { languageContext } from "../../../contexts/LanguageContext";
import { ThemeContext } from "../../../contexts/ThemeContext";
import Text from "../../Text/Text";
import View from "../../View/View";
import AppCard from "../AppCard/AppCard";

const AppList = ({ title, apps }: { title: string, apps: App[] }) => {
    const { t } = useContext(languageContext);

    return (
        <View style={[
            globalStyles.section,
            globalStyles.app_module
        ]}>
            <Text style={globalStyles.section_title}>{t(`apps.${title.toLowerCase()}.title`)}</Text>
            {apps.length !== 0 ? (
                <View style={[
                    globalStyles.apps_container,
                    globalStyles.fw,
                    globalStyles.fr,
                    globalStyles.fs
                ]}>
                    {apps.map((app: any, idx: number) => {
                        return <AppCard app={app} key={idx} />
                    })}
                </View>
            ) : (
                <Text style={{ margin: 'auto' }}>{t(`apps.${title.toLowerCase()}.warning`)}</Text>
            )}
        </View>
    );
}

export default AppList;