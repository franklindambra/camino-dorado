import React from "react";
import Link from "next/link";

export default function CTA() {
  return (
    <Link
      href="#contact"
      className="orangeBg rounded p-4 text-white hover:-translate-y-0.75 transition-all duration-300 shadow-lg"
    >
      Get In Touch
    </Link>
  );
}
