import React from 'react';
import { Text, View, TextInput } from 'react-native';

export default function Login() {
  return (
    <View>
      <Text>Login</Text>
      <View>
        <Text>Username or Email</Text>
        <TextInput></TextInput>
        <Text>Password</Text>
        <TextInput></TextInput>
      </View>
    </View>
  );
}


