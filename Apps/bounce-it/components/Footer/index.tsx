import { createContext, useContext, useEffect, useState } from "react";
import { View, Text, Pressable, Alert } from "react-native";
import { styles } from "../../style/styles";
import { ContextPos } from "../../context/GravityContext";
type Props = {
  ballForce: number;
  upForce: number;
  speed: number;
};

let timer: number;

export const Footer = () => {
  const pos = useContext(ContextPos);
  const [gravity, setGravity] = useState(0.98);
  const [upForce, setUpForce] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [posY, setPosY] = useState(0)
 
  useEffect(() => {
    const applyGravity = () => {
      let newUpForce = upForce - gravity;
      newUpForce = newUpForce < 0 ? 0 : newUpForce;
      setUpForce(newUpForce);

      let newSpeed = speed + (gravity - (newUpForce/2));
      setSpeed(newSpeed);

      let newPos = posY - newSpeed;
      if (newPos < 0){
        newPos = 0
        setSpeed(0)
      }
      setPosY(newPos)
      pos?.setPos(posY)
    };

    clearInterval(timer);
    timer = window.setTimeout(() => {
      applyGravity();
    }, 1);
  },[gravity,upForce,speed,pos?.pos]);

  const reset = () => {
    pos?.setPos(0);
    setUpForce(-0.98);
  };

  const handleForce = () => {
    setUpForce(7)
  }

  return (
    <View style={styles.footer}>
      <View style={styles.info}>
        <Text style={styles.infoItem}>UpForce: {upForce.toFixed(2)}</Text>
        <Text style={styles.infoItem}>Speed: {speed.toFixed(2)}</Text>
        <Text style={styles.infoItem}>PosY: {pos?.pos.toFixed(2)}</Text>
      </View>
      <Pressable
        style={styles.force}
        onPress={() => {
          handleForce();
        }}
      >
        <Text style={styles.forceText}>Aplicar Força</Text>
      </Pressable>
    </View>
  );
};
