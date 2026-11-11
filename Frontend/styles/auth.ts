import { StyleSheet } from 'react-native';
 
export const styles = StyleSheet.create({

  container: {
    marginTop: 50,
    marginBottom: 30,
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
  entrar: {
    alignSelf: 'center',
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

  safeArea: {
    flex: 1,
    backgroundColor: '#f5f8fc',
  },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 24,
  },
  hero: {
    marginBottom: 28,
  },
  eyebrow: {
    color: '#007bff',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 1,
    marginBottom: 10,
  },
  title: {
    color: '#000000',
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 40,
    marginBottom: 12,
  },
  description: {
    color: '#526581',
    fontSize: 17,
    lineHeight: 25,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginBottom: 24,
    padding: 20,
  },
  cardTitle: {
    color: '#172b4d',
    fontSize: 19,
    fontWeight: '700',
    marginBottom: 8,
  },
  cardText: {
    color: '#526581',
    fontSize: 15,
    lineHeight: 22,
  },
  termsLink: {
    alignSelf: 'center',
    color: '#007bff',
    fontSize: 15,
    marginTop: 30,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  backLink: {
    color: '#007bff',
    fontSize: 16,
    marginBottom: 28,
  },
  updated: {
    color: '#718096',
    fontSize: 14,
    marginBottom: 28,
  },
  section: {
    marginBottom: 22,
  },
  sectionTitle: {
    color: 'black',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  sectionText: {
    color: '#1d1c1c',
    fontSize: 16,
    lineHeight: 24,
  },
  contact: {
    borderTopColor: '#e2e8f0',
    borderTopWidth: 1,
    color: '#526581',
    fontSize: 15,
    lineHeight: 22,
    marginTop: 8,
    paddingTop: 20,
  },
});