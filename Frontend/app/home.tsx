import { Link, router } from 'expo-router';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button } from '@/components/button';
import {styles} from '@/styles/auth';

export default function Home() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.hero}>
          <Text style={styles.eyebrow}>BEM-VINDO</Text>
          <Text style={styles.title}>Tudo pronto para começar</Text>
          <Text style={styles.description}>
            Organize sua rotina de forma simples, rápida e segura.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Seu espaço em um só lugar</Text>
          <Text style={styles.cardText}>
            Acesse seus recursos e acompanhe suas atividades com praticidade.
          </Text>
        </View>

        <Button label="Voltar para o login" onPress={() => router.replace('/')} />
        
      </ScrollView>
    </SafeAreaView>
  );
}
