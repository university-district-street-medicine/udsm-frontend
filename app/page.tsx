import { Inter, Roboto } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: "400" });

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
  return (
    <main>
      <div className="relative w-full min-h-[700px] bg-[url('/homepage.png')] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-[#3F1E77]/51 z-0" />
        <div>
          <div
            className={`${inter.className} font-bold text-[5.1875rem] leading-[6.25rem] tracking-[-0.02em] text-[#FFFFFF] relative z-10 mt-[14rem]`}
          >
            Serving our <br />
            unhoused neighbors <br />
            where they are
          </div>
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
      <div></div>
    </main>
  );
}
