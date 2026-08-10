import Header from "@/components/Header";
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
    </main>
  );
}
