import { Dimensions, StyleSheet } from "react-native";
import {COLORS, SIZES} from "../constants/index";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    textStyle: {
        fontFamily: "bold",
        fontSize: 40
    },
    headerContainer: {
        flexDirection: "column",
        alignItems: "center",
        marginTop: 40
    },
    headerStyle: {
        marginHorizontal: 22,
        fontSize: SIZES.xxLarge,
        color: 'green',
        fontWeight: 'bold'
    },
    buttonStyle: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        width: screenWidth / 2
    },
    buttonText: {
        fontWeight: 'bold',
        color: 'white'
    },
    buttonContainer: {
        flexDirection: "column",
        alignItems: 'center',
        paddingTop: screenHeight - (screenHeight / 3)
    }
})

export default styles