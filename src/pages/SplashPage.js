import React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { styles } from './SplashPage.style';

export default function SplashScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('../../assets/12.jpg')} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        {/* Card Central */}
        <View style={styles.card}>
          <Text style={styles.title}>MercedesZone</Text>
          
          <Image
            source={require('../../assets/mercedes-logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />

          <View style={styles.divider} />

        
          <TouchableOpacity 
            style={styles.button}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Login')} 
          >
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>

        {/* Rodapé */}
        <Text style={styles.footerText}>© 2026 MotoApp</Text>
      </View>
    </ImageBackground>
  );
}