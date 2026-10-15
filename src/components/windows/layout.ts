import type { WindowKey } from "@/components/windows/types";

export interface Rect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export type WindowLayout = Record<WindowKey, Rect>;

const ABOUT = { width: 380, height: 415 };
const CONTACT = { width: 320, minWidth: 260, height: 200 };
const EXPERIENCE = { width: 448, minWidth: 300, height: 450 };
// 112px cards + window header + content padding
const PROJECTS_HEIGHT = { mobile: 180, desktop: 172 };
// Offset between stacked windows on mobile so every title bar stays visible
const CASCADE = 40;

/**
 * Places every window inside the home container without overlapping the
 * window selector, the carousel or (when there is room) each other.
 */
export function computeWindowLayout(
  container: { width: number; height: number },
  selectorBottom: number,
  isMobile: boolean,
): WindowLayout {
  const { width: W, height: H } = container;
  const gap = isMobile ? 8 : 10;

  const projectsHeight = isMobile
    ? PROJECTS_HEIGHT.mobile
    : PROJECTS_HEIGHT.desktop;
  const projects = {
    x: gap,
    y: Math.max(gap, H - gap - projectsHeight),
    width: W - gap * 2,
    height: Math.min(projectsHeight, H - gap * 2),
  };
  const bottom = projects.y - gap;
  const belowSelector = selectorBottom + gap;

  if (isMobile) {
    const column = { x: gap, width: W - gap * 2 };
    const slot = (index: number, maxHeight: number) => {
      const y = belowSelector + index * CASCADE;
      return { ...column, y, height: Math.max(120, Math.min(maxHeight, bottom - y)) };
    };
    return {
      about: slot(0, 440),
      experience: slot(1, 460),
      contact: slot(2, CONTACT.height),
      projects,
    };
  }

  const aboutWidth = Math.min(ABOUT.width, W - gap * 2);
  const about = {
    x: W - gap - aboutWidth,
    y: gap,
    width: aboutWidth,
    height: Math.min(ABOUT.height, bottom - gap),
  };

  let contact: Rect;
  let experienceRight: number;
  const contactFitsBelowAbout =
    about.y + about.height + gap + CONTACT.height <= bottom;
  const experienceWidth = Math.min(
    EXPERIENCE.width,
    W - gap * 4 - about.width - CONTACT.minWidth,
  );
  const contactFitsBeside = experienceWidth >= EXPERIENCE.minWidth;

  if (contactFitsBelowAbout) {
    contact = {
      x: about.x,
      y: about.y + about.height + gap,
      width: about.width,
      height: CONTACT.height,
    };
    experienceRight = about.x - gap;
  } else if (contactFitsBeside) {
    const contactWidth = Math.min(
      CONTACT.width,
      W - gap * 4 - about.width - experienceWidth,
    );
    contact = {
      x: about.x - gap - contactWidth,
      y: gap,
      width: contactWidth,
      height: Math.min(CONTACT.height, bottom - gap),
    };
    experienceRight = contact.x - gap;
  } else {
    // Not enough room: overlap the lower part of `about`
    contact = {
      x: Math.max(gap, about.x - CASCADE),
      y: Math.max(gap, bottom - CONTACT.height),
      width: Math.min(CONTACT.width, W - gap * 2),
      height: Math.min(CONTACT.height, bottom - gap),
    };
    experienceRight = about.x - gap;
  }

  const experienceFits = experienceRight - gap >= EXPERIENCE.minWidth;
  const experience = {
    x: gap,
    y: belowSelector,
    width: experienceFits
      ? Math.min(EXPERIENCE.width, experienceRight - gap)
      : Math.min(EXPERIENCE.width, W - gap * 2),
    height: Math.max(160, Math.min(EXPERIENCE.height, bottom - belowSelector)),
  };

  return { about, experience, contact, projects };
}
