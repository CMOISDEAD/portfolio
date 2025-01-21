import { AnimatedLayout } from "@/components/layout/animated";
import { Header } from "@/components/ui/header";
import { Link } from "@/components/ui/link";
import { Navigation } from "@/components/ui/navigation/globalNavigation";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

export const Contact = () => {
  const [t] = useTranslation("contact");

  return (
    <AnimatedLayout>
      <Helmet>
        <title>Contact - Camilo Davila;</title>
        <meta
          name="description"
          content="Contact me for any inquiries or collaborations."
        />
      </Helmet>

      <Header title={t("title")} description={t("description")} />

      <Navigation />

      <section className="flex w-full flex-1 items-end p-8 text-xs md:p-16">
        <ul className="space-y-8">
          <li>
            <div className="flex gap-4 text-lg md:gap-8 md:text-xl">
              <p className="font-thin md:w-28">Github</p>
              <Link
                to="https://github.com/CMOISDEAD"
                target="_blank"
                className="font-bold"
              >
                @CMOISDEAD
              </Link>
            </div>
          </li>
          <li>
            <div className="flex gap-4 text-lg md:gap-8 md:text-xl">
              <p className="font-thin md:w-28">Email</p>
              <Link
                to="mailto:camiloesteban661@gmail.com"
                target="_blank"
                className="font-bold"
              >
                camiloesteban661@gmail.com
              </Link>
            </div>
          </li>
        </ul>
      </section>
    </AnimatedLayout>
  );
};
