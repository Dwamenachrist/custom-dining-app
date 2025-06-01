import { forwardRef } from 'react';
import { TextInput as RNTextInput, TextInputProps, View, Text } from 'react-native';

type Props = TextInputProps & {
  label?: string;
  error?: string;
};

export const TextInput = forwardRef<RNTextInput, Props>(
  ({ label, error, style, ...props }, ref) => (
    <View style={{ marginBottom: 16, width: '100%' }}>
      {label && <Text style={{ marginBottom: 4, fontWeight: 'bold' }}>{label}</Text>}
      <RNTextInput
        ref={ref}
        style={[
          {
            borderWidth: 1,
            borderColor: error ? 'red' : '#ccc',
            borderRadius: 8,
            padding: 12,
            fontSize: 16,
            backgroundColor: '#fff',
          },
          style,
        ]}
        {...props}
      />
      {error && <Text style={{ color: 'red', marginTop: 4 }}>{error}</Text>}
    </View>
  )
);

TextInput.displayName = 'TextInput'; 