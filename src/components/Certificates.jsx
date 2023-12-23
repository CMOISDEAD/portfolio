import React from "react";
import { Image } from "@nextui-org/react";

const certificates = [
  {
    title: "Ingenieria en Sistemas y Computacion",
    institute: "Universidad del Quindio",
    year: "2025",
    color: "success",
    icon: "nodejs",
  },
  {
    title: "Certificado en Analisis de Datos",
    institute: "DS4A",
    year: "2022",
    color: "warning",
    icon: "fresh",
  },
  {
    title: "Tecnico en Programacion de Software",
    institute: "SENA",
    year: "2019",
    color: "primary",
    icon: "typescript",
  },
];

export const Certificates = () => {
  return (
    <div>
      <div className="title">Titulos y Certificados</div>
      <div className="flex flex-col gap-2 md:flex-row">
        {certificates.map((item, i) => (
          <div
            className={`shadow shadow-${item.color} flex relative gap-2 content-center items-center h-32 rounded border md:w-5/12 border-${item.color} bg-${item.color}/20 backdrop-blur-sm`}
            key={i}
          >
            <div className="flex z-50 flex-col gap-4 justify-between p-2 w-full h-full info backdrop-blur-sm">
              <div className="text-xl font-bold capitalize">{item.title}</div>
              <div className="text-sm">
                {item.institute} - {item.year}
              </div>
            </div>
            <div className="absolute top-5 right-5 bottom-5">
              <Image
                isBlurred
                radius="none"
                src={`https://svgl.app/library/${item.icon}.svg`}
                alt="card with certificate"
                className="object-contain w-24 h-24 rotate-12"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
