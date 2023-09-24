import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type User = { email: string } | null;

type AuthContextType = {
    user: User;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
  };
  
  const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>(null);

  useEffect(() => {
    // Verifique o AsyncStorage para ver se o usuário está logado ao carregar o aplicativo
    checkUserLoggedIn();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      // Simulação de autenticação bem-sucedida
      if (email === 'teste@teste.com' && password === '12345') {
        // Salve as informações de login no AsyncStorage
        await AsyncStorage.setItem('user', JSON.stringify({ email }));
        setUser({ email });
      } else {
        throw new Error('Credenciais inválidas');
      }
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    // Limpe as informações de login no AsyncStorage
    await AsyncStorage.removeItem('user');
    setUser(null);
  };

  const checkUserLoggedIn = async () => {
    try {
      // Verifique o AsyncStorage para ver se o usuário está logado
      const userString: any = await AsyncStorage.getItem('user');
      const user = JSON.parse(userString);
      if (user) {
        setUser(user);
      }
    } catch (error) {
      console.error('Erro ao verificar o status de login:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
