import React, { useState } from "react";
import { View, Text, Pressable, Alert } from "react-native";
import { styles } from "../../style/styles";
type Props = {
  forgetLink: string;
  loginBtn?: string;
  signupLink?: string;
};

export const PressableArea = ({ forgetLink, loginBtn, signupLink }: Props) => {
  const [text, setText] = useState("");
  return (
    <>
      <Pressable style={styles.forgotPwd} 
      onPress={() => {Alert.alert("Esqueci minha senha")}}>
        <Text style={styles.forgotPwdText}>
            {forgetLink}
        </Text>
      </Pressable>
      <Pressable style={styles.loginBtn}
      onPress={() => {Alert.alert("Login")}}>
        <Text style={styles.loginText}>{loginBtn}</Text>
      </Pressable>
      <View style={styles.signUp}>
        <Text style={styles.signUpText}>
            Ainda não tem uma conta?
        </Text>
        <Pressable style={styles.signUpBtn} 
        onPress={() => {Alert.alert("Cadastro")}}>
            <Text style={styles.signUpBtnText}>
                {signupLink}
            </Text>
        </Pressable>
      </View>
    </>
    
  );
};
