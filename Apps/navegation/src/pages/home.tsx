import { View, Text, Pressable } from "react-native";
import { styles } from "../style/styles";
import { useNavigation } from "@react-navigation/native";
export const HomePage = () => {
  const navigation = useNavigation<any>()
  const handleNavigation = () => {
    navigation.navigate("exercicio");
  }
  return (
    <View style={styles.container}>
      <Pressable 
      style={styles.btn}
      onPress={() => handleNavigation()}
      >
        <Text style={styles.btnText}>Fazer um bolo</Text>
      </Pressable>
    </View>
  );
};
