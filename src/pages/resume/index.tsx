import Image from 'next/image'
import Head from 'next/head'

import { FunctionComponent } from "react";
import Layout from "../../components/Layout";
import Separator from "../../components/Separator";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faKeyboard, faInfoCircle, IconDefinition } from '@fortawesome/free-solid-svg-icons'

import dotnet from '../../../public/res/Frameworks/F1.png'
import electron from '../../../public/res/Frameworks/F2.png'
import node from '../../../public/res/Frameworks/F3.png'
import react from '../../../public/res/Frameworks/F4.png'
import next from '../../../public/res/Frameworks/F5.png'

import mongo from '../../../public/res/Db/DB1.png'
import postgres from '../../../public/res/Db/DB2.png'
import sqlserver from '../../../public/res/Db/DB3.png'

import c from '../../../public/res/Languages/L1.png'
import cpp from '../../../public/res/Languages/L2.png'
import csharp from '../../../public/res/Languages/L3.png'
import java from '../../../public/res/Languages/L4.png'
import kotlin from '../../../public/res/Languages/L5.png'
import js from '../../../public/res/Languages/L6.png'
import ts from '../../../public/res/Languages/L7.png'

interface ITextWrapperProps {
    place: string,
    education: string,
    time: string,
    icon: IconDefinition,
    hover: string
}

interface IImageWrapperProps {
    img: StaticImageData,
    alt: string,
    text: string,
    textColor: string
}

const TextWrapper: FunctionComponent<ITextWrapperProps> = ({ icon, place, education, time, hover }) => {
    return(
        <div className={`transition-all transition-duration-500 w-full my-4 px-5 md:w-1/2 xl:w-1/3 hover:${hover}`}>
            <h1 className="font-bold text-lg space-x-2 flex items-center">
                <FontAwesomeIcon className="h-10 w-10 text-2xl" icon={icon} /> <span>{ place }</span>
            </h1>
            <h2 className="text-base">
                { education }
            </h2>
            <h3 className="text-sm"> 
                { time }
            </h3>
        </div>
    )
}

const ImageWrapper: FunctionComponent<IImageWrapperProps> = ({ img, alt, text, textColor }) => {
    return(
        <div className="flex flex-row items-center space-around space-x-5 transition-all transition-duration-500 w-full my-4 px-5 md:w-1/2 xl:w-1/3 group">
            <div className="transition-all transition-duration-1000 w-1/3 bg-white bg-opacity-50 rounded-lg p-1 group-hover:bg-opacity-100 lg:w-1/4">
                <Image src={img} alt={alt} layout="responsive" />
            </div>
            <h1 className={`w-2/3 font-bold text-lg ${textColor} lg:text-xl`}>{ text }</h1>
        </div>
    )
}

const Index: FunctionComponent = () => {
    return(
        <Layout>
            <Head>
                <title>Resume</title>
                <meta property="og:title" content="Resume" key="title" />
                <meta name="description" 
                content="My Experience and Portfolio"/>
            </Head>
            <div>
                <h1 className="font-bold text-xl">Education</h1>
                <div className="w-full flex flex-row flex-wrap items-start">
                    <TextWrapper hover="text-accent" icon={faBook} place="CECAM" education="Technical Public Accounting Baccalaureate" time="2014 - 2017"/>
                    <TextWrapper hover="text-accent" icon={faBook} place="Platzi & Facebook Developer Circles" education="ReactJS Frontend Developer" 
                    time={`2018 - 2019`}/>
                    <TextWrapper hover="text-accent" icon={faBook} place="Universidad Centroamericana José Simeón Cañas" education="Computer Science Engineering (In progress)" 
                    time={`2018 - ${new Date().getFullYear()}`}/>
                </div>
            </div>
            <Separator />
            <div>
                <h1 className="font-bold text-xl">Work Experience ({new Date().getFullYear() - 2019}+ Years)</h1>
                <div className="w-full flex flex-row flex-wrap items-start">
                    <TextWrapper hover="text-blue-600" icon={faKeyboard} place="Universidad Centroamericana José Simeón Cañas" 
                    education="Lead Instructor in Dynamic Structures, Object Oriented Programming and Algorithm Analysis" 
                    time={`2019 - ${new Date().getFullYear()}`}/>
                    <TextWrapper hover="text-blue-600" icon={faKeyboard} place="VincuHub" education=".NET Backend Developer" time="Jul 2019 - Oct 2020"/>
                    <TextWrapper hover="text-blue-600" icon={faKeyboard} place="Elaniin" education="FullStack & .NET Developer" 
                    time={`Nov 2020 - Now (${new Date().getFullYear()})`}/>
                </div>
            </div>
            <Separator />
            <div>
                <h1 className="font-bold text-xl">Languages</h1>
                <div className="w-full flex flex-row flex-wrap items-start">
                    <TextWrapper hover="text-accent" icon={faInfoCircle} place="English Level" 
                    education="Intermediate" 
                    time=""/>
                    <TextWrapper hover="text-accent" icon={faInfoCircle} place="American Sign Language" education="Advanced Level" time=""/>
                </div>
            </div>
            <Separator />
            <div>
                <h1 className="font-bold text-xl">Known Technologies</h1>
                <h1 className="font-bold text-xl mt-4">Web Frameworks</h1>
                <div className="w-full flex flex-row flex-wrap items-start">
                    <ImageWrapper textColor="text-accent" img={dotnet} alt="dotnet" text=".NET Core & .NET Framework"/>
                    <ImageWrapper textColor="text-gray-500" img={electron} alt="electron" text="ElectronJS"/>
                    <ImageWrapper textColor="text-green-500" img={node} alt="node" text="NodeJS"/>
                    <ImageWrapper textColor="text-blue-300" img={react} alt="react" text="ReactJS"/>
                    <ImageWrapper textColor="text-white" img={next} alt="next" text="NextJS"/>
                </div>
                <h1 className="font-bold text-xl">Databases</h1>
                <div className="w-full flex flex-row flex-wrap items-start">
                    <ImageWrapper textColor="text-green-700" img={mongo} alt="mongo" text="MongoDB"/>
                    <ImageWrapper textColor="text-blue-800" img={postgres} alt="postgres" text="PostgreSQL"/>
                    <ImageWrapper textColor="text-red-500" img={sqlserver} alt="sqlserver" text="Microsoft Sql Server"/>
                </div>
                <h1 className="font-bold text-xl">Languages</h1>
                <div className="w-full flex flex-row flex-wrap items-start">
                    <ImageWrapper textColor="text-blue-800" img={c} alt="c" text="C"/>
                    <ImageWrapper textColor="text-blue-500" img={cpp} alt="cpp" text="C++"/>
                    <ImageWrapper textColor="text-accent" img={csharp} alt="csharp" text="C#"/>
                    <ImageWrapper textColor="text-yellow-800" img={kotlin} alt="kotlin" text="Kotlin"/>
                    <ImageWrapper textColor="text-yellow-400" img={js} alt="js" text="JavaScript"/>
                    <ImageWrapper textColor="text-blue-500" img={ts} alt="ts" text="TypeScript"/>
                </div>  
            </div>
        </Layout>
    )
}

export default Index;
