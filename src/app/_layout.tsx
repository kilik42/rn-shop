import { StyleSheet, Text, View } from 'react-native'

import { Stack } from 'expo-router'

export default function _layout() {
  return (
    <div>
    <Stack>
            <Stack.Screen name="(shop)" 
            
            options ={{headerShown:true, title: 'Shop'}}
             />
    </Stack>
    <Stack>
            <Stack.Screen name="categories" 
            options ={{headerShown:true, title: 'Categories'}}
            />
   </Stack>
   <Stack>
        <Stack.Screen name="product" 
        options ={{headerShown:true, title: 'Product'}}
         />
  </Stack>
    <Stack>
        <Stack.Screen name="cart" 
        options ={{presentation: 'modal',title: 'shopping cart'}}
        />
    </Stack>
    </div>
  )
}

const styles = StyleSheet.create({})