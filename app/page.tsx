import Button from "@/components/Button";
import EventCard from "@/components/EventCard";
import Header from "@/components/Header";
import { gray, borderGray } from "@/utils/fonts";
import { roboto, inter } from "@/utils/fonts";
import Link from "next/link";


export default function Home() {
  const redirectBoxes = [
    {
      id: 1,
      title: "About Us",
      description:
        "Eliminating health disparities through free care to the underserved and educating current and future providers",
      linkText: "Learn More",
      href: "/about",
    },
    {
      id: 2,
      title: "Become a Member",
      description:
        "We are only as strong as our volunteer base! Your support is invaluable and we greatly appreciate it",
      linkText: "Get Involved",
      href: "/join",
    },
    {
      id: 3,
      title: "Join an Event",
      description:
        "Check out our service learning website to explore the many outreach services available and find the one that's right for you",
      linkText: "Visit Calendar",
      href: "https://servicelearning.washington.edu/opportunities/Seattle",
    },
  ];

  // Events boxes - id(for the key prop), date, name, desc
  const events = [
    {
      id: 1,
      date: "SAT, SEP 25",
      name: "September Low-Cost Clinic",
      description: "Help Children Save Lives"
    },
    {
      id: 2,
      date: "FRI, OCT 01",
      name: "October Free Clinic",
      description: "Help Children Save Lives"
    },
    {
      id: 3,
      date: "SAT, OCT 02",
      name: "Monthly Dental Checkup",
      description: "Routine check up for all the children in the camp"
    }
  ];

  return (
    <main>
      <div className="relative w-full bg-[url('/homepage.png')] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center pt-99 pb-17 px-6">
        <div className="absolute inset-0 bg-[#3F1E77]/51 z-0" />
        <div className="max-w-292 mx-auto w-full">
          <Header level="h1">
            Serving our <br />
            unhoused neighbors <br />
            where they are
          </Header>
          <div className="relative z-10 w-[33.125rem] h-[0.4375rem] bg-[#FFD261] mt-[1.25rem]" />
          <div className="relative z-10 flex gap-[1rem] mt-[4rem]">
            {redirectBoxes.map((box) => (
              <div
                key={box.id}
                className="w-[23.75rem] h-[15.875rem] bg-[#9CA5AD]/80 p-[2rem]"
              >
                <h2
                  className={`${inter.className} font-bold text-[1.5rem] text-[#FFFFFF]`}
                >
                  {box.title}
                </h2>
                <p
                  className={`${inter.className} font-normal text-[1rem] text-[#FFFFFF] pb-[2rem]`}
                >
                  {box.description}
                </p>
                {box.href.startsWith("http") ? (
                  <a
                    href={box.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${roboto.className} font-normal text-[1rem] text-[#FFFFFF] underline decoration-solid`}
                  >
                    {box.linkText}
                  </a>
                ) : (
                  <Link
                    href={box.href}
                    className={`${roboto.className} font-normal text-[1rem] text-[#FFFFFF] underline decoration-solid`}
                  >
                    {box.linkText}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Upcoming Events Section */}
      <section className="bg-[#FFFFFF] pt-56 pb-61 max-w-301 mx-auto w-full">
        {/* Container for heading, events, etc. */}
        <div>

          {/* Container for heading (Join Us, Upcoming Events) */}
          <div className="flex flex-col items-center pb-26">
            <p className={`${roboto.className} font-bold text-[30px] tracking-[0.4em] leading-[1.8] text-${gray}`}>JOIN US</p>
            <Header level="h2">Upcoming Events</Header>
          </div>

          {/* Container for three upcoming events */}
          <div className="flex flex-col">

            {/* Each event containing date, name and quick desc. and signup btn, 
                each event container divided into left container and button
            */}
            {events.map((event, index) => {
              const isLast = index === events.length - 1
              return (
                <div key={event.id} className={`flex justify-between pt-15 ${isLast ? "pb-1" : `pb-17 border-b border-b-${borderGray}`}`}>
                  {/* Left container with date and name */}
                  <EventCard key={event.id} date={event.date} name={event.name} description={event.description} />
                  <Button />
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
