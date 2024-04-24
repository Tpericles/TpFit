
import { InputLogin } from "@/components/input-login";
import { UserHeader } from "@/components/userHeader";
import { Feather } from "@expo/vector-icons";
import { Formik } from "formik";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { Button } from "@/components/button";
import { router } from "expo-router";
import * as Yup from 'yup';
import { BackButton } from "@/components/back-button";

export default function InfoPersonal(){
  return(
    <View className=' flex-1 p-12  bg-yellow-100'>
      <UserHeader/>
      <View className='justify-center '>
      <Formik
        initialValues={{email: '', senha: ''}}
        validationSchema={Yup.object().shape({
          email: Yup.string().required('Informe o email').email('E-mail não válido'),
          senha: Yup.string().required('Informe a senha').min(6, 'A senha precisa ter 6 caracteres')
        })}
        onSubmit={() => router.push('/')}
        >
      {({errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting}) => (
          <>
            <Text className="text-2xl font-bold self-center mb-6">Dados pessoais</Text>

            <View className="mb-4">
              <Text className=" font-bold"> Alterar nome:</Text>
              <InputLogin 
                placeholder='Digite seu Nome'  
                onChangeText={handleChange('nome')} className=" mt-0"/>
            </View>

            <View className="mb-4">
              <Text className=" font-bold"> Alterar email:</Text>
              <InputLogin 
                placeholder='Digite seu email' 
                onBlur={handleBlur('email')}  
                onChangeText={handleChange('email')} className=" mt-0"/>
                { errors.email && touched.email && <Text className=' self-center text-red-600'>{errors.email}</Text>}
            </View>
                         
            <View className="mb-4">
              <Text className=" font-bold"> Alterar senha:</Text>
              <InputLogin  
              placeholder='Digite sua senha' onBlur={handleBlur('senha')}  
              onChangeText={handleChange('senha')} secureTextEntry className=" mt-0"/>
                { errors.senha && touched.senha && <Text className=' self-center text-red-600'>{errors.senha}</Text>}
            </View>


            <Button onPress={() => handleSubmit()} disabled={isSubmitting}  className="mt-5 mb-5">
              <Button.Icon>
                <Feather name="user" size={20} />
              </Button.Icon>
              <Button.Text>Alterar Dados</Button.Text>
            </Button>
            <BackButton title="Sair" href="/(tabs)/feed"/>

          </>
        )}
      </Formik>

      </View>
      
    </View>
  )
}