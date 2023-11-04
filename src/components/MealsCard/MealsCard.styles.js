import { StyleSheet } from "react-native";

export default StyleSheet.create({
    main_container:{
        flex:1,
        backgroundColor: 'orange',
    },
    container:{
        backgroundColor:'white',
        borderColor:'black',
        borderRadius: 30,
        margin: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image:{
        width: 400,
        minHeight: 200,
        borderRadius: 30,
        position:"relative",
        resizeMode:"stretch",
    },
    image_text: {
        color: 'white',
        fontSize: 18,
        lineHeight: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical:"bottom",
        backgroundColor: '#00000070',
      },
    image_view: {
        color: 'white',
        fontSize: 18,
        lineHeight: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical:"bottom",
        backgroundColor: '#00000070',
      },
    
});