import Image from "next/image";

export default function Footer() {
  return (
    <footer className="p-5 flex flex-col justify-center bg-neutral-100">
      <div className="flex flex-col items-center">
        <Image
          src={"/logo.png"}
          alt="Camino Dorado Stays Logo"
          height={50}
          width={50}
          className="mb-2 transition-all duration-300"
        />
        <p>Give us a call</p>
        <a href="tel:5129202175">512-920-2175</a>
      </div>
      <p className="text-xs opacity-70  text-right">
        <a target="_blank" href="https://www.dambrawebdesign.com">
          dambrawebdesign.com
        </a>
      </p>
    </footer>
  );
}
