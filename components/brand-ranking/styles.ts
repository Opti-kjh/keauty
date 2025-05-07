import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  brandItem: {
    alignItems: 'center',
    marginRight: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 8,
    elevation: 2,
  },
  logo: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginBottom: 4,
  },
  rank: {
    fontWeight: 'bold',
    color: '#007AFF',
    fontSize: 14,
  },
  name: {
    fontSize: 13,
    color: '#222',
  },
});

export default styles; 