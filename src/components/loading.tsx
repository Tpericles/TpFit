import { ActivityIndicator, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import colors from "tailwindcss/colors"

export function Loading(){
  return(
    <View className="flex-1 items-center justify-center bg-yellow-100">
      <ActivityIndicator color={colors.white}/>
    </View>
  )
}