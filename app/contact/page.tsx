import { poppins } from "@/app/layout";
import Image from "next/image";

export default function ContactPage() {
  return (
    <>
      {/* Background Gradient */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#050008] via-[#0b0615] to-[#020005]">
        {/* Top dark anchor */}
        <div className="absolute top-[-25%] left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-black/80 rounded-full blur-[220px]" />

        {/* Purple glow */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-purple-600/30 rounded-full blur-[160px]" />

        {/* Blue depth */}
        <div className="absolute top-1/2 left-1/4 w-[900px] h-[900px] bg-blue-900/30 rounded-full blur-[200px]" />

        {/* Fuchsia accent */}
        <div className="absolute bottom-0 right-20 w-[600px] h-[600px] bg-fuchsia-600/25 rounded-full blur-[160px]" />

        {/* Bottom darkness */}
        <div className="absolute bottom-[-30%] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-black/70 rounded-full blur-[220px]" />
      </div>

      {/* Contact Content */}
      <section
        className="
          mt-24 sm:mt-32 lg:mt-[100px]
          max-w-[1200px] mx-auto
          px-4 sm:px-6
          grid grid-cols-1 lg:grid-cols-2
          gap-12 lg:gap-50
          items-start
        "
      >
        {/* Left Content */}
        <div>
          <h1 className="text-[36px] sm:text-[48px] lg:text-[64px] font-semibold leading-[1] tracking-[1px] capitalize">
            Contact Us
          </h1>

          <p
            className={`${poppins.className} mt-4 lg:mt-[24px] max-w-[600px] text-[16px] lg:text-[18px] tracking-[0.016em] opacity-80`}
          >
            Have a question, feedback, or partnership idea? Reach out to us and
            we’ll get back to you as soon as possible.
          </p>

          {/* Form */}
          <form className="mt-12 lg:mt-[76px] max-w-[600px] space-y-6 lg:space-y-8">
            <input
              type="text"
              placeholder="Your Name"
              className="
                w-full rounded-md bg-white/10 px-6 py-4
                text-white placeholder-white/50
                outline-none focus:ring-2 focus:ring-purple-500
              "
            />

            <input
              type="email"
              placeholder="Your Email"
              className="
                w-full rounded-md bg-white/10 px-6 py-4
                text-white placeholder-white/50
                outline-none focus:ring-2 focus:ring-purple-500
              "
            />

            <textarea
              rows={5}
              placeholder="Your Message"
              className="
                w-full rounded-md bg-white/10 px-6 py-4
                text-white placeholder-white/50
                outline-none focus:ring-2 focus:ring-purple-500
              "
            />

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

        {/* Right Image */}
        <div className="flex justify-center lg:block">
          <Image
            src="/Contact.png"
            alt="Contact"
            width={600}
            height={600}
            className="
              rounded-3xl
              w-[280px] h-[280px]
              sm:w-[380px] sm:h-[380px]
              lg:w-[600px] lg:h-[600px]
            "
          />
        </div>
      </section>
    </>
  );
}
