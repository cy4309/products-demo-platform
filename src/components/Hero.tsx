import BaseButton from "@/components/BaseButton";
import a from "@/assets/images/a.avif";

const Hero: React.FC = () => {
  return (
    <div className="w-full h-[75vh] flex">
      <section className="w-full h-full flex flex-col justify-between items-center text-center">
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
      </section>
    </div>
  );
};

export default Hero;
