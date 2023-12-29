import { StyleSheet, Dimensions } from "react-native";

const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    k1: {
        width:225,
        height:130,
        backgroundColor: '#8CC152',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
    },
    k2: {
        width:225,
        height:130,
        backgroundColor: '#AC92EC',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
    },
    k3: {
        width:225,
        height:130,
        backgroundColor: '#4FC1E9',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
    },
    inputEkle: {
        padding: 8,
        borderWidth: 2,
        marginVertical: 8,
        borderRadius: 20,
        width: 281,
        height: 54,
        borderColor: "#8CC152",
        alignItems: "center", 
    justifyContent: 'center',
    },
    container: {
        paddingBottom: 200,
        //flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: windowHeight
    },
    kaydetButton: {
        width : 153,
        height: 38,
        borderRadius: 20,
        backgroundColor: '#8CC152',
        alignItems: "center", 
        justifyContent: 'center',
    },
});