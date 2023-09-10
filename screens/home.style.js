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
        fontSize: 38,
        alignSelf: "center",
        marginBottom: 20,
    },
    pokemonContainer: { backgroundColor: "lightgrey", marginTop: 10 },
    pokemonTitle: {
        fontSize: 32,
        alignSelf: "center",
        marginTop: 10,
    },
    pokemonSprite: {
        width: 200,
        height: 200,
        alignSelf: "center",
    },
})

export default styles