import { inter } from "@/utils/fonts"

interface OutreachSiteProps {
  name: string,
  date: string,
  description: string[],
  location: string
}


export default function OutreachSite({ name, date, description, location }: OutreachSiteProps) {
  return (
    <div className={`${inter.className} px-4 py-11 max-w-202 max-h-137 bg-[#7C8990]/42 z-0`}>
      <span>{name}</span>
      <span>{date}</span>
      <ul>
        {description.map((item) => (<ul>{item}</ul>))}
      </ul>
      <span>{location}</span>
    </div>
  )
}