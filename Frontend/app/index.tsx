import {Text, View, Image, TextInput, Linking, Button} from 'react-native';
import {styles} from '@/styles/auth';
import { Input } from '@/components/Input';

export default function Index() {
  return (
    <View>

        <View style={styles.container}>
            <Image source={require('@/assets/logo.png')} style={styles.image} />

        </View>

        <View style={styles.entrada}>
            <Text style={styles.subheader}>Digite seu login</Text>
            <Input placeholder="E-mail" keyboardType="email-address" />

            <Text style={styles.subheader}>Digite sua senha</Text>
            <Input placeholder="Senha" secureTextEntry={true} />

            <Button title="Entrar" onPress={() => Linking.openURL('https://example.com')} />
            <Text style={styles.footer}>Não tem conta? {" "}
                cadastre-se</Text>

        </View>
    </View>
  );
}