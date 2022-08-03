import { Pressable, StyleSheet } from "react-native";
import { fontSize, spacing } from "../../../../constants/Styles";
import { Snippet } from "../../../../constants/types/Youtube";
import YoutubeVideoInfos from "../YoutubeVideoInfos";

const CardItem = ({
    snippet,
    submit
} : {
    snippet?: Snippet | null
    submit?: () => void
}) => {

    return (
        <Pressable
            onPress={submit}
            style={{
                width: snippet?.image?.medium?.width || 248,
                marginHorizontal: spacing(0),
                marginVertical: spacing(1),
                height: snippet?.image?.medium?.width || 230
            }}
        >
            <img
                src={snippet?.image?.medium?.url || 'image-src'}
                alt={snippet?.image?.medium?.alt || 'image-alt'}
                width={snippet?.image?.medium?.width || 248}
            />
            <YoutubeVideoInfos snippet={snippet} />
        </Pressable>
    )
};

export default CardItem;