import React from "react";
import Header from "../components/Header";
import Abouthero from "../components/aboutUS/Abouthero";
import Ourteamhero from "../components/aboutUS/Ourteamhero";
import Withushero from "../components/aboutUS/Withushero";
import Intrihero from "../components/aboutUS/Intrihero";
import Footer from "../components/Footer";
import NewsletterSection from "../components/NewsletterSection";

export default function Aboutus() {
  return (
    <div>
      <Abouthero></Abouthero>
      <Withushero></Withushero>
      <Intrihero></Intrihero>
      <Ourteamhero></Ourteamhero>
      <NewsletterSection />
      <Footer />
    </div>
  );
}
