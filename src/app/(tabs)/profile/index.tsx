import { TouchableOpacity, View, Text} from "react-native";
import { UserHeader } from "@/components/userHeader";
import { router } from "expo-router";
import { BackButton } from "@/components/back-button";

export default function Profile(){
  return(
    <View className="flex flex-1 items-center px-12 pt-12 bg-yellow-100">
      <UserHeader/>
      <View className=" mb-3 flex-1 justify-between ">
        <TouchableOpacity className=" bg-yellow-300 py-4 px-14 items-center rounded-lg " onPress={() => router.push('/(tabs)/profile/infoPersonal/')}>
          <Text> Dados pessoais</Text>
        </TouchableOpacity>
        <TouchableOpacity className=" bg-yellow-300 py-4 px-14 items-center rounded-lg" onPress={() => router.push('/(tabs)/profile/messages/')}>
          <Text> mensagem</Text>
        </TouchableOpacity>
        <TouchableOpacity className=" bg-yellow-300 py-4 px-14 items-center rounded-lg">
          <Text> Pedidos</Text>
        </TouchableOpacity>
        <TouchableOpacity className=" bg-yellow-300 py-4 px-14 items-center rounded-lg">
          <Text> Ultimos produtos vistos</Text>
        </TouchableOpacity>
        <TouchableOpacity className=" bg-yellow-300 py-4 px-14 items-center rounded-lg">
          <Text> Lista de desejo</Text>
        </TouchableOpacity>
        <TouchableOpacity className=" bg-yellow-300 py-4 px-14 items-center rounded-lg">
          <Text> Notificações</Text>
        </TouchableOpacity>
        <TouchableOpacity className=" bg-yellow-300 py-4 px-14 items-center rounded-lg">
          <Text> Endereços</Text>
        </TouchableOpacity> 
        <TouchableOpacity className=" bg-yellow-300 py-4 px-14 items-center rounded-lg">
          <Text> Configurações</Text>
        </TouchableOpacity>
        <BackButton title="Sair" href="/"/>
      </View>

    </View>
  )
}