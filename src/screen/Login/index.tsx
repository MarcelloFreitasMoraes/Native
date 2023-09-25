import React, { useState, useCallback } from "react";
import { Text, Button } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import * as S from "./styles";
import Logo from "../../global/assets/logo.png";
import theme from "../../styles/theme";

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, "Login">;

type Props = {
  navigation: LoginScreenNavigationProp;
};

export default function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string>("");

  const handleLogin = useCallback(async () => {
    try {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (email === "teste@teste.com" && password === "12345") {
            resolve({ success: true });
          } else {
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
  
  return (
    <S.ComeBack>
      <S.LogoContent>
      <S.Logo source={Logo} />
      </S.LogoContent>
      <Text style={{ color: 'red' }}>Login</Text>
      <S.InputComponent
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        placeholderTextColor={theme.colors.textOne}
      />
      <S.InputComponent
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
      {error ? <Text style={{ color: "red" }}>{error}</Text> : null}
    </S.ComeBack>
  );
}
