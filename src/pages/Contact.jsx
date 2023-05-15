import { Layout } from "../components/Layout";

export const Contact = () => {
  return (
    <Layout>
      <div className="title">Contacto</div>
      <ul>
        <li>
          <a
            href="https://github.com/CMOISDEAD"
            className="hover:text-pink hover:underline"
          >
            Github
          </a>
        </li>
        <li>
          <a
            href="https://linkedn.com/"
            className="hover:text-pink hover:underline"
          >
            Linkedin
          </a>
        </li>
        <li>Twitter</li>
      </ul>
    </Layout>
  );
};
