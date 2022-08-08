import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { ActivityIndicator, StyleSheet, useWindowDimensions } from "react-native";
import CardItem from "../../../../components/Apps/Youtube/CardItem";
import ListItem from "../../../../components/Apps/Youtube/ListItem";
import CustomButton from "../../../../components/CustomButton";
import CustomInput from "../../../../components/CustomInput";
import Icon from "../../../../components/Icon/Icon";
import View from "../../../../components/View/View"
import globalStyles, { spacing } from "../../../../constants/Styles";
import { YoutubeSearchVideo, YoutubeSearchVideoBaseSample, YoutubeVideo } from "../../../../constants/types/Youtube";
import YoutubePlayer from "react-native-youtube-iframe";
import YoutubeVideoInfos from "../../../../components/Apps/Youtube/YoutubeVideoInfos";
import Text from "../../../../components/Text/Text";
import { YoutubeParams } from "../../../../constants/types/types";

const apiBaseUrl: string = "https://www.googleapis.com/youtube/v3/";
const api_key = '&key=AIzaSyDe3FB_VuadIsupoCQd3F1ErLOJNF5v88Y';

export const SearchInput = () => {
    const navigation = useNavigation()
    const { control, handleSubmit } = useForm();

    const search = (data: FieldValues) => {
        navigation.setParams({
            ...data
        });
    }

    return (
        <View style={inputStyles.search_input}>
            <CustomInput
                style={inputStyles.input}
                name={"query"}
                placeholder={'search'}
                control={control}
            >
                <CustomButton
                    style={inputStyles.btn}
                    value=""
                    submit={handleSubmit(search)}
                >
                    <Icon icon={faMagnifyingGlass} style={{ color: 'white' }} />
                </CustomButton>
            </CustomInput>
        </View>
    );
};

const Youtube = () => {
    const navigation = useNavigation()
    const { params } = useRoute()
    const [videos, setVideos] = useState<YoutubeSearchVideo[]>([]);
    const [watch, setWatch] = useState<YoutubeVideo | null>(null);
    const [query, setQuery] = useState<string | undefined | null>(null)
    const [playing, setPlaying] = useState<boolean>(false);
    const [sizes, setSizes] = useState<{ width: any, height: number }>({
        width: 320,
        height: 150
    })
    const { width } = useWindowDimensions();

    const discovery = async () => {
        try {
            {/* TODO */}
            setVideos([YoutubeSearchVideoBaseSample, YoutubeSearchVideoBaseSample, YoutubeSearchVideoBaseSample, YoutubeSearchVideoBaseSample, YoutubeSearchVideoBaseSample, YoutubeSearchVideoBaseSample, YoutubeSearchVideoBaseSample, YoutubeSearchVideoBaseSample, YoutubeSearchVideoBaseSample])
        } catch (error: any) {
            console.warn(error.message);
        }
    }

    useEffect(() => {
        discovery();
    }, []);

    useEffect(() => {
        if (!!!params) {
            setQuery(null);
            setWatch(null);
            discovery();
        }
        if (params?.query && query != params.query) {
            setQuery(params.query);
            setWatch(null);
        }
        sizeIt();
    }, [params, width]);

    const watching = async (video: string) => {
        try {
            navigation.setParams({ query: video })
            await fetch(`${apiBaseUrl}videos?part=snippet%2CcontentDetails%2Cstatistics&id=${video}${api_key}`)
                .then(res => res.json())
                .then(data => {
                    if (data != []) {
                        let stock: YoutubeVideo[] = [];
                        data.items.map((v: any) => {
                            stock.push({
                                id: v.id,
                                snippet: {
                                    ...v.snippet,
                                    image: {
                                        ...v.snippet.thumbnails,
                                    },
                                    channelTitle: v.snippet.channelTitle,
                                },
                                statistics: {
                                    ...v.statistics
                                }
                            })
                        });
                        setWatch(stock[0]);
                    }
                }).then(() => {
                    navigation.setParams({
                        watch: video
                    });
                });
        } catch (error: any) {
            console.warn(error.message);
        }
    }

    const sizeIt = () => {
        if (width <= 360) {
            setSizes({
                width: 320,
                height: 150
            });
        } else if (width <= 912) {
            setSizes({
                width: '100%',
                height: 400
            });
        } else {
            setSizes({
                width: 700,
                height: 400
            });
        }
    }

    return (
        <View style={[
            globalStyles.f1,
            globalStyles.p5,
            globalStyles.os,
            width > 912 ? globalStyles.fr : globalStyles.fc
        ]}>
            {!!watch &&
                <View style={
                    { maxWidth: sizes.width }
                }>
                    <YoutubePlayer
                        height={sizes.height}
                        width={sizes.width}
                        play={playing}
                        videoId={watch.id}
                    />
                    <YoutubeVideoInfos
                        snippet={watch?.snippet}
                        statistics={watch?.statistics}
                        description={true}
                    />
                    {watch?.snippet?.tags &&
                        <View style={[
                            globalStyles.f,
                            globalStyles.fr,
                            globalStyles.fs,
                            globalStyles.os,
                            globalStyles.br3,
                            { height: 35 }
                        ]}>
                            {watch.snippet.tags.map((tag: string, index: any) => {
                                return <Text style={styles.tag} key={index}>{tag}</Text>
                            })}
                        </View>
                    }
                </View>
            }
            <View style={[
                styles.videosWrapper,
                globalStyles.fw,
                globalStyles.os,
                !!watch ? globalStyles.f2 : globalStyles.f1
            ]}>
                {videos != [] ? (
                    videos.map((video: YoutubeSearchVideo, index: any) => {
                            return query == null
                            ? <CardItem key={index} {...video} submit={() => watching(video.id)} />
                            : width <= 360
                            ? <CardItem key={index} {...video} submit={() => watching(video.id)} />
                            : <ListItem key={index} {...video} submit={() => watching(video.id)} description={!!watch} />
                        }
                    )
                ) : (
                    watch == null && <ActivityIndicator size='large' style={{ margin: 'auto' }} />
                )}
            </View>
        </View>
    );
}

export default Youtube;

const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: 10,
        paddingVertical: 25,
        width: '100%',
    },
    tag: {
        backgroundColor: '#66f',
        border: '1px solid #66f',
        padding: spacing(1),
        color: 'white',
        height: 'fit-content',
        borderRadius: 25,
        minWidth: 'fit-content'
    },
    videosWrapper: {
        maxHeight: '100%',
        minHeight: 600,
        width: '100%',
        paddingVertical: spacing(2),
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

const inputStyles = StyleSheet.create({
    search_input: {
        flex: 1,
        margin: 'auto',
        maxWidth: 300,
        backgroundColor: 'inherit',
    },
    input: {
        width: '100%',
        backgroundColor: 'inherit',
        flex: 1,
        justifyContent: 'space-between',
        padding: 0,
        borderColor: 'grey',
        paddingRight: 0,
        paddingLeft: 0,
        display: 'flex',
        flexDirection: 'row'
    },
    btn: {
        color: 'white',
        margin: 0,
        maxWidth: 50
    }
});