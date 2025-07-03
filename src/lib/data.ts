import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Project1 from "@assets/project1.jpg";
import Project2 from "@assets/project2.jpg";
import Project3 from "@assets/project3.jpg";
import Project4 from "@assets/project4.jpg";

import {
  SiAdobeaftereffects,
  SiAdobeillustrator,
  SiAdobeindesign,
  SiAdobelightroom,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiCinema4D,
  SiDavinciresolve,
  SiNotion,
} from "react-icons/si";
import { IoVideocamSharp } from "react-icons/io5";
import { BsPaintBucket } from "react-icons/bs";
import { IoIosColorPalette } from "react-icons/io";
import { MdCamera } from "react-icons/md";
import { RiSoundModuleFill } from "react-icons/ri";

export interface RecentWork {
  name: string;
  image: StaticImport | string;
  description: string;
  link: string;
}

export const designTools = [
  { name: "Adobe Photoshop" },
  { name: "Adobe Illustrator" },
  { name: "Figma" },
  { name: "Adobe XD" },
  { name: "Sketch" },
  { name: "Procreate" },
  { name: "Canva" },
  { name: "InDesign" },
];

export const Works: Array<RecentWork> = [
  {
    name: "UI/UX Design for E-commerce website",
    image: Project1,
    description:
      "This is a design for an e-commerce website, it is a simple and clean design, with a modern and trendy look.",
    link: "",
  },
  {
    name: "Web App Design for a Fitness program",
    image: Project2,
    description:
      "This is a design for a fitness app, it is a simple and clean design, with a modern and trendy look.",
    link: "",
  },
  {
    name: "Web App Design for a Food Delivery",
    image: Project3,
    description:
      "This is a design for a food delivery app, it is a simple and clean design, with a modern and trendy look.",
    link: "",
  },
  {
    name: "Web App Design for a Social Media",
    image: Project4,
    description:
      "This is a design for a social media app, it is a simple and clean design, with a modern and trendy look.",
    link: "",
  },
];

interface IService {
  icon: React.ElementType;
  title: string;
}

export const services: Array<IService> = [
  {
    icon: SiAdobepremierepro,
    title: "Adobe Premiere Pro",
  },
  {
    icon: SiAdobeaftereffects,
    title: "Adobe After Effects",
  },
  {
    icon: SiAdobeillustrator,
    title: "Adobe Illustrator",
  },
  {
    icon: SiAdobephotoshop,
    title: "Adobe Photoshop",
  },
  {
    icon: SiDavinciresolve,
    title: "DaVinci Resolve",
  },
  {
    icon: SiAdobelightroom,
    title: "Adobe Lightroom",
  },
  {
    icon: SiAdobeindesign,
    title: "Adobe InDesign",
  },
  {
    icon: SiNotion,
    title: "Notion",
  },
];

export const services_list: Array<IService> = [
  {
    icon: SiCinema4D,
    title: "Cinematography / Scene Directing",
  },
  {
    icon: BsPaintBucket,
    title: "Creative Planning",
  },
  {
    icon: IoVideocamSharp,
    title: "Video editing & Motion Design",
  },
  {
    icon: IoIosColorPalette,
    title: "Color Grading",
  },
  {
    icon: MdCamera,
    title: "Photography & Retouching",
  },
  {
    icon: RiSoundModuleFill,
    title: "Sound Design",
  },
];
