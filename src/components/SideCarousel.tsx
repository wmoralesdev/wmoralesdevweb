import { FunctionComponent } from "react";
import Image from 'next/image'

import csharp from '../../public/res/Frameworks/F3.png'

interface ISideCarouselProps {
    title: string,
    images: string[] | undefined
}

interface IImageComponent {
    url: StaticImageData,
    alt: string
}

const ImageComponent: FunctionComponent<IImageComponent> = ({url, alt}) => 
    <div className="h-20 w-20">
        <Image src={url} alt={alt} layout="responsive" />
    </div>

const SideCarousel: FunctionComponent<ISideCarouselProps> = ({ title, images }) => {
    return(
        <div className="py-4 mt-4 w-full bg-white bg-opacity-10">
            <h1 className="font-bold">{ title }</h1>
            <div className="py-2 flex flex-wrap justify-center">
                <ImageComponent url={csharp} alt='csharp' />
            </div>
        </div>
    )
}

export default SideCarousel;