import { Header } from "@/components/header";
import { View, Text, ScrollView, Alert, Linking } from "react-native";
import { Products } from "@/components/product";
import { ProductCartProps, useCartStore } from "@/stores/cart-stores";
import { formatCurrency } from "@/utils/functions/format-currency";
import { Input } from "@/components/input";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Button } from "@/components/button";
import { Feather } from "@expo/vector-icons"; 
import { BackButton } from "@/components/back-button";
import { useState } from "react";
import { useNavigation } from "expo-router";
import { Picker } from '@react-native-picker/picker';

const PHONE_NUMBER = "5582994312948"
const paymentMethods = ['Cartão', 'Pix', 'Dinheiro']

export default function Cart(){
  const navigation = useNavigation()
  const [address, setAddress] = useState("")
  
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('')
  const cartStore = useCartStore()

  const total = formatCurrency(cartStore.products.reduce((total, product)=> total + product.price * product.quantity,0))

  function handleProductRemove(product:ProductCartProps){
    Alert.alert("Remover", `Deseja remover ${product.title} do carrinho`,[
      {
        text: "Cancelar"
      },
      {
       text:"Remover",
       onPress: () => cartStore.remove(product.id)
      }
    ])
  }

  function handleOrder(){
    if(address.trim().length===0){
      return Alert.alert("PEDIDO", "Informe o endereço")
    }

    const products = cartStore.products.map((product)=>`\n ${product.quantity} ${product.title}`).join("")

    const message = `
      NOVO PEDIDO
      \n Entregar em: ${address}

      ${products}

      \n Valor total: ${total}

      \n Forma de pagamento: ${selectedPaymentMethod}
      `

    Linking.openURL(`http://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=${message}`)
    cartStore.clear()
    navigation.goBack()
  }

  return(
    <View className="flex-1 pt-8 bg-yellow-100">
      <Header title="Seu carrinho"/>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false} extraHeight={100}>
          <ScrollView>
            <View className=" p-5 flex-1">
              {cartStore.products.length > 0 ? (   
              <View className=" border-b border-yellow-300">     
                {cartStore.products.map((product)=> (
                  <Products key={product.id} data={product} onPress={() => handleProductRemove(product)}/>
                ))}
              </View>
              ):(
              <Text className=" font-body text-black text-center my-8">
                Seu Carrinho esta vazio!!
              </Text> 
              )}

              <View className=" flex-row gap-2 items-center mt-5 mb-4">
                <Text className=" text-black text-xl font-subtitle">Total:</Text>
                <Text className=" text-black text-2xl font-heading">{total}</Text>
              </View>
              <View>
                <Text className=" font-subtitle">Selecione uma forma de pagamento:</Text>
                <Picker
                  selectedValue={selectedPaymentMethod}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedPaymentMethod(itemValue)
                  }>
                  {paymentMethods.map((method, index) => (
                    <Picker.Item key={index} label={method} value={method} />
                  ))}
                </Picker>
              </View>
              <Input placeholder="Informe o endereço" className=" text-black"
                    onChangeText={setAddress}
                    blurOnSubmit={true}/>
            </View>
          </ScrollView>
        </KeyboardAwareScrollView>
        <View className="p-5 gap-5">
          <Button onPress={handleOrder}>
            <Button.Text> Enviar pedido</Button.Text>
            <Button.Icon>
              <Feather name="arrow-right-circle" size={20}/>
            </Button.Icon>
          </Button>
          <BackButton title="Voltar ao cardapio" href="/feed/"/>
        </View>
    </View>
  )
}