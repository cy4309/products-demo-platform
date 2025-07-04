import { useEffect, useRef } from "react";
// import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

interface SectionProps {
  children: React.ReactNode;
  pin?: boolean;
  className?: string;
  id?: string;
}

const Section: React.FC<SectionProps> = ({
  children,
  pin = false,
  className = "",
  id,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (pin && sectionRef.current) {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "",
        pin: true,
        pinSpacing: true,
      });
    }
  }, [pin]);

  return (
    <section ref={sectionRef} className={`w-full ${className}`} id={id}>
      {children}
    </section>
  );
};

export default Section;
