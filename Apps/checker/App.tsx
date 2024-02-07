import { Text, View, ScrollView, Image, TextInput } from "react-native";
import { useState } from "react";
import { styles } from "./style/styles";
import { LogoArea } from "./components/projeto 1/logoArea";
import { EmailInput,PasswordInput } from "./components/projeto 1/inputArea";
import { PressableArea } from "./components/projeto 1/pressableArea";
const App = () => {
  return (
    <ScrollView style={styles.safeArea}>
      <View style={styles.container}>
        <LogoArea />
        <EmailInput label={"Email"} placeholder="Digite seu email" />
        <PasswordInput label={"Senha"} placeholder="******" />
        <PressableArea
          forgetLink="Esqueci minha senha"
          loginBtn="Entrar"
          signupLink="Cadastre-se"
        />
      </View>
    </ScrollView>
  );
};

export default App;
