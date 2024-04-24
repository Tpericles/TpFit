import { View, Image, Text, TouchableOpacity } from "react-native";
import { Feather} from "@expo/vector-icons"
import colors from "tailwindcss/colors"
import { Link } from "expo-router"


type HeadeProps ={
  title: string
  cartQuantityItems?: number
}

export function Header({title, cartQuantityItems = 0}:HeadeProps){
  return(
    <View className=" flex-row items-center border-b border-yellow-300 pb-5 mx-5">
      <View className=" flex-1">
        <Image source={require("@/assets/logo.png")} className=" h-12 w-32"/>
        <Text className=" text-black text-xl font-heading mt-2"> {title}</Text>
      </View>

    {cartQuantityItems > 0 && (
      <Link href="/cart" asChild>
      <TouchableOpacity className="relative" >
        <View className=" bg-black w-4 h-4 rounded-full items-center justify-center top-2 z-10 -right-3.5">
          <Text className=" text-white font-bold text-xs">{cartQuantityItems}</Text>

        </View>
        <Feather name="shopping-bag" color={colors.black} size={24}/>
      </TouchableOpacity>
      </Link>
      )}
    </View>
  )
}