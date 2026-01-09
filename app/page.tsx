import Image from "next/image";
import CTA from "./components/CTA";
import ServicesAccordion from "./components/ServicesAccordion";
import { airbnbArbitrage, cohosting } from "./services";
import { HomeIcon, PersonIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <>
      <div className="w-full h-[400px] bg-red-400"></div>
      {/* */}
      <div className="flex flex-col items-center justify-center py-20">
        <h2 className="text-2xl mb-5">Welcome to Camino Dorado Stays</h2>
        <h1 className="text-5xl text-center leading-15 mb-6">
          Your Partner in Effortless Short-Term Rental Success
        </h1>
        <hr className="w-75  mb-10"></hr>
        <p className="mb-10 max-w-120 text-center">
          Transform your property into a thriving income stream without the
          hassle. We specialize in Airbnb arbitrage and co-hosting, handling
          everything from setup to daily operations so you can relax and earn.
        </p>
        <CTA />
      </div>
      <div className="w-full h-[400px] bg-red-400"></div>
      <div className="flex flex-col items-center justify-center py-20">
        <h1 className="text-5xl text-center leading-15 mb-6">
          Why Partner with Us for Airbnb Arbitrage & Co-Hosting?
        </h1>
        <hr className="w-75 mb-10"></hr>
        <p className="mb-5 max-w-300 text-center">
          At Camino Dorado Stays, we bridge the gap between property owners and
          the lucrative world of short-term rentals. Whether you're interested
          in arbitrage (where we lease your property long-term and manage
          short-term bookings for mutual profit) or co-hosting (where we handle
          the day-to-day management of your existing listing), our expertise
          ensures maximum returns with minimal risk. confidence.
        </p>
        <p className="mb-10 max-w-300 text-center">
          We understand your concerns: property wear and tear, legal compliance,
          guest issues, and fluctuating markets. That's why our approach is
          built on transparency, protection, and proven results.
        </p>
        <p className="text-2xl mb-5">
          Let's turn your questions into confidence.
        </p>
        <CTA />
      </div>
      <div className="w-full h-[400px] bg-red-400"></div>
      <div className="max-w-300 w-full mx-auto px-5 flex flex-col px-5 py-20">
        <h2 className="text-5xl mb-10 text-center">
          Services Tailored for Property Owners Like You
        </h2>
        <div className="mb-10">
          <div className="flex flex-col items-center mb-5">
            <HomeIcon className="w-12 h-12 mb-2" />
            <h1 className="text-2xl text-center">Airbnb Arbitrage</h1>
          </div>
          <ServicesAccordion data={airbnbArbitrage} />
        </div>
        <div>
          <div className="flex flex-col items-center mb-5">
            <PersonIcon className="w-12 h-12 mb-2" />
            <h1 className="text-2xl text-center">Co-Hosting</h1>
          </div>
          <ServicesAccordion data={cohosting} />
        </div>
      </div>
      <div id="contact" className="w-full h-[400px] bg-red-400">
        <h1>Get in touch</h1>
      </div>
    </>
  );
}
