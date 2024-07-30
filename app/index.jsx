import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Redirect, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { images } from '../constants';
import CustomButton from '../components/CustomButton'
import { StatusBar } from 'expo-status-bar';
import { useGlobalContext } from '@/context/GlobalProvider'

const App = () => {
    const {isLoading, isLoggedIn} = useGlobalContext();
    if(!isLoading && isLoggedIn) return <Redirect href="home" />
    return (
    <GestureHandlerRootView className="flex-1">
        <SafeAreaView className="bg-primary h-full"> 
            
            <ScrollView contentContainerStyle={{height :'100%'}}>
                <View className='w-full justify-center items-center min-h-[85vh] px-4'>
                    <Image source={images.logo} className="absolute top-1 w-[130px] h-[84px]" resizeMode='contain' />
                    <Image source={images.cards} className="absolute top-16 max-w-[380px] w-full h-[300px]" resizeMode='contain' />
                    <View className="relative mt-72">
                    <Text className="text-3xl text-white font-bold text-center">
                     Discover endless possibilities with {' '}
                        <Text className = "text-secondary-200">
                            AORA   
                        </Text>   
                    </Text>

                    <Image source={images.path} className ='w-[136px] h-[15px] left-52 mb-2' resizeMode='contain' />

                    </View>
                    <CustomButton title="Continue with Email" textStyles={null} isLoading={false} handlePress={()=>{router.push('/(auth)/sign-in')}} containerStyles='w-full' />
                </View>
            
                

                

            </ScrollView>
            <StatusBar backgroundColor='#161622' style='light' />
        </SafeAreaView>
    </GestureHandlerRootView>
    
  )
}

export default App

