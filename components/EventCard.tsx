import { grayText } from "@/utils/fonts";
import Header from "./Header";

interface EventCardProps {
  date: string;
  name: string;
  description: string;

};


// Left container with date and name
export default function EventCard({ date, name, description }: EventCardProps) {
  return (
    < div className="flex items-start gap-[115px]" >
      <p className={`font-normal text-[30px] tracking-[0em] leading-[0.8] text-[#092035]`}>{date}</p>

      {/* Container for name and desc */}
      <div className={`flex flex-col gap-[20px]`}>
        <Header level="h4">{name}</Header>
        <p className={`font-normal ${grayText}`}>{description}</p>
      </div>
    </div >
  );
}