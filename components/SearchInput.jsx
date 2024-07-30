import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { Image } from 'react-native'
import { icons } from "../constants"
import { usePathname } from 'expo-router'
import { router } from 'expo-router'

const SearchInput = ({ initialQuery }) => {
    const pathname = usePathname();
    const [query, setQuery] = useState(initialQuery || "");
    return (
        <View className="border-2 border-black-200 w-full rounded-2xl h-16 px-4 bg-black-100 focus:border-secondary items-center flex-row space-x-4">
            <TextInput 
            className="text-base mt-0.5 text-white flex-1 font-pregular"
            value={query}
            placeholder="Search for a video topic"
            placeholderTextColor="#CDCDE0"
            onChangeText={(e)=> setQuery(e)}
            />
 
            <TouchableOpacity onPress={()=>{
                if(!query) {
                    return Alert.alert('Missing query', 'Please input something to search across database')
                }

                if(pathname.startsWith('/search')) router.setParams({query})
                else router.push(`/search/${query}`)

            }}>
                <Image source={icons.search} className='w-5 h-5' resizeMode='contain' />
            </TouchableOpacity>
        </View>
    
  )
}

export default SearchInput