import oldPort from "../public/oldPort.png";
import space from "../public/space-tour.png";

export const skills = {
  title: [
    { name: "Ui Design", des: "figma" },
    { name: "Code With", des: "React" },
  ],
  otherSkills: [
    "Next Js",
    "Tailwind CSS",
    "Material Ui",
    "React Query",
    "Redux-Toolkit",
    "Git & Github",
  ],
};

export const portCardData = {
  card: [
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
