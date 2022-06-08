import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        backgroundColor: "#121212",
        flex: 1,
        // height: 400,
        alignItems: 'center',
        borderWidth: 5,
        // justifyContent: "space-between",
        // flexdirection:"row"
    },
    title: {
        color: "#ffd200",
        marginBottom: 20,
        marginTop: 20

    },
    horario: {
        color: "#fff",
        borderWidth: 1,
        flexDirection: "row",
        height: 80,
        alignItems: 'center',
        margin:10,
        borderColor:'#ffd200',
        padding:5,
        backgroundColor:'#242424'


    },
    hexagonOne: {
        top: -109,
        transform: [{ rotate: '265deg' }],
        left: -130,
    },

    hexagonTwo: {
        top: 360,
        transform: [{ rotate: '375deg' }],
        left: -270,
        width: 400,
        height: 350,
    },

    hexagonThree: {
        top: -79,
        transform: [{ rotate: '235deg' }],
        left: 290,
        width: 200,
        height: 150,
    },
    whiteFont: {
        color: '#fff'
    },
    timeAzul: {
        width: 60,
        height: 60

    },
    timeVermelho: {
        width: 60,
        height: 60
    },
    insideHorario: {
        flexDirection: 'column',
        color: '#fff',
        alignItems: 'center'
    },
    timeFonte:{
        fontSize:20,
    }







})