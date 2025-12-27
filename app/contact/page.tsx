import { poppins } from "@/app/layout";
import Image from "next/image";

export default function ContactPage() {
  return (
    <section className="mt-[200px] max-w-[1200px] mx-auto px-6 grid grid-cols-2 gap-50">
        <div>
             <h1 className="text-[64px] font-semibold leading-[1] tracking-[1px] capitalize">
        Contact Us
      </h1>

      <p
        className={`${poppins.className} mt-[24px] max-w-[600px] text-[18px] tracking-[0.016em] opacity-80`}
      >
        Have a question, feedback, or partnership idea? Reach out to us and
        we’ll get back to you as soon as possible.
      </p>

      {/* Form */}
      <form className="mt-[96px] max-w-[600px] space-y-8">
        {/* Name */}
        <input
          type="text"
          placeholder="Your Name"
          className="
            w-full rounded-md bg-white/10 px-6 py-4
            text-white placeholder-white/50
            outline-none focus:ring-2 focus:ring-purple-500
          "
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Your Email"
          className="
            w-full rounded-md bg-white/10 px-6 py-4
            text-white placeholder-white/50
            outline-none focus:ring-2 focus:ring-purple-500
          "
        />

        {/* Message */}
        <textarea
          rows={5}
          placeholder="Your Message"
          className="
            w-full rounded-md bg-white/10 px-6 py-4
            text-white placeholder-white/50
            outline-none focus:ring-2 focus:ring-purple-500
          "
        />

        {/* Button */}
        <button
          type="submit"
          className="
            inline-flex items-center justify-center
            rounded-md bg-white px-8 py-4
            font-semibold text-black
          "
        >
          Send Message
        </button>
      </form>
        </div>
        <Image src="/Contact.png" alt="Contact" width={600} height={600} className="w-[600px] h-[600px] rounded-3xl"/>
      {/* Heading */}
     
    </section>
  );
}
