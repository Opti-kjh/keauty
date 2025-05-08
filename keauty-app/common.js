import { StyleSheet } from 'react-native';

const common = StyleSheet.create({
  flex1: { flex: 1 },
  row: { flexDirection: 'row' },
  center: { alignItems: 'center', justifyContent: 'center' },
  bold: { fontWeight: 'bold' },
  whiteBg: { backgroundColor: '#fff' },
  shadow: {
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  textDark: { color: '#222' },
  textGray: { color: '#666' },
  textPrimary: { color: '#2196f3' },
});

export default common; 