import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Mail, FileText } from "lucide-react";

export const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/sivaraj-bit",
    icon: FaGithub,
    external: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/sivaraj33/",
    icon: FaLinkedinIn,
    external: true,
  },
  {
    name: "Email",
    href: "mailto:sivagovindharaj33@gmail.com",
    icon: Mail,
    external: false,
  },
  {
    name: "Resume",
    href: "/Sivaraj_G_CV.pdf",
    icon: FileText,
    external: true,
  },
];