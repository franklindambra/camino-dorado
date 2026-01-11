"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactSchema, ContactFormValues } from "@/lib/schema";

import { toast } from "react-hot-toast";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(ContactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify(data),
    });
    reset();
    toast.success("Message sent successfully!");
  };

  const inputClass =
    "w-full border border-gray-300 bg-transparent p-2 outline-none bg-white rounded";
  const labelClass = "block mb-1 text-left opacity-70";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto p-8 md:p-10 bg-white shadow-lg rounded-lg w-full md:max-w-400"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
        {/* Left Column: Stacked Inputs */}
        <div className="space-y-4">
          <div>
            <label className={labelClass}>First Name *</label>
            <input {...register("firstName")} className={inputClass} />
          </div>

          <div>
            <label className={labelClass}>Last Name *</label>
            <input {...register("lastName")} className={inputClass} />
          </div>

          <div>
            <label className={labelClass}>Email *</label>
            <input type="email" {...register("email")} className={inputClass} />
          </div>

          <div>
            <label className={labelClass}>Phone Number *</label>
            <input type="tel" {...register("phone")} className={inputClass} />
          </div>

          <div className="pt-2">
            <label className={labelClass}>Type of Property: *</label>
            <div className="space-y-2 mt-2">
              {[
                "Apartment Building",
                "Condominium",
                "Single-Family Home",
                "Multi-Family Home",
              ].map((type) => (
                <label
                  key={type}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    value={type}
                    {...register("propertyType")}
                    className="accent-[#1A4D3E] w-4 h-4"
                  />
                  <span className="text-sm">{type}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Location & Details */}
        <div className="flex flex-col">
          <div className="mb-4">
            <label className={labelClass}>Location of Property *</label>
            <input
              {...register("location")}
              placeholder="City, State, etc."
              className={inputClass}
            />
          </div>

          <div className="flex-grow flex flex-col">
            <label className={labelClass}>Any other details:</label>
            <textarea
              {...register("details")}
              placeholder="Leave us any important details or notes..."
              className={`${inputClass} flex-grow min-h-[300px] resize-none`}
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full mt-8 orangeBg text-white py-3 font-medium transition-all duration-300 cursor-pointer rounded"
      >
        {isSubmitting ? "Sending..." : "Submit"}
      </button>
    </form>
  );
}
