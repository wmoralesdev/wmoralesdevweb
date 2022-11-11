import { Particles } from '@components/common';
import { Header } from '@components/info';
import { About } from '@components/info/About';
import { Experience } from '@components/info/experience';
import { Footer } from '@components/info/Footer';
import { Navbar } from '@components/info/Navbar';
import React, { FC } from 'react';

const MainPage: FC = () => (
    <main className="text-white tracking-normal px-4 flex flex-col justify-center items-start gap-y-4 content-margin
    md:px-8"
    >
        <Particles />
        <Navbar />
        <Header />
        <About />
        <Experience />
        <Footer />
    </main>
);

export default MainPage;
