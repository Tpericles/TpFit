import React, { useEffect, useState } from 'react';
import { 
    Text,
    Image,
    View
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function UserHeader(){
    const [userName, setUserName] = useState<string>();

    useEffect(() => {
        async function loadStorageUserName() {
            try {
                const nome = await AsyncStorage.getItem('@deliverymanager:user');
                setUserName(nome || '');
            } catch (error) {
                console.error('Erro ao tentar carregar o nome do AsyncStorage:', error);
            }
        }

        loadStorageUserName();
    },[]);

    return (
        <View  className=' w-full justify-between items-center py-5'> 
            <Image source={require("@/assets/avatar.png")} className=' w-16 h-16 rounded-full'/>
            <View className=''>
                <Text className=' text-2xl self-center'>Olá,</Text>
                <Text  className=' text-2xl'>
                    {userName}
                </Text>
            </View>
            <View className='border-b border-yellow-300 pb-5 mx-5 w-full'/>            
        </View>
    )
}

