import { router } from 'expo-router';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth/cordova';
import React, { useState } from 'react';
import { SafeAreaView, Text } from "react-native";
import { auth } from '../FirebaseConfig';

const index = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password)
      if (user) router.replace('./(tabs)');
    } catch (error: any) {
      console.log(error)
      alert('Sign in failedL ' + error.message);
    }
  }
  
  const signUp = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password)
      if (user) router.replace('./(tabs)');
    } catch (error: any) {
      console.log(error)
      alert('Sign in failedL ' + error.message);
    }
  }

  return (
    <SafeAreaView>
      <Text>Login</Text>
    </SafeAreaView>
  )
}

export default index;