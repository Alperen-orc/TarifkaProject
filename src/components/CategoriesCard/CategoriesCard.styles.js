import { StyleSheet } from "react-native";

export default StyleSheet.create({
    main_container:{
        backgroundColor: 'orange',
    },
    container:{
        backgroundColor:'white',
        borderColor:'gray',
        borderWidth:1.5,
        borderRadius: 36,
        margin: 8,
        padding: 6,
        borderTopRightRadius: 7,
        borderBottomRightRadius: 7,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image:{
        width: 100,
        minHeight: 100,
        borderRadius: 100,
        position: 'relative',
        resizeMode:"contain",
    },
    text:{
        fontWeight:"normal",
        fontSize: 20,
        paddingLeft: 20,
    },
}) 