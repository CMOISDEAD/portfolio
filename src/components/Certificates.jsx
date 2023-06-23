import React from "react";

const certificates = [
  {
    title: "Ingenieria en Sistemas y Computacion",
    institute: "Universidad del Quindio",
    year: "2025",
  },
  {
    title: "Analisis de Datos",
    institute: "DS4A",
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
      <div className="title">Titulos</div>
      <ul>
        {certificates.map((value, i) => (
          <li key={i}>
            <p className="font-bold text-white">
              {value.title}
              <span className="content font-normal text-sm">
                {" "}
                - {value.institute} -{" "}
                <span className="italic">{value.year}</span>
              </span>
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};
