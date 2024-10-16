import { StyleSheet, Text, View } from 'react-native'

import { Stack } from 'expo-router'

export default function _layout() {
  return (
    
    <Stack>
            <Stack.Screen name="(shop)" 
            
            options ={{headerShown:true, title: 'Shop'}}
            component={index} />
    </Stack>
    <Stack>
            <Stack.Screen name="categories" 
            options ={{headerShown:true, title: 'Categories'}}
            component={index} />
   </Stack>
   <Stack>
        <Stack.Screen name="categories" 
        options ={{headerShown:true, title: 'Shop'}}
        component={index} />
  </Stack>
    
  )
}

const styles = StyleSheet.create({})