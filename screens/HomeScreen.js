import React, {useState, useEffect} from 'react'
import {SafeAreaView, Text, KeyboardAvoidingView, Pressable, Alert, View, ScrollView, Image, TextInput, StyleSheet} from 'react-native'
import { Feather } from '@expo/vector-icons'
import * as location from 'expo-location'
import {MaterialIcon} from '@expo/vector-icons'

import Carousel from '../components/Carousel'
import Services from '../components/Services'
import DressItem from '../components/DressItem'

import services from '../data/service'


const HomeScreen = () => {

  
  return (
    <ScrollView>
        <Text>Hello Universe</Text>
    </ScrollView>
  )
}

export default HomeScreen