import { ThemeSwitcher } from "@/components/sidebar/theme-switcher";
import { Github, Linkedin, FileText, Youtube } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export function Social() {
  return (
    <>
      <Button
        asChild
        variant="ghost"
        size="icon"
        className="h-8 w-8 rounded-full"
      >
        <Link href="https://youtube.com" target="_blank">
          <Youtube className="h-4 w-4" />
        </Link>
      </Button>
      <Button
        asChild
        variant="ghost"
        size="icon"
        className="h-8 w-8 rounded-full"
      >
        <Link href="https://github.com/CMOISDEAD" target="_blank">
          <Github className="h-4 w-4" />
        </Link>
      </Button>
      <Button
        asChild
        variant="ghost"
        size="icon"
        className="h-8 w-8 rounded-full"
      >
        <Link
          href="https://www.linkedin.com/in/camilo-esteban-davila/"
          target="_blank"
        >
          <Linkedin className="h-4 w-4" />
        </Link>
      </Button>
      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
        <FileText className="h-4 w-4" />
      </Button>
      <ThemeSwitcher />
    </>
  );
}
