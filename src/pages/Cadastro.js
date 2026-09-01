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
import { styles } from './CadastroStyle';

export default function CadastroScreen({ navigation }) {
const [email, setEmail] = useState('');
const [senha, setSenha] = useState('');
const [confirmarSenha, setConfirmarSenha] = useState('');

const [erros, setErros] = useState({});

function validarCadastro() {
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

// Validação da confirmação da senha
if (confirmarSenha.trim() === '') {
  novosErros.confirmarSenha = 'Confirme sua senha.';
} else if (confirmarSenha !== senha) {
  novosErros.confirmarSenha = 'As senhas não são iguais.';
}

setErros(novosErros);

// Se não tiver nenhum erro
if (Object.keys(novosErros).length === 0) {
  alert('Cadastro realizado com sucesso!');
  
  // Se futuramente quiser ir para o Login:
  // navigation.navigate('Login');
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
        Cadastro
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

        {/* Confirmar senha */}
        <View style={styles.fieldContainer}>
          <View
            style={[
              styles.inputWrapper,
              erros.confirmarSenha && styles.inputError,
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
              placeholder="Confirme sua senha"
              placeholderTextColor="#727272"
              value={confirmarSenha}
              onChangeText={(texto) => {
                setConfirmarSenha(texto);
                setErros({ ...erros, confirmarSenha: '' });
              }}
              secureTextEntry
            />
          </View>

          {erros.confirmarSenha ? (
            <Text style={styles.errorText}>
              {erros.confirmarSenha}
            </Text>
          ) : null}
        </View>

      </View>

      {/* Botão Cadastrar */}
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={validarCadastro}
      >
        <Text style={styles.buttonText}>
          Cadastrar
        </Text>
      </TouchableOpacity>

      {/* Voltar para Login */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.linkText}>
          Já tem conta?{' '}

          <Text style={styles.linkBold}>
            Entrar
          </Text>
        </Text>
      </TouchableOpacity>

    </View>
  </KeyboardAvoidingView>
</ImageBackground>

);
}