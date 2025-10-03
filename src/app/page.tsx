import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Partners from "@/components/Partners";
import Carousel from "@/components/Carousel";
import AboutQuickLinks from "@/components/AboutQuickLinks";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Services from "@/components/Services";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Carousel />
        <Services />
        <AboutQuickLinks />
        <Partners />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
