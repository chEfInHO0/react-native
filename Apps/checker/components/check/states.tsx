import { useState } from 'react'
import {View,Text,Pressable, StyleSheet} from 'react-native'

export const States = () => {
    const [name, setName] = useState("None");
    const [action, setAction] = useState("Login");

    const handleName = () => {
        (name == "None")? (setName("Luccas"),setAction("Logout")): (setName("None"),setAction("Login"))
    }
    return (
        <View >
            <Text style={styles.subtitle}>
                Meu nome é {name}
            </Text>
            <Pressable style={styles.touch} onPress={handleName}>
                <Text style={styles.subtitle}>{action}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    subtitle: {
      textAlign: "center",
      fontSize: 24,
      padding: 5,
      margin: 5,
    },
    touch:{
      textAlign:"center",
      margin:10,
      padding:8,
      backgroundColor:"lightblue"
    }
  });