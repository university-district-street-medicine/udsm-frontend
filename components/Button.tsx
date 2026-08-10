import { yellowButton, roboto } from "@/utils/fonts";

interface ButtonProps {
  text: string
}

export default function Button({ text }: ButtonProps) {
  return (
    <button className={`flex justify-center items-center bg-${yellowButton} w-50 h-15 rounded-[110px] relative z-10`}>
      <span className={`${roboto.className} font-bold text-[1.5rem]`}>{text}</span>
    </button>
  )
}
