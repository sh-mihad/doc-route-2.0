import AboutUs from "../../compontents/AboutUs/AboutUs";
import Appoienment from "../../compontents/Appoienment/Appoienment";
import Branding from "../../compontents/Branding/Branding";
import ContactUs from "../../compontents/ContactUs/ContactUs";
import Faq from "../../compontents/FAQ/Faq";
import Header from "../../compontents/Header/Header";
import HowItWorks from "../../compontents/HowItWorks/HowItWorks";
import Service from "../../compontents/Service/Service";
import Testimonial from "../../compontents/Testimonila/Testimonial";

const Home = () => {
  return (
    <section>
      <Header />
      <Service />
      <Branding />
      <AboutUs />
      <Appoienment />
      <HowItWorks />
      <Testimonial />
      <Faq />
      <ContactUs />
    </section>
  );
};

export default Home;
