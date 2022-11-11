import React, { FC } from 'react';
import { MdEmail } from 'react-icons/md';
import { BsLinkedin, BsInstagram, BsGithub } from 'react-icons/bs';

const Footer: FC = () => (
    <footer className="w-full p-4 font-semibold tracking-tight flex flex-wrap justify-between items-center gap-2 md:p-8" id="footer">
        <a
            href="mailto:walterrafael26@gmail.com"
            className="w-[40%] relative bg-white bg-opacity-10 flex items-center gap-x-2 py-2 px-4 rounded-lg group
            md:w-1/5 md:text-xl md:gap-x-4"
        >
            <div className="rounded h-full w-0 absolute top-0 left-0 -z-10 bg-walter with-trans quick group-hover:w-full" />
            <span>Email</span>
            <MdEmail />
        </a>
        <a
            href="https://www.linkedin.com/in/wmoralesdev/"
            className="w-[40%] relative bg-white bg-opacity-10 flex items-center gap-x-2 py-2 px-4 rounded-lg group
            md:w-1/5 md:text-xl md:gap-x-4"
        >
            <div className="rounded h-full w-0 absolute top-0 left-0 -z-10 bg-walter with-trans quick group-hover:w-full" />
            <span>LinkedIn</span>
            <BsLinkedin />
        </a>
        <a
            href="https://www.instagram.com/wmoralesdev/"
            className="w-[40%] relative bg-white bg-opacity-10 flex items-center gap-x-2 py-2 px-4 rounded-lg group
            md:w-1/5 md:text-xl md:gap-x-4"
        >
            <div className="rounded h-full w-0 absolute top-0 left-0 -z-10 bg-walter with-trans quick group-hover:w-full" />
            <span>Instagram</span>
            <BsInstagram />
        </a>
        <a
            href="https://github.com/wmoralesdev"
            className="w-[40%] relative bg-white bg-opacity-10 flex items-center gap-x-2 py-2 px-4 rounded-lg group
            md:w-1/5 md:text-xl md:gap-x-4"
        >
            <div className="rounded h-full w-0 absolute top-0 left-0 -z-10 bg-walter with-trans quick group-hover:w-full" />
            <span>GitHub</span>
            <BsGithub />
        </a>
    </footer>
);

export default Footer;
