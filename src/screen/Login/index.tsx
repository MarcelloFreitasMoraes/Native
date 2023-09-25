import React, { useState, useCallback } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack";

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
      const result = await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (email === "teste@teste.com" && password === "12345") {
            resolve({ success: true });
          } else {
            reject({ success: false, message: "Credenciais inválidas" });
          }
        }, 1000);
      });

      // Login bem-sucedido, navegue para a tela "Home"
      navigation.navigate("Home");
    } catch (error) {
      // Exibir mensagem de erro
      if (typeof error === "string") {
        setError(error);
      } else {
        setError("Erro desconhecido");
      }
    }
  }, [email, password, navigation]);

  return (
    <View>
      <Text style={{ color: 'red' }}>Login</Text>
      <TextInput
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
      {error ? <Text style={{ color: "red" }}>{error}</Text> : null}
    </View>
  );
}
