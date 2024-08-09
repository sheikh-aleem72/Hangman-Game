import Level1 from "../../assets/Images/tree1.webp";
import Level2 from "../../assets/Images/tree2.webp";
import Level3 from "../../assets/Images/tree3.webp";
import Level4 from "../../assets/Images/tree4.webp";
import Level5 from "../../assets/Images/tree5.webp";
import Level6 from "../../assets/Images/tree6.webp";
import Level7 from "../../assets/Images/tree7.webp";
import Level8 from "../../assets/Images/tree8.webp";

function HangMan({ step }) {
  const images = [
    Level1,
    Level2,
    Level3,
    Level4,
    Level5,
    Level6,
    Level7,
    Level8,
  ];
  return (
    <>
      {
        <img
          className="h-[95%] w-[95%]"
          src={step >= images.length ? images[images.length - 1] : images[step]}
        />
      }
    </>
  );
}

export default HangMan;
