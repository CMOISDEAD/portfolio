import { AnimatedLayout } from "@/components/layout/animated";
import { Header } from "@/components/ui/header";
import { Link } from "@/components/ui/link";
import { Navigation } from "@/components/ui/navigation";

export const Contact = () => {
  return (
    <AnimatedLayout>
      <Header
        title="Contact"
        description="Contact me for any inquiries or collaborations."
      />

      <Navigation />

      <section className="flex w-full flex-1 items-end p-16 text-xs">
        <ul className="space-y-8">
          <li>
            <div className="flex gap-8 text-xl">
              <p className="w-28 font-thin">Github</p>
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
            <div className="flex gap-8 text-xl">
              <p className="w-28 font-thin">Email</p>
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
