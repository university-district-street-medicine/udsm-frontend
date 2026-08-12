import Header from "@/components/Header";
import OutreachSite from "@/components/OutreachSite";
import Image from "next/image";
import { inter } from "@/utils/fonts";

export default function AboutPage() {
  return (
    <main>
      <div className="relative w-full bg-[url('/AboutUs.png')] bg-cover py-130 opacity-75">
        {/* Color overlay */}
        <div className="absolute inset-0 bg-[#000000]/42 z-0" />
        <div className="m-auto max-w-131">
          <Header level="h1">About Us</Header>
        </div>
      </div>

      {/* Our Mission section */}
      <section>
        {/* Container div */}
        <div className="flex pt-54 pb-39 mx-auto gap-30 justify-center">

          {/* Image div */}
          <Image src="/OurMission.png" alt="People in mobile health van" width={601} height={640}></Image>

          {/* Text div */}
          <div className="flex flex-col gap-5">
            <div className="mx-auto">
              <Header level="h2">Our Mission</Header>
            </div>
            <div className={`${inter.className} text-gray-blue text-[2.1875rem] flex flex-col gap-5`}>
              <p className="max-w-202 leading-[1.2]">UDSM strives to eliminate health disparities by providing free comprehensive care to the underserved and through education of current and future healthcare providers. We serve as an interdisciplinary, student- and community-driven bridge to care for those experiencing homelessness in the University District through:</p>
              <ul className="font-bold leading-[1.73] list-disc list-inside">
                <li>Dedicated Street Outreach</li>
                <li>Close Community Partnerships</li>
                <li>Free Clinic-based Care</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values section */}
      <section className="pb-37">
        {/* Container div */}
        <div className="mx-auto max-w-351 flex flex-col items-center px-10 gap-12">
          <Header level="h2">Values</Header>
          {/* All values */}
          <div className="flex justify-between w-full text-navy-blue text-[1.5rem] font-bold">
            <span>Compassion</span>
            <span>Respect</span>
            <span>Advocacy</span>
            <span>Accountability</span>
            <span>Collaboration</span>
            <span>Experimental Learning</span>
          </div>
        </div>
      </section>

      {/* Outreach Sites section */}
      <section className="pb-135">

        {/* Top container */}
        <div className="flex flex-col gap-17 items-center pb-22">
          <Header level="h2">Outreach Sites</Header>
          <p className="text-gray-blue text-[2.1875rem] max-w-380 leading-[1.2] text-balance text-center">
            UDSM provides services within the University District as well as the larger Seattle area. Currently we are providing services at six main sites on a monthly/bi-monthly basis.
          </p>
        </div>

        <OutreachSite name="Street Outreach" date="EVERY OTHER FRIDAY, 5:30PM-7:30PM" description={["Service location", "Engagement"]} location="Church on the Ave (4130 University Way NE, Seattle, WA 98105)"></OutreachSite>
      </section>
    </main >
  );
}
