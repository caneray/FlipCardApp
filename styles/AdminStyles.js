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
    inputGuncelle:{
        paddingLeft: 22,
        borderWidth: 2,
        marginVertical: 8,
        borderRadius: 11,
        width: 281,
        height: 54,
        borderColor: "#AC92EC",
        alignItems: "center", 
        justifyContent: 'center',
        fontSize: 16,
        fontFamily: 'Montserrat-Medium',
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
    guncelleButton: {
        width : 153,
        height: 38,
        borderRadius: 20,
        backgroundColor: '#AC92EC',
        alignItems: "center", 
        justifyContent: 'center',
        marginTop: 20 
    },
    dropdownTextStyles: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 16,
        color: '#000000'
    },
    boxStyles: {
        borderColor: '#AC92EC',
        borderWidth: 2,
        width: 281,
        //marginBottom: 40 
    },
    dropdownStyles: {
        borderColor: '#AC92EC',
        borderWidth: 2,
        width:281
    },
    inputStyles: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 16,
        color: '#000000',
    },
});