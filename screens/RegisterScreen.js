import React, {useState} from 'react'
import {StyleSheet, SafeAreaView, Text, View, Pressable, TextInput, KeyboardAvoidingView,Alert, Button} from 'react-native'

import {Feather} from '@expo/vector-icons'
import {Ionicons} from '@expo/vector-icons'
import {MaterialCommunityIcons} from '@expo/vector-icons'

import { useNavigation } from '@react-navigation/native'

import {auth, db} from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import {doc, getDoc} from 'firebase/firestore'


const RegisterScreen = () => {
    const [credential, setCredential] = useState({
        email: "",
        password: "",
        phone: ""
    })

    const register = () => {
        if(credential.email == "" || credential.password == "" || credential.phone == "") {
            Alert.alert(
                "Invalid Detail",
                "Please fill all the details",
                [
                    {
                        text: 'Cancel', 
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel'
                    },
                    {text: 'OK', onPress: () => console.log('OK Pressed')}
                ],
                {cancelable: false}
            )
        }
    }

    const navigation = useNavigation()

  return (

        <SafeAreaView style={style.container}>
            <KeyboardAvoidingView>
                <View style={style.textContainer}>
                    <Text style={style.registerText}>Register</Text>
                    <Text style={style.createNewAccountText}>Create a new Account</Text>
                </View>
                <View  style={{marginTop: 50}}>
                    <View style={style.inputContainer}>
                        <MaterialCommunityIcons name="email-outline" size={24} color="black" />
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
                            secureTextEntry
                            onChangeText={(text) => setCredential({...credential, password: text})}
                            placeholderTextColor="#000"
                            style={style.Input}
                        />
                    </View>
                    <View style={style.inputContainer}>
                        <Feather name='phone' size={24} color='#000'/>
                        <TextInput 
                            placeholder="Phone No"
                            value={credential.phone}
                            onChangeText={(text) => setCredential({...credential, phone: text})}
                            placeholderTextColor="#000"
                            style={style.Input}
                        />
                    </View>

                    <Pressable onPress={register} style={style.registerButton}>
                        <Text style={{fontSize: 18, textAlign: 'center', color: '#000'}}>Register</Text>
                    </Pressable>
                    <Pressable onPress={() => navigation.goBack()} style={{marginTop: 20}}>
                        <Text style={style.alreadyHaveAnAccountText}>Already have an account? Sign In</Text>
                    </Pressable>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
  )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: "center",
        padding: 10
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',   
        marginTop: 100,
    },
    registerText: {
        fontSize: 20,
        color: '#662d91',
        fontWeight: 'bold'
    },
    createNewAccountText: {
        fontSize: 18,
        marginTop: 8,
        fontWeight: 800
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    Input: {
        fontSize: 18,
        borderBottomWidth: 1, 
        borderBottomColor: 'gray',
        marginLeft: 13,
        width: 300,
        marginVertical: 10,
    },
    registerButton: {
        width: 200,
        backgroundColor: '#318CE7',
        padding: 15,
        borderRadius: 7,
        marginTop: 50,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    alreadyHaveAnAccountText: {
        textAlign: 'center',
        fontSize: 17,
        color: 'gray',
        fontWeight: 500
    }
    
})

export default RegisterScreen