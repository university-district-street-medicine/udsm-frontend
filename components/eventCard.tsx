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
      <div className="flex flex-col gap-[20px]">
        <h3 className={`font-black text-[30px] tracking-[0em] leading-[0.8] text-[#092035]`}>{name}</h3>
        <p className={`font-normal`}>{description}</p>
      </div>
    </div >
  );
}