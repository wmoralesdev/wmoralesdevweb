import { FunctionComponent } from "react";

const Footer: FunctionComponent = () => {
    return(
        <footer className="h-12 w-full bg-blue-600 text-center p-4 fixed bottom-0 left-0 z-50 group md:h-14">
            <h2 className="text-xs transition-all transition-duration-500 group-hover:font-bold md:text-base">
                This site was built with NextJS + TypeScript + TailWindCSS 💜
            </h2>
        </footer>
    )
}

export default Footer;