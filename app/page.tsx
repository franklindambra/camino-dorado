import CTA from "../components/CTA";
import ServicesAccordion from "../components/ServicesAccordion";
import { airbnbArbitrage, cohosting } from "./services";
import { HomeIcon, PersonIcon } from "@radix-ui/react-icons";
import ContactForm from "../components/ContactForm";
import ImageRow from "../components/ImageRow";
import BeamsBackground from "@/components/kokonutui/beams-background";

export default function Home() {
  return (
    <>
      <ImageRow backgroundImage={"/images/house3.jpg"} />
      <div className="flex flex-col items-center justify-center py-20 px-5">
        <h2 className="text-center">Welcome to</h2>
        <h2 className="text-2xl mb-5 text-center">Camino Dorado Stays</h2>
        <h1 className="text-5xl text-center leading-15 mb-6">
          Your Partner in Effortless<br></br>Short-Term Rental Success
        </h1>
        <hr className="w-75  mb-10"></hr>
        <p className="mb-10 max-w-120 text-center">
          Transform your property into a thriving income stream without the
          hassle. We specialize in Airbnb arbitrage and co-hosting, handling
          everything from setup to daily operations so you can relax and earn.
        </p>
        <CTA />
      </div>
      <ImageRow backgroundImage={"/images/house1.jpg"} />
      <div className="flex flex-col items-center justify-center py-20 px-5">
        <h1 className="text-5xl text-center leading-15 mb-6">
          Why Partner with Us for<br></br>Airbnb Arbitrage & Co-Hosting?
        </h1>
        <hr className="w-75 mb-10"></hr>
        <p className="mb-5 max-w-200 text-center">
          At Camino Dorado Stays, we bridge the gap between property owners and
          the lucrative world of short-term rentals. Whether you're interested
          in arbitrage (where we lease your property long-term and manage
          short-term bookings for mutual profit) or co-hosting (where we handle
          the day-to-day management of your existing listing), our expertise
          ensures maximum returns with minimal risk. confidence.
        </p>
        <p className="mb-10 max-w-200 text-center">
          We understand your concerns: property wear and tear, legal compliance,
          guest issues, and fluctuating markets. That's why our approach is
          built on transparency, protection, and proven results.
        </p>
        <p className="text-2xl mb-5 text-center">
          Let's turn your questions into confidence.
        </p>
        <CTA />
      </div>
      <ImageRow backgroundImage={"/images/house2.jpg"} />
      <div className="max-w-300 w-full mx-auto px-5 flex flex-col px-5 py-20">
        <h2 className="text-5xl mb-6 text-center">
          Services Tailored for <br></br>Property Owners Like You
        </h2>
        <div className="flex justify-center">
          <hr className="w-75 mb-6"></hr>
        </div>
        <div className="flex justify-center">
          <p className="text-center mb-20 max-w-100">
            No matter the model, we prioritize your peace of mind with vetted
            guests, comprehensive insurance, and 24/7 support
          </p>
        </div>

        <div className="mb-10">
          <div className="flex flex-col items-center mb-5">
            <HomeIcon className="w-8 h-8 mb-2" />
            <h1 className="text-2xl text-center">Airbnb Arbitrage</h1>
          </div>
          <ServicesAccordion data={airbnbArbitrage} />
        </div>
        <div>
          <div className="flex flex-col items-center mb-5">
            <PersonIcon className="w-8 h-8 mb-2" />
            <h1 className="text-2xl text-center">Co-Hosting</h1>
          </div>
          <ServicesAccordion data={cohosting} />
        </div>
      </div>

      <BeamsBackground>
        <p className="text-5xl text-center mb-5">
          Ready to Get Started?<br></br> Let's Chat.
        </p>
        <div className="flex justify-center mb-10">
          <p className="text-center max-w-200">
            Whether you're curious about arbitrage, need co-hosting support, or
            want to review a sample business agreement, our team is here to
            help. Schedule a no-obligation call today and discover how Camino
            Dorado Stays can elevate your property.
          </p>
        </div>
        <ContactForm />
      </BeamsBackground>
    </>
  );
}
