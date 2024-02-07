import { StyleSheet, StatusBar } from "react-native";

export const styles = StyleSheet.create({
    safeArea:{
        marginTop:StatusBar.currentHeight,
        alignItems:"center"
    }
})