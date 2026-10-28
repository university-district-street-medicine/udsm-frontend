import { inter, spaceGrotesk } from "@/utils/fonts";
import { VolunteerScope } from "@/data/volunteerRolesData";

export default function ScopeCard({ category, subtitle, badge, description, activities }: VolunteerScope) {
  return (
    <div className="flex flex-col gap-5 border border-[#E2E6E9] rounded-2xl p-8 h-full">
      {/* Badge, category, and subtitle */}
      <div className="flex flex-col gap-3">
        {badge && (
          <span className={`${inter.className} self-start rounded-full bg-[#E2EAF1] px-4 py-1 text-[0.875rem] font-bold text-navy-blue`}>
            {badge}
          </span>
        )}
        <h3 className={`${spaceGrotesk.className} font-bold text-[1.75rem] leading-[1.2] text-navy-blue`}>{category}</h3>
      </div>

      {description && <p className={`${inter.className} text-[1rem] leading-[1.5] text-gray-blue`}>{description}</p>}

      {/* Activities list */}
      <ul className={`${inter.className} list-disc pl-5 flex flex-col gap-2 text-[1rem] leading-[1.5] text-gray-blue`}>
        {activities.map((activity) => (
          <li key={activity}>{activity}</li>
        ))}
      </ul>
    </div>
  );
}
