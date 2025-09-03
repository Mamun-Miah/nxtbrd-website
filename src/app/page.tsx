import About from "@/components/ui/Home/About";
import Banner from "@/components/ui/Home/Banner";
import Blogs from "@/components/ui/Home/Blogs";
import Contact from "@/components/ui/Home/Contact";
import Services from "@/components/ui/Home/Services";
import Sponsored from "@/components/ui/Home/Sponsored";
import Team from "@/components/ui/Home/Team";
import Testimonials from "@/components/ui/Home/Testimonials";
import WorkProcess from "@/components/ui/Home/WorkProcess";
// import NewShape from "@/components/ui/Shapes/NewShape";
// import NewShapeSm from "@/components/ui/Shapes/NewShapeSm";
import TealShape from "@/components/ui/Shapes/TealShape";
import TealTransparent from "@/components/ui/Shapes/TealTransparent";
import TealTransparentSm from "@/components/ui/Shapes/TealTransparentSm";
import YellowShape from "@/components/ui/Shapes/YellowShape";
import YellowShapeSm from "@/components/ui/Shapes/YellowShapeSm";

const Home = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Sections */}
      <Banner />
      <About />
      <Services />
      <Team />
      <Testimonials />
      <Sponsored />
      <Blogs />
      <WorkProcess />
      <Contact />

      {/* Background Effects */}
      {/* left side */}

      {/* Banner */}
      <TealTransparent
        styles={{ left: -10, top: "5%", transform: "rotate(-145.44deg)" }}
      />
      <YellowShape
        styles={{ left: 0, top: "7%", transform: "rotate(-145.44deg)" }}
      />
      <TealTransparent
        styles={{ left: "20%", top: "10%", transform: "rotate(-145.44deg)" }}
      />

      {/* Who we are */}
      <TealTransparent
        styles={{ left: "18%", top: "14%", transform: "rotate(-45.44deg)" }}
      />
      <YellowShape
        styles={{ left: "10%", top: "14%", transform: "rotate(-45.44deg)" }}
      />

      {/* services */}
      <TealTransparent
        styles={{ left: "-10%", top: "20%", transform: "rotate(-45.44deg)" }}
      />
      <YellowShape
        styles={{ left: "-20%", top: "20%", transform: "rotate(-45.44deg)" }}
      />
      <TealTransparent
        styles={{ left: "-10%", top: "22%", transform: "rotate(-35deg)" }}
      />
      <TealTransparent
        styles={{ left: "-10%", top: "24%", transform: "rotate(-35deg)" }}
      />
      <TealTransparent
        styles={{ left: "-10%", top: "26%", transform: "rotate(-35deg)" }}
      />
      <YellowShape
        styles={{ left: "-10%", top: "30%", transform: "rotate(-35deg)" }}
      />
      <YellowShape
        styles={{ left: "-10%", top: "32%", transform: "rotate(-35deg)" }}
      />
      <TealShape
        styles={{ left: "-10%", top: "34%", transform: "rotate(-35deg)" }}
      />
      <TealShape
        styles={{ left: "-10%", top: "36%", transform: "rotate(-35deg)" }}
      />
      <TealTransparent
        styles={{ left: "0", top: "40%", transform: "rotate(45deg)" }}
      />
      <TealTransparent
        styles={{ left: "12%", top: "40%", transform: "rotate(45deg)" }}
      />

      <YellowShapeSm
        styles={{ left: "42%", top: "42%", transform: "rotate(-25deg)" }}
      />
      <TealTransparent
        styles={{ left: "-10%", top: "52%", transform: "rotate(-25deg)" }}
      />
      <YellowShape
        styles={{ left: "10%", top: "52%", transform: "rotate(100deg)" }}
      />
      <TealTransparentSm
        styles={{ left: "50%", top: "52%", transform: "rotate(0deg)" }}
      />
      <TealTransparent
        styles={{ left: "-10%", top: "68%", transform: "rotate(45deg)" }}
      />
      <TealTransparent
        styles={{ left: "-10%", top: "70%", transform: "rotate(-45deg)" }}
      />
      <YellowShape
        styles={{ left: "-10%", top: "72%", transform: "rotate(20deg)" }}
      />
      <YellowShape
        styles={{ left: "5%", top: "78%", transform: "rotate(100deg)" }}
      />
      <TealTransparent
        styles={{ left: "15%", top: "75%", transform: "rotate(100deg)" }}
      />
      <TealTransparent
        styles={{ left: "-10%", top: "85%", transform: "rotate(110deg)" }}
      />
      <YellowShape
        styles={{ left: "-14%", top: "85%", transform: "rotate(110deg)" }}
      />

      {/* right side */}
      <TealTransparent
        styles={{ right: 10, top: "2%", transform: "rotate(-75.28deg)" }}
      />
      <TealShape
        styles={{ right: 10, top: "4%", transform: "rotate(-30.28deg)" }}
      />
      <YellowShape
        styles={{ right: 10, top: "6%", transform: "rotate(-30.28deg)" }}
      />
      <TealTransparent
        styles={{ right: 0, top: "7%", transform: "rotate(40deg)" }}
      />
      <TealTransparent
        styles={{ right: "-26px", top: "6%", transform: "rotate(50deg)" }}
      />
      <TealTransparent
        styles={{ right: "-10%", top: "40%", transform: "rotate(-30deg)" }}
      />
      <YellowShape
        styles={{ right: "-10%", top: "42%", transform: "rotate(-30deg)" }}
      />
      <YellowShape styles={{ right: "0", top: "52%" }} />
      <TealTransparent styles={{ right: "0", top: "55%" }} />

      <TealTransparent
        styles={{ right: "0", top: "64%", transform: "rotate(-30deg)" }}
      />
      <YellowShape
        styles={{ right: "0", top: "66%", transform: "rotate(-30deg)" }}
      />
    </div>
  );
};

export default Home;
