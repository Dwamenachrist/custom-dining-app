import { View, Text } from 'react-native';
import { Button } from '../../components/Button';
import { useRouter } from 'expo-router';

export default function AuthIndex() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 24 }}>Welcome to Auth</Text>
      <Button
        title="Login"
        variant="primary"
        onPress={() => router.push('/(auth)/login')}
        style={{ width: 200, marginBottom: 16 }}
      />
      <Button
        title="Sign Up"
        variant="secondary"
        onPress={() => router.push('/(auth)/signup')}
        style={{ width: 200 }}
      />
    </View>
  );
} 