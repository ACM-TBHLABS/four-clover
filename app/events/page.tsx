import FAQSection from "@/components/sections/landing/FAQSection";
import WorkshopComponent from "./WorkshopPage"; // see below

export default function WorkshopPageComponent() {
  return (
    <div className="w-full flex flex-col items-center justify-center overflow-x-hidden">
      <div className="w-full max-w-screen md:max-w-[1600px]">
        <WorkshopComponent />
        <FAQSection /> {/* ✅ This stays as a Server Component */}
      </div>
    </div>
  );
}
