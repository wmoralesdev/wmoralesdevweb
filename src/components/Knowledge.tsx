import { FunctionComponent, useState } from "react";
import SideCarousel from "./SideCarousel";
import Spinner from "./Spinner";

const Knowledge: FunctionComponent = () => {
    const [change, setChange] = useState(false)

    setInterval(() => setChange(true), 1500)

    return(
        <div className="w-full">
            {/* Here's what you can expect me to work with! */}
            <h1 className="md:text-xl">Work in progress!</h1>
            <Spinner/>
        </div>
    )
}

export default Knowledge;