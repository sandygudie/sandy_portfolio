/* eslint-disable @next/next/no-img-element */
import React from "react";

function Profile() {
  return (
    <>
      <div className="bg-[#6d3d22] lg:h-screen text-white">
        <div className="w-9/12 py-12 lg:py-0 lg:w-10/12 max-w-10/12 mx-auto h-full flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between">
          <div className="font-semibold lg:text-left text-center">
            <h1 className="font-bold lg:w-[5ch] text-3xl md:text-6xl xl:text-8xl mt-2 mb-1">
              Goodnews Sandy
            </h1>
            <h2 className="semibold text-[17px] mt-2">
              I am a Full-Stack Developer and Technical Writer.
            </h2>

            <div className="text-center lg:text-left mt-16 w-64">
              <a
                className="w-full text-sm md:text-lg block text-center p-3 font-extrabold  bg-white text-secondary hover:bg-secondary hover:text-white"
                href="https://docs.google.com/document/d/1TGO4P6XlqEZfvw5tUH4uoEaLKvWILtxAAinyAPIGC8U/edit?usp=sharing"
                rel="noreferrer"
                target="_blank"
              >
                Resume
              </a>
            </div>
          </div>
          <div>
            {" "}
            <div className="bg-white p-5 rounded-2xl">
              <img
                src={"images/profile-image.PNG"}
                className="rounded-2xl md:w-[330px] md:h-[550px] xl:w-[600px] xl:h-[600px] object-cover"
                alt="profile"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
