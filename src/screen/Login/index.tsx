import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Para armazenar mensagens de erro

  const handleLogin = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === "teste@teste.com" && password === "12345") {
          resolve({ success: true });
        } else {
          reject({ success: false, message: "Credenciais inválidas" });
        }
      }, 1000);
    })
      .then((result) => {
        // Login bem-sucedido, navegue para a tela "Home"
        navigation.navigate("Home");
      })
      .catch((error) => {
        // Exibir mensagem de erro
        setError(error.message);
      });
  };

  return (
    <View>
      <Text style={{color:'red'}}>Login</Text>
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
