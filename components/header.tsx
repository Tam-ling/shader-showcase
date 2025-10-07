"use client"
import ThemeToggle from "./theme-toggle"
import CardNav from '@/components/ui/Cardnav'
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";

const navItems = [
  {
    label: "About",
    bgColor: "#0D0716",
    textColor: "#fff",
    links: [
      { label: "Company", ariaLabel: "About Company" },
      { label: "Careers", ariaLabel: "About Careers" }
    ]
  },
  {
    label: "Projects",
    bgColor: "#170D27",
    textColor: "#fff",
    links: [
      { label: "Featured", ariaLabel: "Featured Projects" },
      { label: "Case Studies", ariaLabel: "Project Case Studies" }
    ]
  },
  {
    label: "Contact",
    bgColor: "#271E37",
    textColor: "#fff",
    links: [
      { label: "Email", ariaLabel: "Email us" },
      { label: "Twitter", ariaLabel: "Twitter" },
      { label: "LinkedIn", ariaLabel: "LinkedIn" }
    ]
  }
];

export function AnimatedThemeTogglerDemo() {
  return <AnimatedThemeToggler />
}


export default function Header() {
  const logo = (
    <svg
      fill="currentColor"
      viewBox="0 0 147 70"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="size-10 translate-x-[-0.5px] text-white"
    >
      <path d="562 70C57.5605 70 54.9982 68.9992 53.1562 67.1573L0 14H19.7969L56 50.2031Z"></path>
      <path d="33V70H96.6875C85.8144 70 77 61.1856 77 50.3125V14H91V46.1562L123.156 14H91V0H127.312C138.1"></path>
    </svg>
  );
 
  return (
    <header className="relative z-20 flex items-center justify-between p-6">
      {/* Logo */}
      <div className="flex items-center">
        {logo}
      </div>

      {/* Navigation */}
      <CardNav
        logo={logo}
        logoAlt="Company Logo"
        items={navItems}
        baseColor="#fff"
        menuColor="#000"
        buttonBgColor="#111"
        buttonTextColor="#fff"
        ease="power3.out"
      />
    </header>
  )
}
