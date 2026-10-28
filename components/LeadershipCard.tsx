import Image from "next/image";
import { inter } from "@/utils/fonts";

interface LeadershipCardProps {
  name: string;
  role: string;
  description: string;
  imageURL: string
};

export default function LeadershipCard({ name, role, description, imageURL }: LeadershipCardProps) {
  return (
    // Make leadership image rounded (radius 20)
    // Center the text inside as well
    // Container div
    <div className="flex flex-col items-center gap-5 max-w-90 px-2">
      {/* Image container */}
      <div className={`relative w-87 h-87 aspect-square rounded-[20px] border-2 overflow-hidden border-slate-gray`}>
        <Image src={imageURL} alt={name} fill></Image>
      </div>
      <div className={`${inter.className} flex flex-col text-center items-center`}>
        <span className="font-medium text-[1.875rem] text-navy-blue leading-[1.3]">{name}</span>
        <div className="font-normal text-[1.25rem] text-gray-blue leading-[1.5] flex flex-col gap-2">
          <span>{role}</span>
          <span>{description}</span>
        </div>

      </div>

    </div>
  )
}