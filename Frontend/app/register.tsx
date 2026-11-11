import {Text, View, Image, TextInput, Linking, KeyboardAvoidingView, ScrollView, Platform} from 'react-native';
import {styles} from '@/styles/auth';
import { Input } from '@/components/Input';
import {Button} from '@/components/button';
import { SymbolView } from 'expo-symbols';
import { Link, router } from 'expo-router';

export default function Register() {
  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>

        <View style={styles.container}>
            <Image 
              source={require('@/assets/images/image.png')} 
              style={styles.image}
            />
            <Text style={styles.text}>Cadastro</Text>
        </View>

        <View style={styles.entrada}>
            <Text style={styles.subheader}>Digite seu nome</Text>
            <Input placeholder="Nome Completo" />
            <Text style={styles.subheader}>Digite seu e-mail</Text>
            <Input placeholder="E-mail" keyboardType="email-address" />
            <Text style={styles.subheader}>Digite sua senha</Text>
            <Input placeholder="Senha" secureTextEntry={true} />
            <Text style={styles.subheader}>Confirme sua senha</Text>
            <Input placeholder="Confirme a senha" secureTextEntry={true} />

            <Button label="Cadastrar" 
              icon={
                <SymbolView
                    name={{ios: 'arrow.right.to.line', android: 'login', web:'login'}}
                    size={24}
                    tintColor="white"
                    style={{marginRight: 12, marginLeft: -12}}
                />  
              }  
            onPress={() => router.replace('/') }/>
            

            <Text style={styles.footer}>Já possui conta? {" "}
              <Link style={styles.footerLink} href="/">Entrar</Link>
            </Text>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
    
  );
}