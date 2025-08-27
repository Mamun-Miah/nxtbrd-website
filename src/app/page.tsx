import About from "@/components/ui/Home/About";
import Banner from "@/components/ui/Home/Banner";
import Blogs from "@/components/ui/Home/Blogs";
import Contact from "@/components/ui/Home/Contact";
import Services from "@/components/ui/Home/Services";
import Sponsored from "@/components/ui/Home/Sponsored";
import Team from "@/components/ui/Home/Team";
import Testimonials from "@/components/ui/Home/Testimonials";
import WorkProcess from "@/components/ui/Home/WorkProcess";

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Services />
      <Team />
      <Testimonials />
      <Sponsored />
      <Blogs />
      <WorkProcess />
      <Contact />
    </>
  );
};

export default Home;
