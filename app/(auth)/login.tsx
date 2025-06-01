import { useState } from 'react';
import { View, Text, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useAuth } from '../../auth-context';
import { useRouter } from 'expo-router';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';

export default function LoginScreen() {
  const { setIsLoggedIn } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    setError('');
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    // TODO: Replace with real API call
    setIsLoggedIn(true);
    console.log('Login successful');
    router.replace('/(tabs)/home' as any);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={64}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', padding: 24 }} keyboardShouldPersistTaps="handled">
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 24 }}>Login</Text>
        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="Enter your email"
          style={{ width: 300 }}
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholder="Enter your password"
          style={{ width: 300 }}
        />
        {error ? <Text style={{ color: 'red', marginBottom: 8 }}>{error}</Text> : null}
        <Button
          title="Log In"
          variant="primary"
          onPress={handleLogin}
          style={{ width: 200, marginTop: 16 }}
        />
        <Button
          title="Sign Up"
          variant="secondary"
          onPress={() => router.push('/(auth)/signup')}
          style={{ width: 200, marginTop: 16 }}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
} 