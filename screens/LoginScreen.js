import React, {useState, useEffect} from 'react'
import {SafeAreaView, Text, TextInput, Pressable, View, KeyboardAvoidingView, ActivityIndicator, StyleSheet, Alert} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { auth } from '../firebase'
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'

const LoginScreen = () => {
  const [credential, setCredential] = useState({email: "", password: ""})
  const [loading, setLoading] = useState(false)

  const navigation = useNavigation()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(user){
        navigation.replace('Home')
      }

       if(!user) {
        setLoading(false)
       }
    })

    return () => {
      unsubscribe()
    }

  }, [])

  const login = () => {
    setLoading(true)
    if(credential.email == "" || credential.password == ""){
      Alert.alert(
        "Invalid Detail",
        "Kindly fill in all the details",
        [
          {
            text: 'Cancel',
            onPress: () => setLoading(false),
          },
          {
            text: 'OK',
            onPress: () => setLoading(false),
          }
        ],
        {cancelable: false}
      )
    }


    signInWithEmailAndPassword(auth, credential.email, credential.password).then((userCredential) => {
      console.log(userCredential)
      const user = userCredential.user
      console.log("User is : ", user)
    })
  }

  return (
    <SafeAreaView style={style.container}>
        {loading ? (
          <View style={style.loaderContainer}>
            <Text style={{marginRight: 10}}>Loading</Text>
            <ActivityIndicator size="large" color="red" />
          </View>
        ) : 
        (
          <KeyboardAvoidingView>
            <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 100}}>
              <Text style={{fontSize: 20, color: '#662d91', fontWeight: 'bold'}}>Sign In</Text>
              <Text style={{fontSize: 18, marginTop: 8, fontWeight: 600}}>Sign in to your account</Text>
          </View>
          <View style={{marginTop: 50}}>
              <View style={style.inputContainer}>
                <MaterialCommunityIcons name='email-outline' size={24} color='#000'/>
                <TextInput 
                    placeholder="Email"
                    value={credential.email}
                    onChangeText={(text) => setCredential({...credential, email: text})}
                    placeholderTextColor="#000"
                    style={style.Input}
                />
              </View>

              <View style={style.inputContainer}>
                <Ionicons name='key-outline' size={24} color='#000'/>
                <TextInput 
                    placeholder="Password"
                    value={credential.password}
                    onChangeText={(text) => setCredential({...credential, password: text})}
                    secureTextEntry
                    placeholderTextColor="#000"
                    style={style.Input}
                />
              </View>

              <Pressable onPress={login} style={style.loginButton}>
                <Text style={{textAlign: 'center', color: '#fff', fontSize: 18}}>Login</Text>
              </Pressable>

              <Pressable onPress={() => navigation.navigate('Register')} style={{marginTop: 20}}>
                <Text style={{fontSize: 18, color: 'gray', fontWeight: 500, textAlign: 'center'}}>Don't have an account? Sign Up</Text>
              </Pressable>
          </View>
          </KeyboardAvoidingView>
        )
        }
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10
  },
  loaderContainer: {
    flex: 1, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Input: {
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    marginLeft: 13,
    width: 300,
    marginVertical: 10,
  },
  loginButton: {
    width: 200,
    backgroundColor: "#318CE7",
    padding: 15,
    borderRadius: 7,
    marginTop: 50,
    marginLeft: "auto",
    marginRight: "auto",
  }
})

export default LoginScreen