import { View, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { Button } from '../../components/Button';

export default function OnboardingScreen() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Onboarding Screen</Text>
      <Button title="Get Started" variant="primary" onPress={() => router.push('/(auth)/signup')} style={{ width: 200, marginTop: 16 }} />
    </View>
  );
} 