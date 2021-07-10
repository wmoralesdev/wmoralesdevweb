import { FunctionComponent, useState } from "react";

import Menu from './Menu'

const Navbar: FunctionComponent = () => {
    const [ showNav, setShowNav ] = useState(false)

    var items = [
        { text: "Home", redirectTo: "/"},
        { text: "Courses", redirectTo: "/courses"},
        { text: "Courses Survey", redirectTo: "/survey"}
    ]

    return(
        <div className="bg-black sticky top-0 z-50 flex items-center justify-end py-2 px-4 md:py-6">
            <div className={`${showNav ? "relative z-50" : ""}`} onClick={() => setShowNav(!showNav)}>
                <div className={`transition-all ${ showNav ? "opacity-0" : "" } bg-white h-1 w-10 rounded-xl my-2`}></div>
                <div className={`transition-all duration-700 ${ showNav ? "transform-gpu rotate-180 bg-black md:bg-white" : "bg-white" } h-1 w-10 rounded-xl my-2`}></div>
                <div className={`transition-all ${ showNav ? "opacity-0" : "" } bg-white h-1 w-10 rounded-xl my-2`}></div>
            </div>
            <Menu items={ items } show={ showNav }/>
        </div>
    )
}

export default Navbar;