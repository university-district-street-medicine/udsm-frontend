import Header from "@/components/Header";
import ScopeCard from "@/components/ScopeCard";
import { inter, spaceGrotesk, darkGreenText } from "@/utils/fonts";
import { volunteerScopesData } from "@/data/volunteerRolesData";

// First two entries are the core tiers (undergrad + all graduate), the rest are discipline-specific
const coreTiers = volunteerScopesData.slice(0, 2);
const disciplineScopes = volunteerScopesData.slice(2);

export default function LearnMorePage() {
  return (
    <main>
      {/* Hero / intro header */}
      <div className="w-full bg-navy-blue py-40 px-6">
        <div className="max-w-292 mx-auto flex flex-col gap-8">
          <Header level="h1">Learn More About Volunteering</Header>
          <div className="w-[33.125rem] max-w-full h-[0.4375rem] bg-[#FFD261]" />
          <p className={`${inter.className} text-[1.5rem] leading-[1.4] text-[#FFFFFF] max-w-202`}>
          </p>
        </div>
      </div>

      {/* Core tiers section */}
      <section className="pt-30 pb-20 px-10">
        <div className="max-w-292 mx-auto flex flex-col gap-12">
          <h2 className={`${spaceGrotesk.className} font-bold text-[3rem] tracking-[0.05em] uppercase text-center ${darkGreenText}`}>
            Core Tiers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreTiers.map((scope) => (
              <ScopeCard key={scope.category} {...scope} />
            ))}
          </div>
        </div>
      </section>

      {/* Discipline-specific clinical scopes section */}
      <section className="pt-10 pb-37 px-10">
        <div className="max-w-292 mx-auto flex flex-col gap-12">
          <h2 className={`${spaceGrotesk.className} font-bold text-[3rem] tracking-[0.05em] uppercase text-center ${darkGreenText}`}>
            Discipline-Specific Scopes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {disciplineScopes.map((scope) => (
              <ScopeCard key={scope.category} {...scope} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
