import { TextInput, TextInputProps } from "react-native";


export function InputLogin({...rest}: TextInputProps){
  return <TextInput 
          className="mt-5 px-4 py-3 border-2 rounded-lg border-yellow-300"
          {...rest}/>
}