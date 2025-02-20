import { Outlet } from "react-router";
import { UseIntro } from "../home/introContext";
import { IntroAnimation } from "../home/intro";

export const Layout = () => {
  const { isAnimating } = UseIntro();

  return (
    <>
      <IntroAnimation />
      {!isAnimating && (
        <div className="relative h-screen overflow-y-hidden bg-foreground dark:bg-background md:p-10">
          <main className="custom-scrollbar relative h-full overflow-hidden border-background bg-foreground text-background shadow-xl dark:border-foreground dark:bg-background dark:text-foreground md:border">
            <Outlet />
          </main>
          <p className="text-xs font-extralight">CMOISDEAD</p>
        </div>
      )}
    </>
  );
};
