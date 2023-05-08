import React from "react";

const certificates = [
  {
    title: "Ingenieria en Sistemas y Computacion",
    institute: "Universidad del Quindio",
    year: "2025",
  },
  {
    title: "Analisis de Datos",
    institute: "Universidad del Quindio",
    year: "2022",
  },
  {
    title: "Tecnico en Programacion de Software",
    institute: "SENA",
    year: "2019",
  },
];

export const Certificates = () => {
  return (
    <>
      <div className="text-xl md:text-4xl title">Titulos</div>
      <ul className="list-disc ml-5">
        {certificates.map((value, i) => (
          <li class="" key={i}>
            <p className="font-bold">
              {value.title}
              <span className="font-normal text-sm">
                {" "}
                - {value.institute} - <span class="italic">{value.year}</span>
              </span>
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};
