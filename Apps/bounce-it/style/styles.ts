import { StyleSheet, StatusBar } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor:"#444",
    flex:1
  },
  safeArea:{
    alignItems:"center",
    marginTop: StatusBar.currentHeight,
    width:"100%",
  },
  main:{
    flex:1
  },
  footer:{
    width:"100%",
    flex:.25,
    backgroundColor:"#222",
    flexDirection:"row"

  },
  info:{
    width:"25%",
    marginHorizontal:"10%",
    marginVertical:"12.5%"
  },
  infoItem:{
    color:"#fff"
  },
  force:{
    marginVertical:"5%",
    padding:50,
    backgroundColor:"#0061ff",
    borderRadius:10
  },
  forceText:{
    color:"#fff"
  }
});
