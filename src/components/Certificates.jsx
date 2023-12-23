import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

const certificates = [
  {
    title: "Ingenieria en Sistemas y Computacion",
    institute: "Universidad del Quindio",
    year: "2025",
  },
  {
    title: "Certificado en Analisis de Datos",
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
    <div>
      <div className="title">Titulos y Certificados</div>
      <Accordion isCompact variant="light">
        {certificates.map((value, i) => (
          <AccordionItem key={i} aria-label={value.title} title={value.title}>
            <p className="italic">
              {value.institute} - <span className="italic">{value.year}</span>
            </p>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
