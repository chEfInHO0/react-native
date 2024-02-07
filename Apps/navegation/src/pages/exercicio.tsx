import { useState, useLayoutEffect } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { styles } from "../style/styles";
import { FlatList } from "react-native-gesture-handler";
export const Ingredient = () => {
  const [ingredient, setIngredient] = useState("");
  const [ingredientList, setIngredientList] = useState<string[]>([]);
  const navigation = useNavigation<any>();
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "",
      headerLeft: () => <Text style={styles.headerLeft}>Exercicio</Text>,
      headerRight: () => (
        <Pressable onPress={() => handleAddIngredient()}>
          <Text style={styles.headerRight}>Adicionar</Text>
        </Pressable>
      ),
    });
  }, [ingredient]);
  const handleAddIngredient = () => {
    if (ingredient != "") {
      if (ingredientList.indexOf(ingredient) == -1) {
        setIngredientList((ingredientList) => [...ingredientList, ingredient]);
      } else {
        alert("Ingrediente ja foi colocado");
      }
    } else {
      alert("Campo Vazio");
    }
    setIngredient("");
  };
  return (
    <View style={styles.containerList}>
      <Text style={styles.title}>Faça um Bolo</Text>
      <Text>{ingredient}</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite um ingrediente"
        value={ingredient}
        onChangeText={(t) => setIngredient(t)}
      ></TextInput>
      <FlatList
      style={styles.ingredients} 
      data={ingredientList}
      renderItem={
        ({item}) => (
          <View style={styles.containerList}>
            <Text style={styles.lista}>{item}</Text>
          </View>
        )
      }></FlatList>
    </View>
  );
};
