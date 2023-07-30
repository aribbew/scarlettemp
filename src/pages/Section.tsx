import React from "react";

interface SectionProps {
    title: string;
    color?: string;
}

const Section: React.FC<SectionProps> = ({ title, color }) => {
    const sectionId = title.replace(/\s+/g, "-").toLowerCase(); // Convert title to lowercase and replace spaces with hyphens

    return (
        <section
            id={sectionId}
            className={`h-screen flex items-center justify-center ${color} scroll-snap-start`}
        >
            <h1 className="text-4xl font-bold">{title}</h1>
        </section>
    );
};

export default Section;