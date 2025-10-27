import AnimatedColorBg from "@/components/share/AnimatedColorBg";
import About from "@/components/ui/Home/About";

import Blogs from "@/components/ui/Home/Blogs";
import Contact from "@/components/ui/Home/Contact";
import Hero from "@/components/ui/Home/Hero";
import Services from "@/components/ui/Home/Services";
import Sponsored from "@/components/ui/Home/Sponsored";
import Team from "@/components/ui/Home/Team";
import Testimonials from "@/components/ui/Home/Testimonials";
import WorkProcess from "@/components/ui/Home/WorkProcess";

export interface ShapeStyles {
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  transform?: string;
}
const Home = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Sections */}
      <div className="relative z-10 md:mt-20">
        <Hero />
        <About />
        <Services />
        <Team />
        <Testimonials />
        <Sponsored />
        <Blogs />
        <WorkProcess />
        <Contact />
      </div>

      {/* animated background */}
      <AnimatedColorBg />
    </div>
  );
};

export default Home;
