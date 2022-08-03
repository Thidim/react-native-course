import { Pressable, useWindowDimensions } from "react-native";
import globalStyles, {  } from "../../../../constants/Styles";
import { Snippet, snippetBaseSample } from "../../../../constants/types/Youtube";
import YoutubeVideoInfos from "../YoutubeVideoInfos";

const ListItem = (
{
    snippet = snippetBaseSample,
    description = false,
    submit
} : {
    snippet?: Snippet | null,
    description?: boolean | null
    submit?: () => void
}) => {
    const { width } = useWindowDimensions();

    console.log('ListItem', description, snippet?.description);

    return (
        <Pressable
            onPress={submit}
            style={[
                globalStyles.f,
                width > 360 ? globalStyles.fr : globalStyles.fc,
                globalStyles.fs,
                globalStyles.p2,
                { maxWidth: '100%', maxHeight: description ? snippet?.image?.default?.height : snippet?.image?.medium?.height }
            ]}
        >
            <img
                src={description ? snippet?.image?.default?.url || 'image-src' : snippet?.image?.medium?.url || 'image-src'}
                alt={description ? snippet?.image?.default?.alt || 'image-alt' : snippet?.image?.medium?.alt || 'image-alt'}
                width={description ? snippet?.image?.default?.width || 136 : snippet?.image?.medium?.width || 136}
            />
            <YoutubeVideoInfos snippet={snippet} description={!description} />
        </Pressable>
    );
}

export default ListItem;