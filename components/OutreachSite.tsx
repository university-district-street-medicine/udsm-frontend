import { inter } from "@/utils/fonts"

interface OutreachSiteProps {
  name: string,
  date: string,
  description: string[],
  location: string,
  serviceLearningUrl: string
}


export default function OutreachSite({ name, date, description, location, serviceLearningUrl }: OutreachSiteProps) {
  return (
    <div className={`${inter.className} px-10 py-11 max-w-202 bg-[#7C8990]/14 z-0 flex flex-col gap-5`}>
      <span className={`text-navy-blue font-medium text-[2.8125rem] leading-[1.8]`}>{name}</span>
      <span className={`text-navy-blue font-normal text-[1.6875rem]`}>{date}</span>
      <ul className={`text-gray-blue font-normal text-[1.5625rem] leading-[1.5] list-disc list-outside pl-5`}>
        {description.map((item) => (<li key={crypto.randomUUID()}>{item}</li>))}
      </ul>
      {/* mt-auto pins location + link to the bottom so cards in a row line up */}
      <span className={`mt-auto text-navy-blue font-normal text-[1.5625rem] italic`} >{location}</span>
      <a
        href={serviceLearningUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`text-navy-blue font-semibold text-[1.5625rem] underline decoration-solid`}
      >
        Learn More
      </a>
    </div>
  )
}