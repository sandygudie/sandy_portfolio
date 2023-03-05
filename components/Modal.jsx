import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { BiLinkExternal } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";

export default function Modal({ handleModalChange, item }) {
  const ref = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        handleModalChange();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });
  return (
    <div className="z-30 bg-black/70 fixed -translate-y-[50%] -translate-x-[50%] top-[50%] left-[50%] w-screen h-screen">
      <div
        ref={ref}
        className={`z-40 rounded-lg w-11/12 md:w-[50%] fixed bg-white
            -translate-y-[50%] -translate-x-[50%] left-[50%] top-[50%] rounded-xl`}
      >
        <div className="bg-white relative rounded-lg p-4 lg:p-8">
          <AiFillCloseCircle
            onClick={() => handleModalChange()}
            className="cursor-pointer hover:text-primary/40 absolute right-10 top-3 text-primary font-extrabold text-2xl"
          />
          <div className="w-12/12 m-auto" href={item.link} key={item.id}>
            <h2 className="mb-4 text-base text-secondary md:text-2xl font-bold">
              {item.name}
            </h2>
            <Image
              src={item.image}
              alt="Photo"
              height={490}
              width={1000}
              layout="responsive"
              objectFit="contain"
              // objectPosition="left"
              quality={100}
              className="rounded-2xl shadow-sm shadow-secondary/80"
              key={item.id}
              placeholder="blur"
              blurDataURL="https://media.tenor.com/UnFx-k_lSckAAAAC/amalie-steiness.gif"
            />

            <div className="text-secondary pt-6">
              <p className="text-base md:text-xl font-semibold">
                {" "}
                {item.description}
              </p>

              <div className="mt-4 block md:flex item-center">
                {" "}
                <span className="font-medium text-base md:text-lg">
                  Built with:
                </span>
                <ul className=" flex gap-2 flex-wrap justify-start items-center text-xs ">
                  {item.tools.map((list, i) => {
                    return (
                      <li
                        className="text-xs bg-primary text-white rounded-full py-2 px-4"
                        key={i}
                      >
                        {list}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="flex gap-x-4  font-semibold mt-6 text-base">
                <a
                  className="underline text-secondary"
                  href={item.Github_link}
                  rel="noreferrer"
                  target="_blank"
                >
                  {" "}
                  Github
                </a>
                <a
                  className="underline text-secondary"
                  target="_blank"
                  rel="noreferrer"
                  href={item.link}
                >
                  Live Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
