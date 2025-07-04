// import { useEffect } from "react";
import BaseButton from "@/components/BaseButton";
import Section from "@/components/Section";
import project1 from "@/assets/images/project1.png";
// import project2 from "@/assets/images/project2.png";
// import project3 from "@/assets/images/project3.png";
// import project4 from "@/assets/images/project4.png";
import service1 from "@/assets/images/service1.avif";
// import service2 from "@/assets/images/service2.avif";
// import service3 from "@/assets/images/service3.avif";
// import service4 from "@/assets/images/service4.avif";
// import service5 from "@/assets/images/service5.avif";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import { useGsap } from "@/hooks/useGsap";

// gsap.registerPlugin(ScrollTrigger);
const projects = [project1];
const services = [service1];

const links = [
  { url: "https://snap-camera-kit-web.vercel.app/", title: "SNAP" },
  { url: "https://model-viewer-tool-demo.vercel.app/", title: "MODEL-VIEWER" },
  { url: "https://product-showcase-demo.vercel.app/", title: "PICBOT-ANI" },
  {
    url: "https://guandu-dock-r3f-mindar.vercel.app/",
    title: "GUANDU-WITHOUT-EDITOR",
  },
];

const Hero: React.FC = () => {
  // useEffect(() => {
  //   ScrollTrigger.create({
  //     trigger: step,
  //     start: "top center",
  //     end: "bottom center",
  //     onEnter: () => {
  //       const imgEl = document.getElementById("hero-image") as HTMLImageElement;
  //       imgEl.src = images[index]; // 切換圖片來源
  //     },
  //     onEnterBack: () => {
  //       const imgEl = document.getElementById("hero-image") as HTMLImageElement;
  //       imgEl.src = images[index]; // 滾回也會切圖
  //     },
  //   });
  // }, []);

  // useGsap((gsap) => {
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".img-container",
  //       start: "top center",
  //       end: "+=100%",
  //       scrub: true,
  //       pin: true,
  //     },
  //   });

  //   const spacing = 300;
  //   tl.to(".hero-img", {
  //     opacity: 1,
  //     x: (i: number) => i * spacing - ((images.length - 1) * spacing) / 2,
  //     stagger: 0.1,
  //     ease: "power2.out",
  //   });
  // });

  return (
    <>
      {/* <div className="w-full h-[75vh] flex"> */}
      {/* <section className="w-full h-full flex flex-col justify-between items-center text-center">
        <h1 className="text-7xl font-extrabold">SPEED 3D INC.</h1>
        <h2 className="text-5xl font-bold">
          AI Retail. <br /> Smart 3D Vision. <br /> Real Engagement.
        </h2>
        <p className="text-4xl">
          From face to frame, our tech powers intelligent vision, interaction,
          and image creation.
        </p>
        <BaseButton className="bg-secondary text-black font-semibold">
          Send Your Request
        </BaseButton>
      </section>

      <section className="w-full h-full flex justify-center items-center">
        <img src={a} alt="Hero Image" className="w-full h-full object-cover" />
      </section> */}

      <Section
        pin
        className="w-full h-full sticky top-0 flex flex-col sm:flex-row"
      >
        <div className="w-full h-full flex flex-col justify-center items-center space-y-12">
          <h1 className="text-7xl font-extrabold text-center" data-img="a.avif">
            SPEED 3D INC.
          </h1>
          <h2
            className="text-5xl font-bold text-center italic"
            data-img="b.avif"
          >
            AI Retail. <br /> Smart 3D Vision. <br /> Real Engagement.
          </h2>
          <p className="text-3xl text-center italic" data-img="c.avif">
            From face to frame, our tech powers intelligent vision, interaction,
            and image creation.
          </p>
          <BaseButton className="w-1/3 bg-secondary text-black font-semibold">
            Send Your Request
          </BaseButton>
        </div>

        <div className="w-full h-full flex">
          {projects.map((project, index) => (
            <img
              key={index}
              src={project}
              alt={`Hero Image ${index + 1}`}
              className="w-full h-full object-cover rounded-lg transition-all duration-500"
            />
          ))}
        </div>
      </Section>

      <Section className="gap-8 w-full h-[100dvh] flex flex-col sm:flex-row justify-center items-center">
        {links.map((link) => (
          <div
            key={link.url}
            className="w-full h-[300px] flex flex-col items-center"
          >
            <a
              href={link.url}
              className="w-full h-full border-b rounded-xl shadow-xl text-white"
              target="_blank"
              rel="noopener noreferrer"
            />
            <div className="mt-2 text-lg font-bold">{link.title}</div>
          </div>
        ))}
      </Section>

      {/* services part */}
      <Section className="gap-8 w-full h-[100dvh] flex flex-col sm:flex-row justify-center items-center">
        <div className="w-full h-full flex">
          {services.map((service, index) => (
            <img
              key={index}
              src={service}
              alt={`Hero Image ${index + 1}`}
              className="w-full h-full object-cover rounded-lg transition-all duration-500"
            />
          ))}
        </div>
      </Section>
    </>
  );
};

export default Hero;
