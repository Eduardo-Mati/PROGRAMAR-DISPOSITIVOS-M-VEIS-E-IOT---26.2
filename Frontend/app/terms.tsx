import { Link, router } from 'expo-router';
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { styles } from '@/styles/auth';

const sections = [
  {
    title: '1. Aceitação dos termos',
    text: 'Ao utilizar este aplicativo, você declara que leu e concorda com estes Termos de Serviço.',
  },
  {
    title: '2. Uso do aplicativo',
    text: 'O aplicativo deve ser utilizado de maneira responsável e de acordo com a legislação aplicável. Não é permitido tentar acessar contas, dados ou recursos de outros usuários.',
  },
  {
    title: '3. Conta do usuário',
    text: 'Você é responsável por manter seus dados de acesso seguros e por todas as atividades realizadas com sua conta.',
  },
  {
    title: '4. Privacidade',
    text: 'Tratamos seus dados de acordo com nossa política de privacidade e utilizamos apenas as informações necessárias para oferecer o serviço.',
  },
  {
    title: '5. Alterações',
    text: 'Estes termos podem ser atualizados para refletir melhorias no aplicativo ou mudanças legais. A versão mais recente estará sempre disponível nesta página.',
  },
];

export default function Terms() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content}>
        <Link href="/" style={styles.backLink}>
          ← Voltar
        </Link>
        <Text style={styles.title}>Termos de Serviço</Text>
        <Text style={styles.updated}>Última atualização: 10 de novembro de 2026</Text>

        {sections.map((section) => (
          <View key={section.title} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <Text style={styles.sectionText}>{section.text}</Text>
          </View>
        ))}

        <Button
          title="Entrar"
          onPress={() => router.replace('/home')}
        />
          
        <Text style={styles.contact}>
          Em caso de dúvidas, entre em contato com a equipe responsável pelo aplicativo.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
