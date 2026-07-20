import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";

const stats = [
  {
    display: <><CountUp value={12} suffix="+" /> yrs</>,
    label: "Leadership experience",
  },
  { display: "IIM-B", label: "MBA, Indian Institute of Management Bangalore" },
  { display: "KPMG · Shell", label: "Former HR Director" },
  {
    display: <><CountUp value={15000} suffix="+" /></>,
    label: "LinkedIn followers",
  },
];

export default function CredentialsStrip() {
  return (
    <ScrollReveal as="section" className="border-y hairline">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 md:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`hairline px-6 py-10 text-center md:px-8 ${
              i % 2 === 0 ? "border-r" : ""
            } ${i < 2 ? "border-b md:border-b-0" : ""} ${
              i !== 3 ? "md:border-r" : ""
            }`}
          >
            <p className="font-display text-2xl text-deep-brown sm:text-3xl">
              {stat.display}
            </p>
            <p className="mt-2 text-sm text-deep-brown/70">{stat.label}</p>
          </div>
        ))}
      </div>
    </ScrollReveal>
  );
}
