import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import {COLORS, SIZES} from "../constants/index";

const styles = StyleSheet.create({
    textStyle: {
        fontFamily: "bold",
        fontSize: 40
    },
    appBarWrapper: {
        marginHorizontal: 22,
        marginTop: SIZES.small
    },
    appBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
        marginTop: 60,
    },
    title: {
        fontFamily: 'Times New Roman',
        fontSize: 38,
        marginTop: 150,
        alignSelf: "center",
        marginBottom: 20,
        color: '#197FF6',
    },
    pokemonContainer: { marginTop: 10 },
    pokemonTitle: {
        fontFamily: 'Times New Roman',
        fontSize: 25,
        alignSelf: "center",
        marginTop: 10,
        color: '#197FF6',
    },
    pokemonSprite: {
        width: 200,
        height: 200,
        alignSelf: "center",
    },
})

export default styles