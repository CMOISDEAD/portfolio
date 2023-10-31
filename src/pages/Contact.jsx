import cv from "/public/cv.pdf";

export const Contact = () => {
  const mail = "camiloesteban661@gmail.com";
  return (
    <>
      <div className="title">Contacto</div>
      <p className="my-2">
        ¡Hola! ¿Listo para crear algo increíble juntos? Haz clic aquí para
        enviarme un mensaje y comencemos a construir el futuro juntos.
      </p>
      <a href={`mailto:${mail}`} target="_blank" className="my-2">
        <div className="relative rounded border border-transparent cursor-pointer hover:border-blue-500 group">
          <img
            src="/gradient.jpeg"
            alt="gradient image"
            className="w-full h-32 rounded"
          />
          <div className="absolute top-1/2 left-1/2 text-2xl font-bold text-indigo-300 transition-colors transform -translate-x-1/2 -translate-y-1/2 group-hover:text-indigo-100">
            ¡Enviame un correo ahora! <br />
          </div>
        </div>
      </a>
      <p className="my-2">
        Estos son otros medios a través de los cuales puedes encontrarme en
        línea. No dudes en enviarme un mensaje a través de GitHub o LinkedIn
        para iniciar una conversación.{" "}
        <strong>¡Espero tener noticias tuyas pronto! ¡Gracias!</strong>
      </p>
      <div className="grid grid-cols-2 grid-flow-row gap-2">
        <a href="https://github.com/CMOISDEAD" target="_blank" className="my-2">
          <div className="relative rounded border border-transparent cursor-pointer hover:border-blue-500 group">
            <img
              src="/gradient.jpeg"
              alt="gradient image"
              className="w-full h-32 rounded"
            />
            <div className="absolute top-1/2 left-1/2 text-2xl font-bold text-indigo-300 transition-colors transform -translate-x-1/2 -translate-y-1/2 group-hover:text-indigo-100">
              ¡Contactame en Github!
            </div>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/camilo-esteban-501126220/"
          target="_blank"
          className="my-2"
        >
          <div className="relative rounded border border-transparent cursor-pointer hover:border-blue-500 group">
            <img
              src="/gradient.jpeg"
              alt="gradient image"
              className="w-full h-32 rounded"
            />
            <div className="absolute top-1/2 left-1/2 text-2xl font-bold text-indigo-300 transition-colors transform -translate-x-1/2 -translate-y-1/2 group-hover:text-indigo-100">
              ¡Contactame en Linkedin!
            </div>
          </div>
        </a>
        <div className="col-span-full">
          <a href={cv} target="_blank">
            <div className="relative rounded border border-transparent cursor-pointer hover:border-blue-500 group">
              <img
                src="/gradient.jpeg"
                alt="gradient image"
                className="w-full h-32 rounded"
              />
              <div className="absolute top-1/2 left-1/2 text-2xl font-bold text-indigo-300 transition-colors transform -translate-x-1/2 -translate-y-1/2 group-hover:text-indigo-100">
                ¡Descarga mi CV!
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};
