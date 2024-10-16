import { Tabs } from "expo-router";

const TabsLayout = () => {  
  return (
    <Tabs>
        <Tabs.Screen  name="index" options ={{headerShown:true, title: 'Shop'}} />
        <Tabs.Screen name = "categories"  options ={{headerShown:true, title: 'Categories'}} />
        <Tabs.Screen name = "product" options ={{headerShown:true, title: 'Product'}} />
        <Tabs.Screen name="orders" options ={{}} />
    </Tabs>
  );
}