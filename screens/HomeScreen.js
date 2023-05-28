import React, {useState, useEffect} from 'react'
import {SafeAreaView, Text, KeyboardAvoidingView, Pressable, Alert, View, ScrollView, Image, TextInput, StyleSheet} from 'react-native'
import { Feather } from '@expo/vector-icons'
import * as location from 'expo-location'
import {MaterialIcons} from '@expo/vector-icons'

import Carousel from '../components/Carousel'
import Services from '../components/Services'
import DressItem from '../components/DressItem'

import services from '../data/service'


const HomeScreen = () => {
const [displayCurrentAddress, setDisplayCurrentAddress] = useState("Waiting for Current Location")
  
  return (
    <ScrollView style={style.container}>
        <View style={{flexDirection: 'row', alignItems: 'center', padding: 10 }}>
          <MaterialIcons name="location-on" size={30} color="#fd5c63" />
          <View>
            <Text style={{fontSize: 18, fontWeight: 600}}>Home</Text>
            <Text>{displayCurrentAddress}</Text>
          </View>

          <Pressable onPress={() => navigation.navigate('Profile')} style={{marginLeft: 'auto', marginRight: 7}}>
            <Image 
              style={{width: 40, height: 40, borderRadius: 20}}
               source={{
                uri: "https://lh3.googleusercontent.com/ogw/AAEL6sh_yqHq38z35QMy5Fnb8ZIxicdxCIVM9PeBD2j-=s64-c-mo",
              }}
            />
          </Pressable>
        </View>
        

        {/*Search bar */}
        <View style={style.searchContainer}>
            <TextInput placeholder="Search for items or more" />
            <Feather name="search" size={24} color="#fd5c63" />
        </View>

        <Carousel />
    </ScrollView>
  )
}

export default HomeScreen

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    marginTop: 50
  },
  searchContainer: {
    padding: 10,
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 0.8,
    borderColor: '#C0C0C0',
    borderRadius: 7
  }
})