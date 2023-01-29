import React from "react";
import Image from "next/image";

export default function OpenSource({ opensourcedata }) {
  return (
    <div className="text-center">
      <div className="my-8 flex justify-center text-justify flex-wrap gap-10">
        {opensourcedata.map((item) => {
          return (
            <a
              key={item._id}
              className="hover:scale-110 hover:transition duration-300 ease-out w-[20rem] rounded-lg my-6 bg-secondary shadow-lg shadow-gray-500/50 border-red"
              href={item.link}
              rel="noreferrer"
              target="_blank"
            >
              <Image
                src={item.imageUrl}
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

                <p className="text-sm mt-2">{item.description}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
