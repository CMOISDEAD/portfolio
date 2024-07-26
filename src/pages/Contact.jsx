import { Image } from "@nextui-org/react";
import React from "react";
import cv from "/assets/files/cv.pdf";

export const Contact = () => {
  const mail = "camiloesteban661@gmail.com";
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="title">Contact</div>
      <p>
        If you would like to contact me, you can do so through any of the
        following channels. I look forward to speaking with you.
      </p>
      <Button message="Send me a email" link={`mailto:${mail}`} />
      <p className="my-2">
        Below, you will find other ways to contact me online. Feel free to send
        me a message on LinkedIn to start a conversation.
      </p>
      <div className="grid grid-cols-2 grid-flow-row gap-4">
        <Button
          message="Contact me on GitHub"
          link="https://github.com/CMOISDEAD"
        />
        <Button
          message="Contact me on LinkedIn"
          link="https://www.linkedin.com/in/camilo-esteban-501126220/"
        />
        <Button message="Download my CV" link={cv} className="col-span-full" />
      </div>
    </div>
  );
};

const Button = ({ className, message, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={`my-2 ${className}`}
    >
      <div className="relative rounded border border-transparent cursor-pointer hover:border-blue-500 group">
        <Image
          isBlurred
          shadow="lg"
          src="assets/textures/gradient.jpeg"
          alt="gradient image"
          className="w-screen h-32 rounded"
        />
        <div className="absolute top-1/2 left-1/2 z-50 text-lg md:text-2xl text-center font-bold transition-colors transform -translate-x-1/2 -translate-y-1/2 text-white group-hover:text-indigo-400">
          {message}
        </div>
      </div>
    </a>
  );
};
