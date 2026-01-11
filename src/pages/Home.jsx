import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Skills from '../components/home/Skills';
import Experience from '../components/home/Experience';
import Projects from '../components/home/Projects';
import Contact from '../components/home/Contact';

const Home = () => {
    return (
        <div className="bg-black min-h-screen text-gray-200 font-sans selection:bg-primary/30">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
