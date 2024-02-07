import {StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    screen:{
        backgroundColor:"#555",
        flex:1
    },
    safeArea:{
        marginTop:StatusBar.currentHeight,
    },
    movieTitle:{
        fontSize:22,
        fontWeight:"bold",
        textAlign:"center",
        padding:15,
        marginBottom:15
    },
    movieBanner:{
        width:320,
        height:500,
        borderRadius:10
        
    },
    moviePlacer:{
       alignItems:"center"
    },
    spacer:{
        marginBottom:20,
        padding:20,
        maxHeight:"80%"
    },
    label:{
        color:"#fff",
        fontSize:15,
        fontWeight:"bold",
        marginLeft:"5%",
        padding:10

    },
    input:{
        backgroundColor:"#ccc",
        width:"90%",
        alignSelf:"center",
        height:40,
        padding:5
    },
    sendButton:{
        backgroundColor:"orange",
        padding:20,
        width:"60%",
        alignSelf:"center",
        marginTop:10,
        borderRadius:10
    },
    sendButtonText:{
        textAlign:"center",
        color:"#fff",
        fontWeight:"bold"
    },
    creator:{
        textAlign:"center",
        padding:20,
        fontSize:30,
        color:"orange",
        fontWeight:"bold"
    }

})