import { useRef } from "react";
import BaseButton from "@/components/BaseButton";
import Section from "@/components/Section";
import project1 from "@/assets/images/project1.png";
import project2 from "@/assets/images/project2.png";
import project3 from "@/assets/images/project3.png";
import project4 from "@/assets/images/project4.png";
import service1 from "@/assets/images/service1.avif";
import service2 from "@/assets/images/service2.avif";
import service3 from "@/assets/images/service3.avif";
import service4 from "@/assets/images/service4.avif";
import banner from "@/assets/images/banner.avif";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
import { useGsap } from "@/hooks/useGsap";

const projects = [project1, project2, project3, project4];
const services = [service1, service2, service3, service4];

const links = [
  { url: "https://snap-camera-kit-web.vercel.app/", title: "SNAP" },
  { url: "https://model-viewer-tool-demo.vercel.app/", title: "MODEL-VIEWER" },
  { url: "https://product-showcase-demo.vercel.app/", title: "PICBOT-ANI" },
  {
    url: "https://guandu-dock-r3f-mindar.vercel.app/",
    title: "GUANDU",
  },
];

const servicesLinks = [
  {
    url: "https://www.youtube.com/watch?v=DLA8f9Xlnlw&feature=youtu.be",
    title: "AI Virtual Studio",
    content:
      "Bring fans closer to their idols with real-time, ultra-realistic virtual set creation—no green screen required.",
  },
  {
    url: "https://www.spe3d.co/blog/categories/3d-picbot",
    title: "3D Picbot",
    content:
      "Engage audiences through immersive AR on LCD panels, while L-shaped mini-billboards project stunning 3D anamorphic content—perfect for pop-up activations.",
  },
  {
    url: "https://www.youtube.com/watch?v=hr88qbO8nrY&feature=youtu.be",
    title: "iMorph",
    content:
      "Seamlessly transfer 3D anamorphic videos between displays, slashing content-transfer costs and streamlining your creative workflow.",
  },
  {
    url: "https://www.spe3d.co/post/global-beauty-industry-ai-revolution-speed-3d-s-smart-beauty-vending-machine-partners-with-maybelli",
    title: "Smart Beauty Vending Machine",
    content:
      "Try Now, Buy Now. Speed 3D's Smart Beauty Vending Machine partners with Qualcomm tech and Maybelline products through instant AR try-on and AI-powered recommendations.",
  },
];

const Hero: React.FC = () => {
  const imageRefs = useRef<HTMLImageElement[]>([]);
  const linkRefs = useRef<HTMLAnchorElement[]>([]);

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

  // 你可以也先 clear 避免 React 重複掛載
  imageRefs.current = [];
  linkRefs.current = [];

  const setImageRef = (el: HTMLImageElement | null) => {
    if (el) imageRefs.current.push(el);
  };
  const setLinkRef = (el: HTMLAnchorElement | null) => {
    if (el) linkRefs.current.push(el);
  };

  //
  useGsap((gsap) => {
    imageRefs.current.forEach((img, i) => {
      const offsetX =
        i === 0
          ? "-65vw"
          : i === 1
          ? "-90vw"
          : i === 2
          ? "-113vw"
          : i === 3
          ? "-138vw"
          : 0;
      const offsetY = "85vh";

      // @ts-ignore
      gsap.fromTo(
        img,
        {
          x: 0,
          y: 0,
          scale: 1,
          opacity: 1,
        },
        {
          x: offsetX,
          y: offsetY,
          scale: 0.4,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: linkRefs.current[i],
            start: "top center+=80",
            end: "bottom center",
            // start: "top center",
            // end: "bottom center",
            scrub: true,
          },
        }
      );
    });

    return () => {};
  });

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

        <div className="w-full h-full flex flex-col sm:flex-row">
          {projects.map((project, index) => (
            <img
              style={{ willChange: "transform, opacity" }}
              key={index}
              src={project}
              alt={`Hero Image ${index + 1}`}
              className="w-full h-full object-cover rounded-lg transition-all duration-500"
              ref={setImageRef}
            />
          ))}
        </div>
      </Section>

      <Section className="gap-8 w-full h-[100dvh] flex flex-col sm:flex-row justify-center items-center">
        {links.map((link) => (
          <div
            key={link.url}
            className="z-10 w-full h-[300px] flex flex-col items-center"
          >
            <a
              href={link.url}
              className="w-full h-full border-b rounded-xl shadow-xl text-white"
              target="_blank"
              rel="noopener noreferrer"
              ref={setLinkRef}
            />
            <div className="mt-2 text-lg font-bold">{link.title}</div>
          </div>
        ))}
      </Section>

      {/* services part */}
      <div className="w-full h-full flex flex-col">
        <h2 className="text-5xl font-bold text-center mb-8">
          OUR KEY PRODUCTS
        </h2>
        {services.map((service, index) => (
          <Section
            key={index}
            pin
            className="gap-8 w-full flex flex-col sm:flex-row justify-center items-center"
          >
            <div className="p-8 w-full h-full flex flex-col justify-center items-center">
              <strong className="py-16 text-3xl">
                {servicesLinks[index].title}
              </strong>
              <div className="w-full h-full flex flex-col sm:flex-row justify-start items-center">
                <div className="w-full h-full flex flex-col justify-center items-start space-y-4">
                  <p>{servicesLinks[index].content}</p>
                  <BaseButton
                    onClick={() =>
                      window.open(servicesLinks[index].url, "_blank")
                    }
                    className="bg-secondary text-black font-semibold"
                  >
                    Learn More
                  </BaseButton>
                </div>

                {index === 1 || index === 3 ? (
                  <img
                    src={service}
                    alt={`Hero Image ${index + 1}`}
                    className="w-full h-[50dvh] object-cover rounded-lg transition-all duration-500"
                  />
                ) : index === 0 ? (
                  <iframe
                    src="https://www.youtube.com/embed/oNvXEuujVzo?autoplay=1&mute=1"
                    allow="autoplay; encrypted-media;"
                    className="w-full min-h-[50dvh] object-cover rounded-lg transition-all duration-500"
                  />
                ) : (
                  <iframe
                    src="https://www.youtube.com/embed/AD5nrbxBVjo?autoplay=1&mute=1"
                    allow="autoplay; encrypted-media;"
                    className="w-full min-h-[50dvh] object-cover rounded-lg transition-all duration-500"
                  />
                )}
              </div>
            </div>
          </Section>
        ))}
        <img src={banner} alt="Banner" />
      </div>
    </>
  );
};

export default Hero;
