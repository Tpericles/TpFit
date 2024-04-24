import { Formik } from 'formik';
import { useState } from 'react';
import {  Text, TextInput, View, Image, TouchableOpacity, Alert } from 'react-native';
import * as Yup from 'yup';
import { router } from 'expo-router';
import { Button } from "@/components/button";
import{ Feather } from "@expo/vector-icons"
import { InputLogin } from '@/components/input-login';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  const [ resultado, setResultado ] = useState<null|'logado'|'falhou'>(null);
  
  const handleLogin = async ({email, senha}:any) => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    if (email.trim() == 'tpdev@test.com' && senha.trim() == '123456') {
      setResultado('logado');
      router.push('/');
    }
    else
      setResultado('falhou')
  }

  

  return (
    
    <View className=' flex-1  justify-center p-20'>
    <Image source={require("@/assets/logo.png")} className=" h-14 w-32 self-center" />
      <Formik
        initialValues={{email: '', senha: ''}}
        validationSchema={Yup.object().shape({
          email: Yup.string().required('Informe o email').email('E-mail não válido'),
          senha: Yup.string().required('Informe a senha').min(6, 'A senha precisa ter 6 caracteres')
        })}
        onSubmit={handleLogin}>
        {({errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting}) => (
          <>
            <Text className="text-2xl font-bold mt-5 self-center">Login</Text>

            <InputLogin 
              placeholder='Digite seu email' 
              onBlur={handleBlur('email')}  
              onChangeText={handleChange('email')}/>
              { errors.email && touched.email && <Text className=' self-center text-red-600'>{errors.email}</Text>}             

            <InputLogin  
            placeholder='Digite sua senha' onBlur={handleBlur('senha')}  
            onChangeText={handleChange('senha')} secureTextEntry/>
              { errors.senha && touched.senha && <Text className=' self-center text-red-600'>{errors.senha}</Text>}

              <View className="w-full items-end ">
                <TouchableOpacity onPress={() => router.push('/feed/')}>
                  <Text className=' opacity-50'>Esqueceu sua senha?</Text>
                </TouchableOpacity>
              </View>

            <Button onPress={() => handleSubmit()} disabled={isSubmitting}  className="mt-5">
              <Button.Icon>
                <Feather name="user" size={20} />
              </Button.Icon>
              <Button.Text>Login</Button.Text>
            </Button>

            <View className=" self-center flex-row mt-4">
              <Text >Não tem uma conta? </Text>
              <TouchableOpacity onPress={() => router.push('/register/')}>
                <Text className="font-bold text-primary">Inscreva-se</Text>
              </TouchableOpacity>
            </View>

            { resultado == 'logado' && <Text className='flex self-center'>Logado com sucesso</Text>}
            { resultado == 'falhou' && <Text className='flex self-center' >Email ou senha incorreto</Text>}
          </>
        )}
      </Formik>
    </View>
  );
}