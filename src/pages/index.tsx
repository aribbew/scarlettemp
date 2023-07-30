import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Section from "./Section";

const navbars: string[] = ["About Us", "Services", "Contact Us"];
const colors: string[] = [
  "bg-red-400",
  "bg-blue-400",
  "bg-green-400",
  "bg-purple-400",
  "bg-yellow-400",
  "bg-pink-400",
];

const App: React.FC = () => {
  const [activeNavbar, setActiveNavbar] = useState<string | undefined>(
    navbars[0]
  );

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    const sections = document.querySelectorAll("section");

    for (let i = 0; i < sections.length; i++) {
      const section = sections[i]!;
      const offsetTop = section.offsetTop;
      const offsetBottom = offsetTop + section.offsetHeight;

      if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
        setActiveNavbar(navbars[i]);
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="scroll-container overflow-y-auto snap-y-mandatory">
      <Navbar activeNavbar={activeNavbar ?? ""} />

      {navbars.map((navbar, index) => (
        <Section
          key={navbar}
          title={navbar}
          color={colors[index % colors.length]}
        />
      ))}
    </div>
  );
};

export default App;