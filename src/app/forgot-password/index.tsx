import { Button } from "@/components/button";
import { InputLogin } from "@/components/input-login";
import { View, Image, Text } from "react-native";

export default function ForgotPassowrd(){
  return(
    <View className=' flex-1  justify-center p-20'>
      <Image source={require("@/assets/logo.png")} className=" h-14 w-32 self-center"/>
      <Text className="text-2xl font-bold mt-5 self-center">Recuperar senha</Text>
      <InputLogin 
      placeholder="Digite seu email"/>
      <Button className="mt-5">
        <Button.Text>Enviar Instruções</Button.Text>
      </Button>
    </View>
  )
}