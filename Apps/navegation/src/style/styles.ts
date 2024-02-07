import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerList: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor:"#444",
    paddingTop:20
  },
  container:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"#444"
  },
  btn: {
    padding: 15,
    minWidth: 200,
    marginTop: 20,
    backgroundColor: "#333",
    borderRadius: 5,
  },
  btnText: {
    fontWeight: "bold",
    color: "#eee",
    fontSize: 18,
    textAlign: "center",
  },
  title:{
    fontWeight:'bold',
    fontSize:22,
    color:"#fff"
  },
  input:{
    padding:20,
    minWidth:240,
    fontSize:16,
    backgroundColor:"#ccc",
    borderRadius:4
  },
  headerBtn:{
    paddingHorizontal:30,
    paddingVertical:10,
    marginRight:8,

  },
  headerBtnText:{
    fontSize:18,
    color:"#fff"
  },
  headerRight:{
    paddingHorizontal:30,
    paddingVertical:10,
    marginRight:8,
    fontWeight:"bold",
    color:"#0061ff"
  },
  headerLeft:{
    paddingHorizontal:30,
    paddingVertical:10,
    marginRight:8,
    fontWeight:"bold"
  },
  lista:{
    marginTop:10,
    color:"#fff",
    fontSize:18
  },
  ingredients:{
    width:"90%"
  }
});
