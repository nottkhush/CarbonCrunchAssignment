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
      <div className={`${clashDisplay.className} w-full pl-33.5 pr-33.5 pt-11 pb-4`}>
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
      </div>
      <FooterPage/>
    </>
  );
}
