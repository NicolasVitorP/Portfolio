import React, { Suspense, lazy } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SkeletonLoading from '../components/common/SkeletonLoading';

// Lazy Load Sections
const Hero = lazy(() => import('../components/home/Hero'));
const About = lazy(() => import('../components/home/About'));
const Skills = lazy(() => import('../components/home/Skills'));
const Experience = lazy(() => import('../components/home/Experience'));
const Projects = lazy(() => import('../components/home/Projects'));
const Contact = lazy(() => import('../components/home/Contact'));

const Home = () => {
    return (
        <div className="bg-black min-h-screen text-gray-200 font-sans selection:bg-primary/30">
            <Navbar />
            <main>
                <Suspense fallback={<SkeletonLoading />}>
                    <Hero />
                </Suspense>
                <Suspense fallback={<SkeletonLoading />}>
                    <About />
                </Suspense>
                <Suspense fallback={<SkeletonLoading />}>
                    <Skills />
                </Suspense>
                <Suspense fallback={<SkeletonLoading />}>
                    <Projects />
                </Suspense>
                <Suspense fallback={<SkeletonLoading />}>
                    <Experience />
                </Suspense>
                <Suspense fallback={<SkeletonLoading />}>
                    <Contact />
                </Suspense>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
