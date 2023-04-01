import oldPort from "../public/oldPort.png";
import newPort from "../public/newPort.png";
import space from "../public/space-tour.png";

export const skills = {
  title: [
    { name: "Ui Design", des: "Figma" },
    { name: "Code With", des: "Laravel" },
  ],
  otherSkills: [
    "HTML",
    "CSS",
    "Javascript",
    "Bootstrap",
    "Git & Github",
    "English (Intermediate)",
  ],
};

export const portCardData = {
  card: [
    {
      title: "Portfolio 2.0",
      des: "NextJs 13 Beta, clean Files Folder structure and own figma design",
      frameworks: ["NextJS", "Tailwind"],
      repo: "https://github.com/k2htet/portfolio-2.0",
      live: "https://kohtet.vercel.app/",
      img: newPort,
    },
    {
      title: "Old Portfolio",
      des: "Customize material UI, clean Files Folder structure and own figma design",
      frameworks: ["React", "Material Ui"],
      repo: "https://github.com/k2htet/portfolio",
      live: "https://kokohtet.vercel.app/",
      img: oldPort,
    },
    {
      title: "Space Tour",
      des: "Challenge from frontend menthor and convert figma to react",
      frameworks: ["React", "Material Ui"],
      repo: "https://github.com/k2htet/space-tour",
      live: "https://space-tour-chi.vercel.app/",
      img: space,
    },
  ],
};
