export type WindowKey = "about" | "experience" | "projects" | "contact";

export interface WindowProps {
  toggleWindow: (key: WindowKey) => void;
  isMobile: boolean;
}
