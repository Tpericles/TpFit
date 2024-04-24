import { View, Image, Text } from "react-native";

export default function ForgotPassowrd(){
  return(
    <View className=' flex-1  justify-center p-20'>
      <Image source={require("@/assets/manunten.png")} className=" h-32 w-32 self-center"/>
      <Text className="text-2xl font-bold mt-5 self-center">ESTA QUASE PRONTO</Text>
    </View>
  )
}