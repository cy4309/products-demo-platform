import icon1 from "@/assets/images/icons/icon1.avif";
import icon2 from "@/assets/images/icons/icon2.avif";
import icon3 from "@/assets/images/icons/icon3.avif";
import icon4 from "@/assets/images/icons/icon4.avif";
import icon5 from "@/assets/images/icons/icon5.avif";
import icon6 from "@/assets/images/icons/icon6.avif";
import icon7 from "@/assets/images/icons/icon7.avif";
import icon8 from "@/assets/images/icons/icon8.avif";
import icon9 from "@/assets/images/icons/icon9.avif";
import icon10 from "@/assets/images/icons/icon10.avif";
import icon11 from "@/assets/images/icons/icon11.avif";
import icon12 from "@/assets/images/icons/icon12.avif";
import icon13 from "@/assets/images/icons/icon13.avif";
import icon14 from "@/assets/images/icons/icon14.avif";
import icon15 from "@/assets/images/icons/icon15.avif";

const icons = [
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  icon6,
  icon7,
  icon8,
  icon9,
  icon10,
  icon11,
  icon12,
  icon13,
  icon14,
  icon15,
];

const Sponsors = () => {
  return (
    <section className="w-full overflow-hidden py-8">
      <div className="animate-marquee flex whitespace-nowrap gap-12">
        {icons.concat(icons).map((icon, idx) => (
          <img
            key={idx}
            src={icon}
            alt={`Sponsor ${idx + 1}`}
            className="object-contain"
          />
        ))}
      </div>
    </section>
  );
};

export default Sponsors;
