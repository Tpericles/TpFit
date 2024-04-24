import { TextInput, TextInputProps } from "react-native";
import colors from "tailwindcss/colors";

export function Input({...rest}: TextInputProps){
  return <TextInput 
          multiline 
          textAlignVertical="top" 
          placeholderTextColor={colors.slate[400]} 
          className=" h-32 bg-yellow-200 rounded-md px-4 py-3 font-body text-sm text-slate-400"
          {...rest}/>
}