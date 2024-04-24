import { TouchableOpacity,TouchableOpacityProps, Image, ImageProps, View, Text } from "react-native";
import {  forwardRef } from "react";



type ProductDataProps ={
  title: string,
  description: string,
  thumbnail: ImageProps,
  quantity?:number

}

type ProductsProps = TouchableOpacityProps &{
  data: ProductDataProps
}
export const Products= forwardRef<TouchableOpacity, ProductsProps>(({data, ... rest }, ref) =>{
  return(
    <TouchableOpacity ref={ref} className=" w-full flex-row items-center pb-4" {...rest}>
      <Image source={data.thumbnail} className=" w-20 h-20 rounded-md"/>
      <View className=" flex-1 ml-3">
        <View className="flex-row items-center">
          <Text className=" text-black font-subtitle text-base flex-1"> {data.title}</Text>
          {data.quantity && <Text className=" text-black font-subtitle text-sm">x {data.quantity}</Text>}
        </View>
        <Text className=" text-black text-xs leading-5 mt-0.5"> {data.description}</Text>
      </View>
    </TouchableOpacity>
  )
})