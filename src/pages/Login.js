import React, { useState } from 'react';

import {
View,
Text,
TextInput,
TouchableOpacity,
ImageBackground,
KeyboardAvoidingView,
Platform,
} from 'react-native';

import { Feather } from '@expo/vector-icons';
import { styles } from './LoginStyle';

export default function LoginScreen({ navigation }) {
const [email, setEmail] = useState('');
const [senha, setSenha] = useState('');

const [erros, setErros] = useState({});

function validarLogin() {
const novosErros = {};

// Validação do e-mail
if (email.trim() === '') {
  novosErros.email = 'O e-mail é obrigatório.';
} else if (!email.includes('@') || !email.includes('.')) {
  novosErros.email = 'Digite um e-mail válido.';
}

// Validação da senha
if (senha.trim() === '') {
  novosErros.senha = 'A senha é obrigatória.';
} else if (senha.length < 6) {
  novosErros.senha = 'A senha deve ter no mínimo 6 caracteres.';
}

setErros(novosErros);

// Se não houver erros
if (Object.keys(novosErros).length === 0) {
  alert('Login realizado com sucesso!');

  // Aqui futuramente você pode colocar:
  // navigation.navigate('Home');
}

}

return (
<ImageBackground
source={require('../../assets/12.jpg')}
style={styles.background}
resizeMode="cover"
>
<KeyboardAvoidingView
style={styles.container}
behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
>
<View style={styles.card}>

      <Text style={styles.title}>
        Bem-vindo!
      </Text>

      <View style={styles.fields}>

        {/* E-mail */}
        <View style={styles.fieldContainer}>
          <View
            style={[
              styles.inputWrapper,
              erros.email && styles.inputError,
            ]}
          >
            <View style={styles.iconContainer}>
              <Feather
                name="user"
                size={20}
                color="#727272"
              />
            </View>

            <TextInput
              style={styles.input}
              placeholder="E-mail"
              placeholderTextColor="#727272"
              value={email}
              onChangeText={(texto) => {
                setEmail(texto);
                setErros({ ...erros, email: '' });
              }}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          {erros.email ? (
            <Text style={styles.errorText}>
              {erros.email}
            </Text>
          ) : null}
        </View>

        {/* Senha */}
        <View style={styles.fieldContainer}>
          <View
            style={[
              styles.inputWrapper,
              erros.senha && styles.inputError,
            ]}
          >
            <View style={styles.iconContainer}>
              <Feather
                name="lock"
                size={20}
                color="#727272"
              />
            </View>

            <TextInput
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor="#727272"
              value={senha}
              onChangeText={(texto) => {
                setSenha(texto);
                setErros({ ...erros, senha: '' });
              }}
              secureTextEntry
            />
          </View>

          {erros.senha ? (
            <Text style={styles.errorText}>
              {erros.senha}
            </Text>
          ) : null}
        </View>

      </View>

      {/* Botão Entrar */}
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={validarLogin}
      >
        <Text style={styles.buttonText}>
          Entrar
        </Text>
      </TouchableOpacity>

      {/* Ir para Cadastro */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Cadastro')}
      >
        <Text style={styles.linkText}>
          Não tem conta?{' '}

          <Text style={styles.linkBold}>
            Cadastre-se
          </Text>
        </Text>
      </TouchableOpacity>

    </View>
  </KeyboardAvoidingView>
</ImageBackground>

);
}