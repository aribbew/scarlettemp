import React from "react";

interface NavbarProps {
    activeNavbar: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeNavbar }) => {
    const scrollToSection = (navbarItem: string) => {
        const section = document.getElementById(navbarItem.replace(/\s+/g, "-").toLowerCase()); // Convert navbarItem to lowercase and replace spaces with hyphens
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="fixed top-0 left-0 w-full  py-4 text-white flex justify-center">
            {["About Us", "Services", "Contact Us"].map((navbarItem) => (
                <div
                    key={navbarItem}
                    className={`flex flex-col items-center cursor-pointer mx-4 ${activeNavbar === navbarItem ? "text-yellow-400" : "text-white"
                        }`}
                    onClick={() => scrollToSection(navbarItem)}
                >
                    <span>{navbarItem}</span>
                    {activeNavbar === navbarItem && (
                        <div className="w-6 h-1 bg-yellow-400 mt-1"></div>
                    )}
                </div>
            ))}
        </nav>
    );
};

export default Navbar;