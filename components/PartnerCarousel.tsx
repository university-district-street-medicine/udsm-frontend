import { grayBlueText, inter } from "@/utils/fonts";
import Image from "next/image";
import Header from "./Header";

interface Partner {
  id: number;
  name: string;
  caption: string;
  imageUrl: string;
  serviceLearningUrl: string;
}

export default function PartnerCarousel({ partners }: { partners: Partner[] }) {
  return (
    <div className={`w-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-6 px-6`}>
      {/* Map through each of the partners */}
      {/* Need to force each photo into uniform size and then  */}
      {partners.map((partner) => (
        <div key={partner.id} className="flex flex-col gap-[1.5rem] shrink-0 max-w-93">
          {/* Image container */}
          <div className={`relative w-93 h-77 aspect-square`}>
            <Image
              src={partner.imageUrl}
              alt={partner.name}
              fill
              sizes="372px">
            </Image>
          </div>
          {/* Partner Name */}
          <Header level="h4">{partner.name}</Header>
          {/* Partner Caption */}
          <p className={`${inter.className} font-normal ${grayBlueText}`}>
            {partner.caption}
          </p>
          {/* Learn more link */}
          <a
            href={partner.serviceLearningUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${inter.className} font-semibold text-[1rem] text-navy-blue underline decoration-solid`}
          >
            Learn More
          </a>
        </div>
      ))
      }
    </div>
  )
}