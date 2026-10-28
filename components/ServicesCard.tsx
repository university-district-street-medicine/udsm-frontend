import { grayBlueText, spaceGrotesk } from "@/utils/fonts";

export interface ServiceProps {
  name: string;
  caption: string;
  imageUrl: string;
}

export default function ServiceCard({ name, caption, imageUrl }: ServiceProps) {
  return (
    <div className="flex flex-col border border-[#E2E6E9] rounded-2xl overflow-hidden">
      {/* Gray top section, placeholder for imageUrl */}
      <div className="h-12 bg-[#E5E8EB]" />

      {/* Name and caption */}
      <div className="flex flex-col gap-6 p-6 px-10">
        <h3 className={`${spaceGrotesk.className} font-bold text-[2.5rem] leading-[1.4] text-[#092035]`}>{name}</h3>
        <p className={`${spaceGrotesk.className} font-bold text-[1.125rem] leading-[3.25] text-[#092035]`}>{caption}</p>
      </div>
    </div>
  )
}