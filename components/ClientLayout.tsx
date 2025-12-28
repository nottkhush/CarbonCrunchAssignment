"use client";

import { Navbar } from "@/components/Navbar";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div
        className="
          w-full
          px-4 pt-6 pb-4
          sm:px-6
          lg:pl-33.5 lg:pr-[120px] lg:pt-9 lg:pb-4
          xl:pl-33.5 xl:pr-[160px] xl:pt-9 xl:pb-4
        "
      >
        <Navbar />
      </div>

      {children}
    </>
  );
}
