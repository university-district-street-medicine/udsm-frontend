import Header from "@/components/Header";
import LeadershipCard from "@/components/LeadershipCard";
import { teamData } from "@/data/teamData";

export default function TeamPage() {
  return (
    <main>
      <div className="relative w-full bg-[url('/MeetTheTeam.png')] bg-cover py-130 opacity-84">
        {/* Color overlay */}
        <div className="absolute inset-0 bg-[#333333]/50 z-0" />
        <div className="m-auto max-w-202">
          <Header level="h1">Meet the Team</Header>
        </div>
      </div>

      {/* Our Leadership Section */}
      <section className="pt-48 pb-20">
        <div className="max-w-202 mx-auto text-center pb-40"><Header level="h2">Our Leadership</Header></div>
        {/* Width container */}
        <div className="w-full">
          {/* Grid container */}
          <div className="max-w-[88%] mx-auto">
            {teamData.map((member) => (
              <LeadershipCard key={member.id} name={member.name} role={member.role} description={member.description} imageURL={member.imageURL}></LeadershipCard>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
