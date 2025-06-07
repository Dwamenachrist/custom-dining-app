import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, Platform, ScrollView, Image, TouchableOpacity, Switch, SafeAreaView, StatusBar} from 'react-native';
import { useAuth } from '../../auth-context';
import { useRouter } from 'expo-router';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';

export default function LoginScreen() {
  const { setIsLoggedIn } = useAuth();
  const router = useRouter();

  // State management for form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  // Handlers for button presses
  const handleLogin = () => {
    setError('');
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    console.log('Attempting login with:', { email, password, rememberMe });
    setIsLoggedIn(true);
    // The RootLayout will automatically redirect to the (tabs) stack.
  };

  const handleForgotPassword = () => {
    console.log('Forgot Password pressed');
  };

  const handleSocialLogin = (provider: 'google' | 'microsoft' | 'apple') => {
    console.log(`Login with ${provider}`);
  };

  const handleLanguageChange = () => {
    console.log('Language change pressed');
    // In a real app, this would open a modal or dropdown.
  };

  return (
    <SafeAreaView className="flex-1 bg-lightGray">
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'center',
            padding: 24,
          }}
          keyboardShouldPersistTaps="handled">
          
          {/* Logo and Welcome Text */}
          <View className="items-center mb-8">
            <Image
              source={require('../../assets/Logo.png')}
              className="w-24 h-24 mb-6"
              resizeMode="contain"
            />
            <Text className="text-3xl font-bold text-black">Welcome Back!</Text>
            <Text className="text-base text-darkGray mt-2">Login to continue using the app</Text>
          </View>

          {/* Form Inputs */}
          <TextInput
            placeholder="Email/Phone Number"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
            variant={error && !email ? 'error' : 'default'}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry // This enables the password visibility toggle
            variant={error && !password ? 'error' : 'default'}
          />

          {/* Remember Me & Forgot Password */}
          <View className="flex-row justify-between items-center my-2">
            <View className="flex-row items-center">
              <Switch
                trackColor={{ false: '#767577', true: colors.secondary }}
                thumbColor={rememberMe ? colors.primary : '#f4f3f4'}
                onValueChange={() => setRememberMe(previousState => !previousState)}
                value={rememberMe}
              />
              <Text className="text-darkGray ml-2">Remember me</Text>
            </View>
            <TouchableOpacity onPress={handleForgotPassword}>
              <Text className="font-semibold text-primary">Forgot Password?</Text>
            </TouchableOpacity>
          </View>

          {error ? <Text className="text-error text-center my-4">{error}</Text> : null}

          {/* Sign In Button */}
          <View className="mt-4">
            <Button title="Sign In" variant="primary" onPress={handleLogin} />
          </View>

          {/* 'Or Continue With' Divider */}
          <View className="flex-row items-center my-8">
            <View className="flex-1 h-px bg-gray" />
            <Text className="mx-4 text-gray">Or Continue With</Text>
            <View className="flex-1 h-px bg-gray" />
          </View>

          {/* Social Logins */}
          <View className="flex-row justify-center space-x-6">
            <TouchableOpacity onPress={() => handleSocialLogin('google')} className="p-3 border border-gray rounded-full">
              <FontAwesome name="google" size={24} color="#DB4437" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSocialLogin('microsoft')} className="p-3 border border-gray rounded-full">
              <FontAwesome name="windows" size={24} color="#0078D4" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSocialLogin('apple')} className="p-3 border border-gray rounded-full">
              <FontAwesome name="apple" size={24} color="#000000" />
            </TouchableOpacity>
          </View>

          {/* Create Account & Language Selector */}
          <View className="mt-12">
            <View className="flex-row justify-center mb-6">
              <Text className="text-darkGray">New User? </Text>
              <TouchableOpacity onPress={() => router.push('/(auth)/signup')}>
                <Text className="font-bold text-primary">Create an Account!</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={handleLanguageChange} className="flex-row self-center items-center">
                <Text className="text-darkGray">English</Text>
                <Ionicons name="chevron-down" size={16} color={colors.darkGray} />
            </TouchableOpacity>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}