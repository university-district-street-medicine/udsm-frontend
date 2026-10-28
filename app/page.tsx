import Button from "@/components/Button";
import EventCard from "@/components/EventCard";
import Header from "@/components/Header";
import PartnerCarousel from "@/components/PartnerCarousel";
import { borderGray, grayText, burveticaFont } from "@/utils/fonts";
import { roboto, inter, spaceGrotesk, darkGreenText } from "@/utils/fonts";
import Link from "next/link";
import { redirectBoxes, events, carouselPartners } from "@/data/homeData";
import { servicesData } from "@/data/servicesData";
import ServiceCard from "@/components/ServicesCard";


export default function Home() {


  return (
    <main>
      <div className="relative w-full bg-[url('/homepage.png')] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center pt-99 pb-17 px-6">
        <div className="absolute inset-0 bg-[#3F1E77]/51 z-0" />
        <div className="max-w-292 mx-auto w-full">
          <Header level="h1" >
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

      {/* New landing page as specified by Christina */}
      <section className="pt-20">
        {/* Top Container */}
        <div className="flex flex-col gap-12 items-center pb-12 px-6">
          {/* Tagline: max-w-[1312px] at 24px makes sentence 2 wrap after "guided by the" (measured with the sans-serif fallback; re-tune once Burvetica NC loads) */}
          <div className={`${burveticaFont} text-[#0A5C45] font-medium text-[1.5rem] max-w-[1312px] leading-[1.4] text-center`}>
            <p>UDSM builds trusting and lasting relationships with people who face barriers to traditional healthcare.</p>
            <p>Our purpose is to create nonjudgmental and nontransactional opportunities for conversations about health, guided by the interests and priorities of community members.</p>
          </div>
          {/* Header for our services */}
          <h2 className={`${spaceGrotesk.className} font-bold text-[4rem] tracking-[0.05em] uppercase ${darkGreenText}`}>Our Services</h2>

        </div>

        {/* Services Card Container */}
        <div className="w-full max-w-[1700px] mx-auto px-10">
          {/* CSS Grid container */}
          <div className="grid grid-cols-4 grid-rows-1 mx-auto w-full gap-y-16 gap-x-15">
            {servicesData.map((service) => {
              return (
                <ServiceCard key={service.id} name={service.name} caption={service.caption} imageUrl={service.imageUrl}></ServiceCard>
              )
            })}
          </div>
        </div>

        {/* Volunteer with us button*/}
        <div className="flex justify-center pt-20">
          <a
            href="https://servicelearning.washington.edu/opportunities/Seattle"
            target="_blank"
            rel="noopener noreferrer"
            className={`${spaceGrotesk.className} font-bold text-[1.5rem] tracking-[0.05em] uppercase ${darkGreenText} bg-[#C8FAD2] hover:bg-[#B0F0BE] rounded-[20px] px-20 py-4 transition-colors`}
          >
            Volunteer with us! &gt;
          </a>
        </div>
      </section>

      {/*  */}


      {/* Upcoming Events Section */}
      <section className="bg-[#FFFFFF] pt-56 pb-61 max-w-301 mx-auto w-full">
        {/* Container for heading, events, etc. */}
        <div>

          {/* Container for heading (Join Us, Upcoming Events) */}
          <div className="flex flex-col items-center pb-26">
            <p className={`${roboto.className} font-bold text-[30px] tracking-[0.4em] leading-[1.8] ${grayText}`}>JOIN US</p>
            <Header level="h2" >Upcoming Events</Header>
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
                  <Button text="Sign Up" />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Partners Section */}
      <section className={`pb-79`}>
        {/* Overall div container */}
        <div>
          {/* Container for headers */}
          <div className="flex flex-col items-center pb-26">
            <p className={`${roboto.className} font-bold text-[22px] tracking-[0.4em] leading-[1.8] ${grayText}`}>READ ON</p>
            <Header level="h3" >Our Partners</Header>
          </div>

          {/* Carousel container */}
          <PartnerCarousel partners={carouselPartners}></PartnerCarousel>
        </div>
      </section>

      {/* Get Involved section */}
      <section>
        {/* Div for whole section */}
        <div className={`relative w-full pt-47 pb-70 bg-[url('/homepage.png')] flex justify-center items-center bg-cover bg-no-repeat bg-center`}>
          <div className="bg-[#3F1E77]/51 z-0 absolute inset-0" />
          {/* Div for content and button */}
          <div className={`flex items-start gap-28`}>
            {/* Div for content */}
            <div className={`max-w-103`}>
              <h2 className={`${inter.className} font-bold lg:text-[48px] tracking-[-0.02em] text-[#FFFFFF] relative z-10`}>Get Involved!</h2>
              <p className={`${inter.className} text-[#FFFFFF] relative z-10 text-[1rem]`}>We are only as strong as our volunteer base! Your support is invaluable and we greatly appreciate it.</p>
            </div>
            {/* Button */}
            <Button text="Volunteer"></Button>
          </div>
        </div>
      </section>
    </main>
  );
}
