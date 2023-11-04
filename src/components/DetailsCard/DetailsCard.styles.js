import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#eceef1",
        margin:5,
        borderRadius:3,
    },
    image:{
        width:400,
        minHeight:200,
        resizeMode:"cover",
        borderRadius:10,
    },
    meal:{
        fontSize:25,
        color:"#cb2424",
        fontWeight:"bold",
    },
    area:{
        fontSize:25,
        color:"#cb2424",
        fontWeight:"normal",

    },
    desc:{
        fontStyle:"italic",
        fontWeight:"bold",
    },
    btn:{
        backgroundColor:"red",
        width:220,
        height:40,
        marginLeft:100,
        marginTop:20,
        borderRadius:10,
        justifyContent:"center"
    },
    btn_text:{
        color:"white",
        fontWeight:"bold",
        justifyContent:"center",
        textAlign:"center",

    },
    strech:{
        borderBottomColor: 'gray', 
        borderBottomWidth: 1,

    }
})