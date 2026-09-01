import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
background: {
flex: 1,
},

container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
paddingHorizontal: 42,
backgroundColor: 'rgba(0, 0, 0, 0.5)',
},

card: {
width: '100%',
maxWidth: 345,
backgroundColor: '#FFFFFF',
borderRadius: 20,
paddingHorizontal: 24,
paddingTop: 22,
paddingBottom: 24,
alignItems: 'center',
borderWidth: 1,
borderColor: '#E5E7EB',

shadowColor: '#000',
shadowOffset: {
  width: 0,
  height: 10,
},
shadowOpacity: 0.08,
shadowRadius: 28,
elevation: 8,

},

title: {
fontSize: 28,
fontWeight: '700',
color: '#111827',
textAlign: 'center',
marginBottom: 18,
},

fields: {
width: '100%',
gap: 12,
marginBottom: 18,
},

fieldContainer: {
width: '100%',
},

inputWrapper: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#F9FAFB',
borderRadius: 16,
borderWidth: 1,
borderColor: '#E5E7EB',
paddingHorizontal: 14,
height: 56,
gap: 12,
},

inputError: {
borderColor: '#EF4444',
},

iconContainer: {
width: 36,
height: 36,
borderRadius: 10,
backgroundColor: '#F3F4F6',
justifyContent: 'center',
alignItems: 'center',
},

input: {
flex: 1,
fontSize: 15,
color: '#111827',

fontFamily:
  Platform.OS === 'ios'
    ? 'System'
    : 'sans-serif',

},

errorText: {
color: '#EF4444',
fontSize: 12,
marginTop: 5,
marginLeft: 5,
},

button: {
width: '100%',
height: 56,
backgroundColor: '#03BFB5',
borderRadius: 28,
justifyContent: 'center',
alignItems: 'center',
marginBottom: 18,

shadowColor: '#03BFB5',
shadowOffset: {
  width: 0,
  height: 10,
},
shadowOpacity: 0.2,
shadowRadius: 24,
elevation: 6,

},

buttonText: {
fontSize: 16,
fontWeight: '700',
color: '#FFFFFF',
},

linkText: {
fontSize: 13,
color: '#03BFB5',
fontWeight: '600',
textAlign: 'center',
},

linkBold: {
fontWeight: '700',
},
});