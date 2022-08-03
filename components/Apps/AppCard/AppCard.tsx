import { useContext } from "react";
import globalStyles from "../../../constants/Styles";
import { App } from "../../../constants/types/Apps";
import { UserContext } from "../../../contexts/UserContext";
import CustomButton from "../../CustomButton";
import Icon from "../../Icon/Icon";

const AppCard = ({ app }: { app: App }) => {
    const { keepInTouch } = useContext(UserContext);

    return (
        <CustomButton
            value=""
            submit={() => keepInTouch(app.location, app.color)}
            style={[
                globalStyles.app_card,
                { borderColor: app.color, boxShadow: `0 4px 8px 0 ${app.color}` }
            ]}
            type='tertiary'
        >
            <Icon size={50} icon={app.icon} style={{ color: app.color }} />
        </CustomButton>
    );
}

export default AppCard;