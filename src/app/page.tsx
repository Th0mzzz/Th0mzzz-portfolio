import HeroSection from "@/components/HeroSection";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function Home() {
    return (
        <main className="w-full overflow-x-clip">
            <HeroSection/>
            <AboutMe/>
            <Skills/>
            <Projects/>
        </main>
    );
}
