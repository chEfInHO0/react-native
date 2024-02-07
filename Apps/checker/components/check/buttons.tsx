import { Button, TouchableHighlight, TouchableOpacity, StyleSheet, Text , View, Alert} from "react-native";


const handleButton = () => {
    Alert.alert("Isso é um botão")
}

export const Buttons = () => {
    return (
        <View>
            <Button title="Aperta aqui" onPress={handleButton}></Button>
            <TouchableHighlight onPress={handleButton} underlayColor="red">
            <Text style={styles.touch}>Toque</Text>
            </TouchableHighlight>

            <TouchableOpacity>
            <Text style={styles.touch}>Toque Aqui</Text>
            </TouchableOpacity>
        </View>

    )
}


const styles = StyleSheet.create({
touch:{
    textAlign:"center",
    margin:10,
    padding:8
  }
})