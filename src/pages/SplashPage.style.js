import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.65)', // Escurece a imagem de fundo
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },

  card: {
    width: '100%',
    maxWidth: 320,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    paddingVertical: 32,
    paddingHorizontal: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 10,
  },

  title: {
    fontSize: 26,
    fontWeight: '800',
    color: '#0F172A',
    marginBottom: 24,
    textAlign: 'center',
  },

  logo: {
    width: 100,
    height: 100,
    marginBottom: 24,
  },

  divider: {
    width: '80%',
    height: 3,
    backgroundColor: '#E2E8F0',
    borderRadius: 2,
  },

  footerText: {
    position: 'absolute',
    bottom: 30,
    color: '#94A3B8',
    fontSize: 12,
    fontWeight: '500',
  },
  // ... mantenha os estilos anteriores e adicione estes:

  button: {
    width: '100%',
    height: 48,
    backgroundColor: '#03BFB5',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#03BFB5',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
});