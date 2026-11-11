import {Text, View, Image, KeyboardAvoidingView, ScrollView, Platform} from 'react-native';
import {styles} from '@/styles/auth';
import { Input } from '@/components/Input';
import {Button} from '@/components/button';
import { SymbolView } from 'expo-symbols';
import { Link, router } from 'expo-router';
import React from 'react';

export default function Index() {

  const [email,setEmail] = React.useState("");
  let password : string = "";

  function handleLogin() {
    if(!email.trim() || !password.trim()) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    console.log("Email:", email);
    console.log("Senha:", password);
    alert(`Login realizado com sucesso!\nEmail: ${email}\nSenha: ${password}`);

  }




  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>

        <View style={styles.container}>
            <Image 
              source={require('@/assets/images/image.png')} 
              style={styles.image}
            />
            <Text style={styles.text}>{email == "" ? "Entrar" : "Bem-vindo"} 
              {email != "" ? "(" + email + ")" : ""}   
            </Text>
        </View>

        <View style={styles.entrada}>
            <Text style={styles.subheader}>Digite seu e-mail</Text>
            <Input placeholder="E-mail" keyboardType="email-address" onChangeText={(text) => setEmail(text)} />

            <Text style={styles.subheader}>Digite sua senha</Text>
            <Input placeholder="Senha" secureTextEntry={true} onChangeText={(text) => password = text} />

            
            <Button label="Entrar" 
              icon={
                <SymbolView
                    name={{ios: 'arrow.right.to.line', android: 'login', web:'login'}}
                    size={24}
                    tintColor="white"
                    style={{marginRight: 12, marginLeft: -12}}
                />  
              }  
            onPress={() => router.replace('/terms')} />
            

            <Text style={styles.footer}>Não tem conta? {" "}
              <Link style={styles.footerLink} href="/register">cadastre-se</Link>
            </Text>

            <Link href="/terms" style={styles.termsLink}>
              Consulte nossos termos de serviço
            </Link>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
    
  );
}