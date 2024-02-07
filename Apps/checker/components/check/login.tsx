import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { useState } from "react";

type Props = {
  name: string;
  onChange: (n: string) => void;
};

type BtnProps = {
  name: string;
  nameField: () => void;
  clearField: () => void;
};

export const Login = ({ name, onChange }: Props) => {

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={name}
        onChangeText={(n) => onChange(n)}
      />
    </View>
  );
};

export const ButtonAction = ({ name, nameField, clearField }: BtnProps) => {
  return (
    <View>
      {name == "" && (
        <Button title="Cadastrar" onPress={() => nameField()}></Button>
      )}
      {name != "" && (
        <View>
          <Text style={styles.item}>Seja bem vindo(a) {name}</Text>
          <Button title={`Não sou ${name}`} onPress={() => clearField()}></Button>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    margin: 5,
    marginTop: "20%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 160,
    backgroundColor: "#ddd",
  },
  item: {
    minWidth: 120,
    textAlign: "center",
    padding: 5,
    margin: 3,
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "#aaa",
  },
  input: {
    backgroundColor: "#888",
    minWidth: 200,
    padding: 10,
    fontSize: 18,
  },
});
