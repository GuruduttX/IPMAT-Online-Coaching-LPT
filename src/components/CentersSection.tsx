import { MapPin, Phone } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const centers = [
  {
    name: "South Delhi",
    address: "Second Floor, 14, near Vadilal Hangout, Kaushaiya Park, Hauz Khas, New Delhi, Delhi 110016",
    phone: "+91-9217577446",
    mapUrl: "https://share.google/CUjDORk4Qr8Ql6ldo",
  },
  {
    name: "Gurugram",
    address: "M-35, Second Floor, above HDFC Bank, Block M, Old DLF Colony, Sector 14, Gurugram, Haryana 122007",
    phone: "+91-9217577448",
    mapUrl: "https://share.google/pFc7tZ6wbwfal4JNG",
  },
  {
    name: "North Delhi",
    address: "Metro Gate No. 1, upstairs Bank of Baroda, 73-75, Ring Road, Mall Road, GTB Nagar, New Delhi, Delhi 110033",
    phone: "+91-9217577445",
    mapUrl: "https://share.google/HDrAGmo4vPeISJGET",
  },
  {
    name: "Noida",
    address: "Ground Floor, Sandesh Tower, C-56/31, C Block, Phase 2, Sector 62, Noida, Uttar Pradesh 201309",
    phone: "+91-9217577449",
    mapUrl: "https://share.google/SDz2XmdpiUzCQyND1",
  },
];

const CentersSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="centers" className="bg-[#F7F8FA] py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-[26px] font-bold text-[#36344D] md:text-[32px]">
            Visit Our Centers Across Delhi NCR
          </h2>
          <p className="mx-auto mt-3 max-w-[520px] text-[15px] text-[#727586]">
            Walk in for a free counselling session at any of our 4 centers.
          </p>
        </div>

        <div ref={ref} className="fade-in-up grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {centers.map((c, i) => (
            <div
              key={i}
              className="group flex flex-col rounded-xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:border-[#C41E3A]/20 hover:shadow-card-hover"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-red-50">
                <MapPin className="h-5 w-5 text-[#C41E3A]" />
              </div>
              <h3 className="text-[17px] font-bold text-[#36344D]">{c.name}</h3>
              <p className="mt-2 flex-1 text-[13px] leading-relaxed text-[#727586]">
                {c.address}
              </p>
              <a
                href={`tel:${c.phone.replace(/-/g, "")}`}
                className="mt-4 inline-flex items-center gap-2 text-[14px] font-semibold text-[#C41E3A] hover:underline"
              >
                <Phone className="h-3.5 w-3.5" />
                {c.phone}
              </a>
              <a
                href={c.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-[13px] font-medium text-[#727586] hover:text-[#36344D] hover:underline"
              >
                Get Directions ↗
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CentersSection;
