import React from "react";

export default function AboutMe() {
  return (
    <div>
      <h2 className="text-6xl">ABOUT ME</h2>
      <div className="mt-8 pl-32 pr-8 text-xl text-justify leading-loose">
        {/* <p>
          I am a passionate web developer with 15 year of experience in creating
          custom websites and web applications. My mission is to help businesses
          and organizations achieve their goals through effective and efficient
          web development solutions.
        </p> */}
        <p className="mt-8">
          As a dedicated web developer, I am committed to staying up-to-date
          with the latest technologies and trends in the industry. I approach
          each project with enthusiasm, creativity, and a focus on delivering a
          high-quality end product that meets the unique needs of each client.
          With a passion for innovation and an eye for detail, I specialize in
          creating intuitive and user-friendly web experiences. My goal is to
          not only meet but exceed my clients expectations and deliver
          exceptional results every time.
        </p>
        <div>
          <h3 className="text-3xl font-semibold mt-8">Technologies I Use</h3>
          <p className="my-2 text-lg">
            {" "}
            Frontend Development:{" "}
            <span className="text-lg">
              HTML , CSS , Javascript, Python , Typescript, React , Vue, Nextjs{" "}
            </span>
          </p>
          <p className="my-2 text-lg">
            {" "}
            Backend Development:{" "}
            <span className="text-lg">
              NodeJs , ExpressJs , Python , firebase{" "}
            </span>
          </p>
          <p className="my-2 text-lg">
            {" "}
            Database management:{" "}
            <span className="text-lg">MongoDB , MySQL , Postgre</span>
          </p>
          <p className="my-2 text-lg">
            {" "}
            CI/CD: <span className="text-lg">Github Actions</span>
          </p>
        </div>
      </div>
    </div>
  );
}
