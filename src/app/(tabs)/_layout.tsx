import { Tabs } from "expo-router/tabs";
import{ Feather } from "@expo/vector-icons"

export default function Layout () {

  return (
        <Tabs screenOptions={{
          headerShown:false,
          tabBarStyle: {backgroundColor: '#fef08a'}     
        }}>
            <Tabs.Screen
              name="feed/index"
              options={{
              title: 'Home',
              tabBarIcon: (btn) => <Feather size={28} name="home" color={(btn.focused ? 'lime' : 'grey')}  />}}/>

            <Tabs.Screen
              name="cart"
              options={{
              title: 'Carrinho',
              tabBarIcon: (btn) => <Feather name="shopping-cart" size={24} color={(btn.focused ? 'lime' : 'grey')}  />}}/>

            <Tabs.Screen
              name="profile"
              options={{
              title: 'Perfil',
              tabBarIcon: (btn) => <Feather size={28} name="user" color={(btn.focused ? 'lime' : 'grey')}  />}}/>
          
        </Tabs>
      
    
 );
}