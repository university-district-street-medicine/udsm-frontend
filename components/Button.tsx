import { yellowButton, roboto } from "@/utils/fonts";



export default function Button() {
  return (
    <button className={`flex justify-center items-center bg-${yellowButton} w-50 h-15 rounded-[110px]`}>
      <span className={`${roboto.className} font-bold text-[1.5rem]`}>Sign Up</span>
    </button>
  )
}
