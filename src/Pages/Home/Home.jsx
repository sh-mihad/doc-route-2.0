import AboutUs from "../../compontents/AboutUs/AboutUs";
import Appoienment from "../../compontents/Appoienment/Appoienment";
import Branding from "../../compontents/Branding/Branding";
import Header from "../../compontents/Header/Header";
import HowItWorks from "../../compontents/HowItWorks/HowItWorks";
import Service from "../../compontents/Service/Service";

const Home = () => {
  return (
    <section>
      <Header />
      <Service />
      <Branding />
      <AboutUs />
      <Appoienment />
      <HowItWorks />
    </section>
  );
};

export default Home;
