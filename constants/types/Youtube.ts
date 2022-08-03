export const smallImageBaseSample = {
    url: "https://i.ytimg.com/vi/8s7epw_TIqQ/mqdefault.jpg",
    alt: "Image",
    width: 120,
    height: 90
}
export const defaultImageBaseSample = {
    url: "https://i.ytimg.com/vi/8s7epw_TIqQ/mqdefault.jpg",
    alt: "Image",
    width: 248,
    height: 140
}
export const mediumImageBaseSample = {
    url: "https://i.ytimg.com/vi/8s7epw_TIqQ/mqdefault.jpg",
    alt: "Image",
    width: 320,
    height: 180
}
export const largeImageBaseSample = {
    url: "https://i.ytimg.com/vi/8s7epw_TIqQ/mqdefault.jpg",
    alt: "Image",
    width: 360,
    height: 202
}

export const tagsBaseSample = [
    "totoband",
    "albumterbaiktoto",
    "totobestalbum",
    "totomusicplaylist",
    "slowrockbaratterbaik",
    "laguslowrockbarattahun80",
    "laguslowrockbarattahun90",
    "kumpulanlaguslowrockterbaik",
    "kumpulanlagubaratlama",
    "kompilasilaguslowrock",
    "classicrockmusic",
    "bestslowrockmusic",
    "kumpulanalbumslowrockbarat",
    "slowrockballadsof80s",
    "slowrockbarat90an",
    "goldenmemoriesslowrock",
    "bestslowrocksong",
    "lagutotoafrica",
    "totogreatesthitsfullalbum",
    "best80srockplaylist",
    "classicrockgreatesthits70s80s90s",
    "totofullalbum",
    "toto99",
    "beautifullovesongs",
    "bestclassicrock"
]

export const snippetBaseSample = {
    publishedAt: "2021-01-06T10:57:48Z",
    channelId: "UCJWBa1wCfo0F6jbvIIqFChA",
    title: "Toto Greatest Hits Playlist  - Toto Best Album  ( HQ )",
    description: "Toto Greatest Hits Playlist - Toto Best Album ( HQ ) ▻ None of these images, music & video clips were created/owned by us.",
    tags: tagsBaseSample,
    image: {
        small: smallImageBaseSample,
        default: defaultImageBaseSample,
        medium: mediumImageBaseSample,
        large: largeImageBaseSample,
    },
    channelTitle: "Ande Entertainment"
}

export const statisticsBaseSample = {
    viewCount: 0,
    likeCount: 0,
    favoriteCount: 0,
    commentCount: 0
}

export const YoutubeSearchVideoBaseSample = {
    id: "8s7epw_TIqQ",
    snippet: snippetBaseSample
}

export const YoutubeVideoBaseSample = {
    id: "8s7epw_TIqQ",
    snippet: snippetBaseSample,
    statistics: statisticsBaseSample
}

export interface YoutubeVideoImage {
    url?: string | null;
    alt?: string | null;
    width?: number | null;
    height?: number | null;
}

export interface YoutubeSearchVideo {
    id: string;
    snippet?: Snippet | null;
}

export interface Snippet {
    publishedAt?: string | null;
    channelId?: string | null;
    title?: string | null;
    description?: string | null;
    tags?: string[] | null,
    image?: {
        small?: YoutubeVideoImage | null;
        default?: YoutubeVideoImage | null;
        medium?: YoutubeVideoImage | null;
        large?: YoutubeVideoImage | null;
    },
    channelTitle?: string | null;
}

export interface Statistics {
    viewCount?: number | null;
    likeCount?: number | null;
    dislikeCount?: number | null;
    commentCount?: number | null;
}

export interface YoutubeVideo {
    id: string;
    snippet: Snippet | null;
    statistics: Statistics | null;
}