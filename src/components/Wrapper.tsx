import { FunctionComponent } from "react";
import Image from 'next/image';

interface IWrapperProps {
    img: StaticImageData,
    alt: string,
    title: string
}

const Wrapper: FunctionComponent<IWrapperProps> = ({ img, alt, title }) => {
    return(
        <div className="w-full px-4 flex flex-row space-y-4 justify-around items-center">
            <h1 className="w-1/2 text-accent text-lg font-bold text-center lg:text-2xl lg:w-1/4">{ title }</h1>
            <div className="w-1/4 lg:w-1/6">
                <Image src={img} alt={alt} layout="responsive"/>
            </div>
        </div>
    )
}

export default Wrapper;