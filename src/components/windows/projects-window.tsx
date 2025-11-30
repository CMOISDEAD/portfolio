import { Window } from "@/components/windows/window";

interface Props {
  toggleWindow: (key: "projects" | "about" | "experience" | "contact") => void;
  isMobile: boolean;
}

const projects = [
  {
    href: "https://github.com/CMOISDEAD",
    image:
      "https://camilodavila.xyz/_next/image?url=%2Fprojects%2Fagro.webp&w=1920&q=75",
  },
  {
    href: "https://github.com/CMOISDEAD",
    image:
      "https://camilodavila.xyz/_next/image?url=%2Fprojects%2Fcomunidad.webp&w=1920&q=75",
  },
  {
    href: "https://github.com/CMOISDEAD",
    image:
      "https://camilodavila.xyz/_next/image?url=%2Fprojects%2Fancient.webp&w=1920&q=75",
  },
  {
    href: "https://github.com/CMOISDEAD",
    image:
      "https://camilodavila.xyz/_next/image?url=%2Fprojects%2Fdigital.webp&w=1920&q=75",
  },
  {
    href: "https://github.com/CMOISDEAD",
    image:
      "https://private-user-images.githubusercontent.com/51010598/453671916-a1cee972-2e3b-4cd2-88ce-6ca52a3731b6.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjQzODk1NDksIm5iZiI6MTc2NDM4OTI0OSwicGF0aCI6Ii81MTAxMDU5OC80NTM2NzE5MTYtYTFjZWU5NzItMmUzYi00Y2QyLTg4Y2UtNmNhNTJhMzczMWI2LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTExMjklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUxMTI5VDA0MDcyOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWU5ZmQ4NDQzN2Y0YzQ0NjQ3ZjM1ZDNhYjEyZDYzYzU1YWFhODA5NzU5MmE4ZTgyZDU3ZWY1MzM4NGM3YTg3MGUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.RdkAScYYOMk6ahxSuvLtcwGcS9_PQgL8SwCuA63OoyA",
  },
  {
    href: "https://github.com/CMOISDEAD",
    image:
      "https://private-user-images.githubusercontent.com/51010598/293121399-838cda5d-d1c5-4e08-80d5-7ee1a66631e0.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjQzODk1OTMsIm5iZiI6MTc2NDM4OTI5MywicGF0aCI6Ii81MTAxMDU5OC8yOTMxMjEzOTktODM4Y2RhNWQtZDFjNS00ZTA4LTgwZDUtN2VlMWE2NjYzMWUwLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTExMjklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUxMTI5VDA0MDgxM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTBmMzI3ZGY2Mzg4YjUzMGQ5OTg1MmMwZjUzMDVlMzk2MDI3MzI2MmNmZGZkYjA1ZjE1M2EzZTMyOGFmNWEwZTgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.GDzHQ1ACNh-3j6xtj0Q1WlHm2bD_Typ5aWmvTbg8Pa0",
  },
];

export function ProjectsWindow({ toggleWindow, isMobile }: Props) {
  return (
    <Window
      title="~/workspaces/projects/"
      anchor="bottom-left"
      offset={isMobile ? { x: 0, y: 165 } : { x: 0, y: 220 }}
      defaultSize={{ width: "100%", height: "17%" }}
      onClose={() => toggleWindow("projects")}
      isMobile={isMobile}
    >
      <div className="overflow-hidden w-full group">
        <div className="flex whitespace-nowrap animate-infinite-scroll pause-child">
          {projects.map((project, i) => (
            <CardLink key={i} {...project} />
          ))}
          {projects.map((project, i) => (
            <CardLink key={i} {...project} />
          ))}
          {projects.map((project, i) => (
            <CardLink key={i} {...project} />
          ))}
          {projects.map((project, i) => (
            <CardLink key={i} {...project} />
          ))}
        </div>
      </div>
    </Window>
  );
}

function CardLink({ image, href }: { image: string; href: string }) {
  return (
    <a href={href} target="_blank" className="mx-2 size-28 shrink-0">
      <img
        src={image}
        className="size-full object-cover select-none pointer-events-none"
        draggable={false}
      />
    </a>
  );
}
