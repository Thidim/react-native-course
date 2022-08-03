import { StyleSheet } from "react-native";

export const lighter = '#ffffff';
export const light = '#898989';
export const smoky = '#eaeaea';
export const smoke = '#2d2d2d';
export const standard = '#1e1e1e';
export const dark = '#0f0f0f';
export const greenLike = 'green';
export const redDislike = 'red';
export const blueEye = 'blue';

const primary = {
    backgroundColor: '#3B71F3',
    color: 'white',
    fontWeight: 'bold',
}

const sizes = new Map([
    [1, 9],
    [2, 12],
    [3, 14],
    [4, 16],
    [5, 18],
    [6, 20],
    [7, 24],
    [8, 28],
    [9, 36],
]);

const border = new Map([
    [1, 5],
    [2, 10],
    [3, 15],
    [4, 20],
    [5, 25],
]);

const spaces = new Map([
    [0, 'auto'],
    [1, '4px'],
    [2, '8px'],
    [3, '12px'],
    [4, '16px'],
    [5, '20px'],
    [6, '24px'],
    [7, '28px'],
    [8, '32px'],
    [9, '36px'],
]);

export const spacing = (n: number) => {
    return spaces.get(n);
}

export const radius = (n: number) => {
    return border.get(n);
}

export const fontSize = (n: number) => {
    return sizes.get(n);
}

const globalStyles: any = StyleSheet.create({
    primary,
    wrapper: {
        width: '100%'
    },
    inner: {
        height: '100%',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        margin: spacing(0),
        justifyContent: 'center',
        width: 300,
    },
    header_dark: {
        backgroundColor: standard,
        boxShadow: `${spacing(1)} ${spacing(1)} ${spacing(2)} 0 rgba(0,0,0,0.2)`
    },
    header_light: {
        backgroundColor: '#f4f4f4',
        boxShadow: `${spacing(1)} ${spacing(1)} ${spacing(2)} 0 rgba(0,0,0,0.2)`
    },
    modal_menu_dark: {
        backgroundColor: smoke,
        borderWidth: 1,
        border: 'solid ' + light
    },
    modal_menu_light: {
        backgroundColor: smoky
    },
    min: {
        width: 'fit-content'
    },
    half: {
        width: '50%',
    },
    full: {
        width: '100%',
    },
    view_dark: {
        backgroundColor: dark,
    },
    view_light: {
        backgroundColor: lighter,
    },
    to_dark: {
        borderWidth: 1,
        border: 'solid ' + light,
    },
    to_light: {
        borderWidth: 1,
        border: 'solid grey',
    },
    icon_dark: {
        color: light,
    },
    icon_light: {
        color: 'grey',
    },
    section: {
        width: '100%',
    },
    section_title: {
        fontSize: 50,
        fontWeight: 'bold',
        zIndex: 1,
        paddingHorizontal: spacing(2),
        paddingVertical: spacing(3),
        boxShadow: `${spacing(1)} ${spacing(1)} ${spacing(2)} 0 rgba(0,0,0,0.2)`
    },
    os: { overflow: 'scroll' },
    oh: { overflow: 'hidden' },
    f: { display: 'flex' },
    fr: { flexDirection: 'row' },
    fc: { flexDirection: 'column' },
    fw: { flexWrap: 'wrap' },
    fsc: { justifyContent: 'center' },
    fsb: { justifyContent: 'space-between' },
    fsa: { justifyContent: 'space-around' },
    fse: { justifyContent: 'space-evenly' },
    fs: { justifyContent: 'flex-start' },
    f1: { flex: 1 },
    f2: { flex: 2 },
    mx: { marginHorizontal: spacing(0) },
    mx1: { marginHorizontal: spacing(1) },
    mx2: { marginHorizontal: spacing(2) },
    mx3: { marginHorizontal: spacing(3) },
    mx4: { marginHorizontal: spacing(4) },
    mx5: { marginHorizontal: spacing(5) },
    my1: { marginVertical: spacing(1) },
    my2: { marginVertical: spacing(2) },
    my3: { marginVertical: spacing(3) },
    my4: { marginVertical: spacing(4) },
    my5: { marginVertical: spacing(5) },
    m: { margin: spacing(0) },
    m1: { margin: spacing(1) },
    m2: { margin: spacing(2) },
    m3: { margin: spacing(3) },
    m4: { margin: spacing(4) },
    m5: { margin: spacing(5) },
    px: { paddingHorizontal: spacing(0) },
    px1: { paddingHorizontal: spacing(1) },
    px2: { paddingHorizontal: spacing(2) },
    px3: { paddingHorizontal: spacing(3) },
    px4: { paddingHorizontal: spacing(4) },
    px5: { paddingHorizontal: spacing(5) },
    py1: { paddingVertical: spacing(1) },
    py2: { paddingVertical: spacing(2) },
    py3: { paddingVertical: spacing(3) },
    py4: { paddingVertical: spacing(4) },
    py5: { paddingVertical: spacing(5) },
    p: { padding: spacing(0) },
    p1: { padding: spacing(1) },
    p2: { padding: spacing(2) },
    p3: { padding: spacing(3) },
    p4: { padding: spacing(4) },
    p5: { padding: spacing(5) },
    br1: { borderRadius: radius(1) },
    br2: { borderRadius: radius(2) },
    br3: { borderRadius: radius(3) },
    br4: { borderRadius: radius(4) },
    br5: { borderRadius: radius(5) },
    fontS1: { fontSize: fontSize(1) },
    fontS2: { fontSize: fontSize(2) },
    fontS3: { fontSize: fontSize(3) },
    fontS4: { fontSize: fontSize(4) },
    fontS5: { fontSize: fontSize(5) },
    fontS6: { fontSize: fontSize(6) },
    fontS7: { fontSize: fontSize(7) },
    fontS8: { fontSize: fontSize(8) },
    fontS9: { fontSize: fontSize(9) },
    app_module: {
        height: '50%'
    },
    apps_container: {
        padding: spacing(4)
    },
    app_card: {
        padding: 10,
        borderWidth: 1,
        border: 'solid',
        borderRadius: 15,
        maxWidth: 'min-content',
        marginHorizontal: 10,
        marginVertical: 5
    }
});

export default globalStyles;