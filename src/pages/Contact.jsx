import { Layout } from "../components/Layout";

export const Contact = () => {
  return (
    <Layout>
      <div className="text-xl md:text-4xl text-white font-bold special">
        Contacto
      </div>
      <ul>
        <li>
          <a
            href="https://github.com/CMOISDEAD"
            className="hover:text-sky-200 hover:underline"
          >
            Github
          </a>
        </li>
        <li>
          <a
            href="https://linkedn.com/"
            className="hover:text-sky-200 hover:underline"
          >
            Linkedin
          </a>
        </li>
        <li>Twitter</li>
      </ul>
    </Layout>
  );
};
