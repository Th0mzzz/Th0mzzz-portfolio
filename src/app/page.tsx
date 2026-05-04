import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MyJourney from "@/components/MyJourney";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
    return (
        <main className="w-full overflow-x-clip overflow-y-hidden relative max-h-fit">
            <HeroSection />
            <AboutMe />
            <Skills />
            <Projects />
            <MyJourney />
            <Contact />
            <Footer />
        </main>
    );
}
