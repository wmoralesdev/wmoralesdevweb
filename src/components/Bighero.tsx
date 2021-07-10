import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FunctionComponent } from "react";

import profilePic from '../../public/res/Perfil.png'

const Bighero: FunctionComponent = () =>
    <section className="text-white md:w-4/5 md:mx-auto md:py-12 lg:py-6">
        <article className="flex flex-col-reverse flex-nowrap leading-normal text-xl items-center justify-center 
        md:items-end md:justify-around md:leading-loose md:flex-row lg:text-4xl">
            <div className="w-full md:w-3/5">
                <h1>Hey! <br />I'm <span className="font-bold">Walter Morales</span> <br />
                <span className="text-accent font-bold">FullStack Engineer & .NET Developer</span>
                </h1>
                <div className="mt-4">
                    <span className="font-bold italic text-lg w-full text-center md:w-auto">@wmoralesdev</span>
                    <div className="mt-2 space-x-4">
                        <a href="https://www.facebook.com/WalterMorales26/" target="_blank">
                            <FontAwesomeIcon className="transition-all duration-300 hover:text-accent rounded-sm" icon={faFacebook}/>
                        </a>
                        <a href="https://twitter.com/wmoralesdev" target="_blank">
                            <FontAwesomeIcon className="transition-all duration-300 hover:text-accent rounded-sm" icon={faTwitter}/>
                        </a>
                        <a href="https://www.linkedin.com/in/wmoralesdev/" target="_blank">
                            <FontAwesomeIcon className="transition-all duration-300 hover:text-accent rounded-sm" icon={faLinkedin}/>
                        </a>
                        <a href="https://www.instagram.com/wmoralesdev/" target="_blank">
                            <FontAwesomeIcon className="transition-all duration-300 hover:text-accent rounded-sm" icon={faInstagram}/>
                        </a>
                        <a href="https://github.com/wmoralesdev" target="_blank">
                            <FontAwesomeIcon className="transition-all duration-300 hover:text-accent rounded-sm" icon={faGithub}/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="w-3/5 md:w-1/4">
                <Image className="" src={profilePic} alt="Walter" layout="intrinsic"/>
            </div>
        </article>
    </section>

export default Bighero