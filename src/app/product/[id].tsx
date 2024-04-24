import { View , Image, Text,ScrollView } from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { PRODUCTS } from "@/utils/data/products";
import { formatCurrency } from "@/utils/functions/format-currency";
import { Button } from "@/components/button";
import { Feather } from "@expo/vector-icons"
import { BackButton } from "@/components/back-button";
import { useCartStore } from "@/stores/cart-stores";
import { Redirect } from "expo-router"


export default function Product(){
  const { id } = useLocalSearchParams();
  const CartStore = useCartStore();
  const navigation = useNavigation()

  const product = PRODUCTS.find((item)=> item.id === id)

  function handleAddTocart(){
    if(product){
      CartStore.add(product)
      navigation.goBack()
    }
  }

  if (!product){
    return <Redirect href="/"/>
  }

  return(
    <ScrollView className=" flex-1">
      <Image source ={product.cover} className="w-full h-52" resizeMode="cover"/>


      <View className="p-5 mt-8 flex-1">
        <Text className=" text-2xl font-heading">{product.title}</Text>
        <Text className="text-black text-2xl font-heading">{formatCurrency(product.price)} </Text>
        <Text className=" text-black font-body text-base leading-6 mb-6">{product.description}</Text>
        {product.ingredients.map((ingredient) => (
          <Text key={ingredient} className=" text-black font-body text-base leading-6">{"\u2022"}{ingredient}</Text>
        ))}
      </View>

      <View className=" p-5 pb-8 gap-5"> 
          <Button onPress={handleAddTocart}>
            <Button.Icon>
              <Feather name="plus-circle" size={20} />
            </Button.Icon>
            <Button.Text>Adicionar a sacola</Button.Text>
          </Button>

          <BackButton title="Voltar" href="/feed/"/>
          
      </View>

    </ScrollView>
  )
}