import { Link, LinkProps } from "expo-router";


type BackButtonProps = LinkProps<string>& {
  title: string
}

export function BackButton({title, ...rest}: BackButtonProps){
  return(
    <Link className=" text-black text-center text-base font-bold" {... rest}>
      {title}

    </Link>
  )
}