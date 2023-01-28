import React from "react";
import Image from "next/image";

import galaxyprojectImage from "../assets/images/open-source/galaxyproject.jpg";
import layerImage from "../assets/images/open-source/layer5.png";
import outreachyImage from "../assets/images/open-source/outreachy.png";

const opensourcedata = [
  {
    id: 0,
    name: "Open Science Community Saudia Arabia",
    description: "Outreachy Internship.",
    link: "https://osc-ksa.com/",
    images: outreachyImage,
  },
  {
    id: 1,
    name: "Galaxy Community",
    description: "Contributed in reviewing training materials.",
    link: "https://usegalaxy.org/",
    images: galaxyprojectImage,
  },
  {
    id: 2,
    name: "Layer5",
    description:
      "Contributed in developing the Community Handbook Documentation.",
    link: "https://layer5.io/",
    images: layerImage,
  },
];

function OpenSource() {
  return (
    <div className="text-center">
      <div className="my-8 flex justify-center text-justify flex-wrap gap-10">
        {opensourcedata.map((item) => {
          return (
            <a
              key={item.id}
              className="hover:scale-110 hover:transition duration-300 ease-out w-[20rem] rounded-lg my-6 bg-secondary shadow-lg shadow-gray-500/50 border-red"
              href={item.link}
              rel="noreferrer"
              target="_blank"
            >
              <Image
                src={item.images}
                alt="blog-images"
                width={600}
                height={500}
                layout="responsive"
                objectFit="cover"
                quality={100}
                placeholder="blur"
                blurDataURL="https://media.tenor.com/UnFx-k_lSckAAAAC/amalie-steiness.gif"
                className="rounded-t-lg "
              />
              <div className="p-6 ">
                <h2 className="text-base text-white font-bold">{item.name}</h2>
                {/* <hr/> */}
                <p className="text-sm mt-2">{item.description}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default OpenSource;
