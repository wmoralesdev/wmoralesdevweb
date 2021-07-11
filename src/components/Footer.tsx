import { FunctionComponent } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Footer: FunctionComponent = () => {
    return(
        <footer className="transition-all transition-duration-1000 flex justify-center h-12 w-full bg-blue-600 text-center p-4 fixed bottom-0 left-0 z-50 group md:h-14 space-x-12 hover:bg-accent">
            <h2 className="text-xs transition-all transition-duration-500 md:text-base">
                This site was built with NextJS + TypeScript + TailWindCSS 💜
            </h2>
            <h2 className="hidden lg:block space-x-1">
                <FontAwesomeIcon icon={ faEnvelope } /> <span className="italic">walterrafael26@gmail.com</span>
            </h2>
            <h2 className="hidden lg:block space-x-1">
                <FontAwesomeIcon icon={ faPhone } /> <span className="italic">+503 7132-0261</span>
            </h2>
        </footer>
    )
}

export default Footer;