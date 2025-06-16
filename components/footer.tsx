import SocialLinks from "./social-links";

export default function Footer() {
  return (
    <footer className="py-10 border-t border-muted">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-muted-foreground mb-4 md:mb-0">
          © {new Date().getFullYear()} Camilo Davila. All rights reserved.
        </div>
        <SocialLinks />
      </div>
    </footer>
  );
}
