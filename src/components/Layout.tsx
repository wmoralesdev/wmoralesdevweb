import { FunctionComponent } from "react";
import Bighero from "./Bighero";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Separator from "./Separator";

const Layout: FunctionComponent = ({children}) => {
    return(
        <main className="flex flex-col w-screen min-h-screen bg-black text-white mb-14 md:w-4/5 md:mx-auto">
            <Navbar />
            <div className="px-10 xl:px-0">
                <Bighero />
                <Separator />
                { children }
                <Footer />
            </div>
        </main>
    )
}

export default Layout