import { faEye, faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { StyleSheet, useWindowDimensions } from "react-native";
import globalStyles, { blueEye, fontSize, greenLike, redDislike, spacing } from "../../../../constants/Styles";
import { Snippet, Statistics } from "../../../../constants/types/Youtube";
import Icon from "../../../Icon/Icon";
import Text from "../../../Text/Text";
import View from "../../../View/View";

const YoutubeVideoInfos = ({
    snippet,
    statistics,
    description = false
} : {
    snippet?: Snippet | null,
    statistics?: Statistics | null,
    description?: boolean | null
}) => {
    const { width } = useWindowDimensions();
    return (
        <View style={[
            styles.infos,
            globalStyles.f1,
            description ? globalStyles.fsa : globalStyles.fs,
            { width: '100%', minWidth: 250 }
        ]}>
            <Text style={[
                    description ? globalStyles.fontS6 : globalStyles.fontS4,
                    width < 600 ? globalStyles.fontS2 : globalStyles.fontS4,
                    globalStyles.oh
                ]}>{snippet?.title}</Text>
            <View style={[
                globalStyles.f,
                globalStyles.fr,
                globalStyles.fs
            ]}>
                <Text style={[
                    globalStyles.oh,
                    globalStyles.fs
                ]}>{snippet?.channelTitle}</Text>
                {statistics && (
                    <>
                        {statistics?.likeCount &&
                            <View style={[
                                globalStyles.f,
                                globalStyles.fr,
                            ]}>
                                <Text style={{ color: greenLike }}> - </Text>
                                <Text style={{ color: greenLike }}>{statistics?.likeCount?.toString()}</Text>
                                <Icon style={{ color: greenLike }} icon={faThumbsUp} />
                            </View>
                        }
                        {statistics?.dislikeCount &&
                            <View style={[
                                globalStyles.f,
                                globalStyles.fr,
                            ]}>
                                <Text style={{ color: redDislike }}> - </Text>
                                <Text style={{ color: redDislike }}>{statistics?.dislikeCount?.toString()}</Text>
                                <Icon style={{ color: redDislike }} icon={faThumbsDown} />
                            </View>
                        }
                        {statistics?.viewCount &&
                            <View style={[
                                globalStyles.f,
                                globalStyles.fr,
                            ]}>
                                <Text style={{ color: blueEye }}> - </Text>
                                <Text style={{ color: blueEye }}>{statistics?.viewCount?.toString()}</Text>
                                <Icon style={{ color: blueEye }} icon={faEye} />
                            </View>
                        }
                    </>
                )}
            </View>
            {description && <Text style={styles.description}>{snippet?.description}</Text>}
        </View>

    );
};

export default YoutubeVideoInfos;

const styles = StyleSheet.create({
    infos: {
        padding: spacing(2),
        maxHeight: 'fit-content',
        maxWidth: '100%',
    },
    channelTitle: {
        overflow: 'hidden'
    },
    likes: {
        color: 'green',
    },
    dislikes: {
        color: 'red',
    },
    views: {
        color: 'blue',
    },
    description: {
        overflow: 'hidden'
    }
});