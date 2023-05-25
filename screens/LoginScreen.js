import React, {useState, useEffect} from 'react'
import {SafeAreaView, Text, TextInput, Pressable, View, KeyboardAvoidingView, ActivityIndicator, StyleSheet} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

const LoginScreen = () => {
  return (
    <SafeAreaView>
        <Text>Hello World</Text>
    </SafeAreaView>
  )
}

export default LoginScreen