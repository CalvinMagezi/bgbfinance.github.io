import About from "@/components/About";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import CoreValues from "@/components/CoreValues";
import Footer from "@/components/Footer";
import MobileNavbar from "@/components/MobileNavbar";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import ContactForm from "@/components/utils/ContactForm";
import Head from "next/head";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Head>
        <title>BGB Financial</title>
        <link rel="icon" href="/img/logo.jpeg" />
      </Head>
      <Navbar />
      <MobileNavbar />
      <Banner />
      <main className="w-full">
        <About />
        <Services />
        <CoreValues />
        <Contact />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
