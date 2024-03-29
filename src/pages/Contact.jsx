import { Image } from "@nextui-org/react";
import React from "react";
import cv from "/assets/files/cv.pdf";

export const Contact = () => {
  const mail = "camiloesteban661@gmail.com";
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="title">Contacto</div>
      <p>
        Hola, si quieres contactarme puedes hacerlo por cualquiera de estos
        medios, estaré encantado de hablar contigo.
      </p>
      <a
        href={`mailto:${mail}`}
        target="_blank"
        className="my-2"
        rel="noreferrer"
      >
        <div className="relative rounded border border-transparent cursor-pointer hover:border-blue-500 group">
          <Image
            isBlurred
            shadow="lg"
            src="assets/textures/gradient.jpeg"
            alt="gradient image"
            className="w-screen h-32 rounded"
          />
          <div className="absolute top-1/2 left-1/2 z-50 text-2xl font-bold transition-colors transform -translate-x-1/2 -translate-y-1/2 group-hover:text-indigo-100 text-primary">
            Enviame un correo ahora <br />
          </div>
        </div>
      </a>
      <p className="my-2">
        Estos son otros medios a través de los cuales puedes encontrarme en
        línea. No dudes en enviarme un mensaje a través de LinkedIn para iniciar
        una conversación.
      </p>
      <div className="grid grid-cols-2 grid-flow-row gap-4">
        <a
          href="https://github.com/CMOISDEAD"
          target="_blank"
          className="my-2"
          rel="noreferrer"
        >
          <div className="relative rounded border border-transparent cursor-pointer hover:border-blue-500 group">
            <Image
              isBlurred
              shadow="lg"
              src="assets/textures/gradient.jpeg"
              alt="gradient image"
              className="w-screen h-32 rounded"
            />
            <div className="absolute top-1/2 left-1/2 z-50 text-2xl font-bold transition-colors transform -translate-x-1/2 -translate-y-1/2 group-hover:text-indigo-100 text-primary">
              Contactame en Github
            </div>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/camilo-esteban-501126220/"
          target="_blank"
          className="my-2"
          rel="noreferrer"
        >
          <div className="relative rounded border border-transparent cursor-pointer hover:border-blue-500 group">
            <Image
              isBlurred
              shadow="lg"
              src="assets/textures/gradient.jpeg"
              alt="gradient image"
              className="w-screen h-32 rounded"
            />
            <div className="absolute top-1/2 left-1/2 z-50 text-2xl font-bold transition-colors transform -translate-x-1/2 -translate-y-1/2 group-hover:text-indigo-100 text-primary">
              Contactame en LinkedIn
            </div>
          </div>
        </a>
        <div className="col-span-full">
          <a href={cv} target="_blank" rel="noreferrer">
            <div className="relative rounded border border-transparent cursor-pointer hover:border-blue-500 group">
              <Image
                isBlurred
                shadow="lg"
                src="assets/textures/gradient.jpeg"
                alt="gradient image"
                className="w-screen h-32 rounded"
              />
              <div className="absolute top-1/2 left-1/2 z-50 text-2xl font-bold transition-colors transform -translate-x-1/2 -translate-y-1/2 group-hover:text-indigo-100 text-primary">
                Descarga mi CV
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
