import { ProductProps } from "@/utils/data/products"
import {create} from "zustand"
import * as cartInMemory from "./helpers/cart-in-memory"
import AsyncStorage from "@react-native-async-storage/async-storage"
import {createJSONStorage, persist} from "zustand/middleware"


export type ProductCartProps = ProductProps &{
  quantity: number
}

type StateProps ={
  products: ProductCartProps[]
  add: (product: ProductProps) => void
  remove: (productId: string) => void
  clear: () => void
}

export const useCartStore = create(
  persist<StateProps>((set)=>({
    products:[],
  
    add: (product:ProductProps)=> set((state) =>({
      products: cartInMemory.add(state.products, product)
    })),
  
    remove: (productId: string) => set((state)=>({
      products: cartInMemory.remove(state.products, productId)
    })),

    clear:() => set(() => ({products: []}))
  }),{
    name: "delivery:cart",
    storage: createJSONStorage(()=> AsyncStorage)
  }))

