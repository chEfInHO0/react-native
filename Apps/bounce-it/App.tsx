import {Text, View } from "react-native";
import { styles } from "./style/styles";
import { Footer } from "./components/Footer";
import { Ball } from "./components/Ball";
import { useState } from "react";
import {ContextPos } from "./context/GravityContext";
export default function App() {
  const [posY, setPosY] = useState(0)
  return (
    <View style={styles.container}>
      <ContextPos.Provider value={{pos:posY,setPos:setPosY}}>
        <View style={[styles.safeArea, styles.main]}>
          <Ball/>
        </View>
        <Footer/>
      </ContextPos.Provider>
    </View>
  );
}
