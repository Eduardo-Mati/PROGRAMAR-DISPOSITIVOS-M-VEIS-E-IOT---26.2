import { StyleSheet } from 'react-native';
 
export const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    gap: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  entrada: {
    backgroundColor: '#ffffff',
    flex: 0.6,
    marginBottom: 20,
    paddingLeft: 40,
    paddingRight: 40,
    alignItems: 'flex-start',
    gap: 5,
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  subheader: {
    fontSize: 18,
    fontWeight: 'regular',
  },
  image: {
    width: 300,
    height: 250,
  },
  footer: {
    width: '100%',
    textAlign: 'center',
    fontSize: 16,
    marginTop: 10,
  },
  footerLink: {
    color: 'blue',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});