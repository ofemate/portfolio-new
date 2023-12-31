import { ChevronRight } from "lucide-react";
import React from "react";

type Props = {};

const AboutSkills = (props: Props) => {
  const skills = [
    "Kurumsal Kimlik",
    "Logo",
    "Sosyal Medya Yönetimi",
    "Banner",
    "Reklam Tasarımı",
    "Web Tasarım",
    "Ambalaj Tasarımı",
    "Ürün Fotoğraf Çekimi",
  ];
  return (
    <div className="gradientBg w-full">
      <div className=" text-white p-6 lg:p-24">
        <h2 className="text-[#F7F7F7] text-5xl lg:text-7xl font-semibold">
          Neler <br /> Yapıyorum?
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:w-1/2">
          {skills.map((skill, index) => (
            <p
              className="text-[#F7F7F7] lg:text-2xl text-lg flex items-center gap-2"
              key={index}
            >
              <ChevronRight className="text-[#6100A5]" /> {skill}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSkills;
