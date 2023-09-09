"use client";
import { Main } from "@/components/sections/main/Main";
import { SecondSection } from "@/components/sections/SecondSection/SecondSection";
import { FirstSection } from "@/components/sections/FirstSection/FirstSection";
import { Footer } from "@/components/layouts/Footer/Footer";
import { Header } from "@/components/layouts/header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <FirstSection />
      <SecondSection />
      <Footer id="footer" />
    </>
  );
}
