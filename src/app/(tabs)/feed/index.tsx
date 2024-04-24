import { useState, useRef } from "react"

import {View, FlatList, SectionList, Text, } from "react-native"
import { Header } from "@/components/header"
import { CategoryButton } from "@/components/category-button"
import { CATEGORIES, MENU, ProductProps } from "@/utils/data/products"
import { Products } from "@/components/product"
import { Link } from "expo-router"
import { useCartStore } from "@/stores/cart-stores"




export default function Home(){
  const [category, setCategory] = useState(CATEGORIES[0])
  const CartStore = useCartStore()

  const sectionListRef = useRef<SectionList<ProductProps>>(null)

  const cartQuantityItems =CartStore.products.reduce((total, product)=> total + product.quantity, 0)

  function handleCategorySelect(selectedCategory:string){
    setCategory(selectedCategory)

    const sectionIndex = CATEGORIES.findIndex((category) => category === selectedCategory)

    if(sectionListRef.current){
      sectionListRef.current.scrollToLocation({
        animated: true,
        sectionIndex: sectionIndex,
        itemIndex: 0
      })
    }
  }

  return (
    <View className ="flex-1 pt-8 bg-yellow-100">
      <Header 
        title="Faça seu pedido" 
        cartQuantityItems={cartQuantityItems}/>

      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item}
        renderItem={({item})=> 
          <CategoryButton 
            title={item} isSelected={item === category}
            onPress={()=>handleCategorySelect(item)}/>}
        horizontal
        className="max-h-10 mt-5"
        contentContainerStyle={{gap: 12, paddingHorizontal: 20}}
        showsHorizontalScrollIndicator={false}
        />

      <SectionList 
        ref={sectionListRef}
        sections={MENU}
        keyExtractor={(item)=> item.id}
        stickySectionHeadersEnabled={false}
        renderItem={({ item }) => <Link href={`/product/${item.id}`} asChild> 
                                    <Products data={item}/>
                                  </Link>}
        renderSectionHeader= {({ section: {title} }) => 
          <Text className=" text-xl font-heading mt-8">{title}</Text>}
        className=" flex-1 p-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 50}}
        />
    </View>
  )

}