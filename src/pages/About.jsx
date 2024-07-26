import React from "react";
import { Image } from "@nextui-org/react";
import { Skills } from "../components/Skills";
import { Certificates } from "../components/Certificates";

export const About = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="title">About Me</div>
      <div className="relative mb-10 h-[30vh]">
        <Image
          isBlurred
          src="assets/images/tokyo.jpg"
          alt="tokyo image"
          className="object-cover border max-h-[30vh] w-[100vw] border-divider"
        />
        <div className="absolute left-0 bottom-5 z-50 m-auto md:left-5 md:-bottom-9 max-sm:right-0 w-fit">
          <Image
            isBlurred
            radius="full"
            src="https://avatars.githubusercontent.com/u/51010598?v=4"
            alt="Camilo Davila avatar image"
            className="w-36 border border-divider"
          />
        </div>
      </div>
      <div className="content">
        I am a <span className="font-bold">fullstack</span> developer passionate
        about creating engaging and efficient web experiences using the latest
        technologies. I strive to stay updated with the newest trends and tools
        in web development, constantly seeking new ways to enhance my work. I
        enjoy learning and sharing knowledge with others. If you have any
        questions or would like to explore collaboration opportunities, feel
        free to reach out.
      </div>
      <Skills />
      <Certificates />
    </div>
  );
};
