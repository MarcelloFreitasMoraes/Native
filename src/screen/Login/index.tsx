import React, { useState, useCallback } from "react";
import { Text, Button } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import * as S from "./styles";
import Logo from "../../global/assets/logo.png";
import theme from "../../styles/theme";
import InputComponent from "../../global/components/Input";

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Login"
>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

export default function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleLogin = useCallback(async () => {
    try {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (email === "teste@teste.com" && password === "12345") {
            console.log("if");
            resolve({ success: true });
          } else {
            console.log("else");
            reject({ success: false, message: "Credenciais inválidas" });
          }
        }, 1000);
      });

      navigation.navigate("Home");
      
    } catch (error) {
      if (typeof error === "string") {
        setError(error);
      } else {
        setError("Erro desconhecido");
      }
    }
  }, [email, password, navigation]);
  console.log(email, "email");
  console.log(password, "password");

  return (
    <S.ComeBack>
      <S.LogoContent>
        <S.Logo source={Logo} />
      </S.LogoContent>
      <InputComponent
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        placeholderTextColor={theme.colors.textOne}
      />
      <InputComponent
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <Button
        title="Login"
        onPress={handleLogin}
        disabled={!email || !password}
      />
      <Text style={{ color: "red", textAlign: "center" }}>Registrar</Text>
      {error ? <Text style={{ color: "red" }}>{error}</Text> : null}
    </S.ComeBack>
  );
}
