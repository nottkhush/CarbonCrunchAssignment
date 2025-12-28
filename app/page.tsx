import { Navbar } from "@/components/Navbar";
import { clashDisplay } from "./layout";
import { Page1 } from "@/pages/page1";
import { Page2 } from "@/pages/page2";
import { Page3 } from "@/pages/page3";
import { Page4 } from "@/pages/page4";
import { Page5 } from "@/pages/page5";
import { FooterPage } from "@/components/FooterPage";

export default function Home() {
  return (
    <>
      <div
        className={`
          ${clashDisplay.className}
          w-full
          px-4 pt-6 pb-4           
          sm:px-6                  
          lg:pl-33.5 lg:pr-[120px] lg:pt-9 lg:pb-4   
          xl:pl-33.5 xl:pr-[160px] xl:pt-9 xl:pb-4
        `}
      >
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
      </div>

      <FooterPage />
    </>
  );
}
