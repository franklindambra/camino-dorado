import Image from "next/image";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <>
      <div className="w-full h-[400px] bg-red-400"></div>
      {/* */}
      <div className="flex flex-col items-center justify-center py-20">
        <h2 className="text-2xl mb-5">APARTMENT BUILDING OPERATORS:</h2>
        <h1 className="text-5xl text-center leading-15 mb-6">
          ELIMINATE VACANCIES WITH QUALITY<br></br>CORPORATE HOUSING PARTNERS
        </h1>
        <hr className="w-75 border-2 mb-10"></hr>
        <p className="mb-10 max-w-120 text-center">
          Camino Dorado are a trusted extended stay partner with established
          relationships nationwide and high quality guests.
        </p>
        <p className="text-2xl mb-5">
          Lease us your vacancies. We'll handle the rest.
        </p>
        <CTA />
      </div>
      <div className="w-full h-[400px] bg-red-400"></div>
      <div className="flex flex-col items-center justify-center py-20">
        <h2 className="text-2xl mb-5">LANDLORDS:</h2>
        <h1 className="text-5xl text-center leading-15 mb-6">
          PASSIVE PROPERTIES, AT LAST.
        </h1>
        <hr className="w-75 border-2 mb-10"></hr>
        <p className="mb-10 max-w-120 text-center">
          Camino Dorado specializes in automating your rental property so that
          you can passively enjoy the benefits of your asset and fill your
          vacancies. Finally earn fixed income on your property.
        </p>
        <p className="text-2xl mb-5">
          No late payments, no phone calls, and no stress.
        </p>
        <CTA />
      </div>
      <div className="w-full h-[400px] bg-red-400"></div>
      <div className="flex flex-col items-center justify-center py-20">
        <h2 className="text-5xl mb-5">HOW IT WORKS</h2>
        <p className="mb-10 max-w-120 text-center">
          Camino Dorado leases your rental with you - just like a long-term
          tenant. We then clean, design, and furnish the unit while welcoming
          our short-term, screened guests. These include corporate, working, and
          traveling individuals that we manage.
        </p>
        <p>Here’s what this means for you:</p>
        {/* <div className="flex flex-col md:flex-row w-full justify-center">
          <div className="h-100 bg-green w-1/3">ds</div>
          <div className="h-100 bg-green w-1/3">d</div>
          <div className="h-100 bg-green w-1/3">d</div>
        </div> */}
      </div>
      <div id="contact" className="w-full h-[400px] bg-red-400">
        <h1>Get in touch</h1>
      </div>
    </>
  );
}
