import { FunctionComponent } from "react";

const Spinner: FunctionComponent = () => {
    return(
        <div className="w-full h-full flex justify-center items-center animate-pulse">
            <svg className="animate-spin" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <circle cx="50" cy="50" r="32" strokeWidth="5" stroke="#ffffff" strokeDasharray="50.26548245743669 50.26548245743669" fill="none" strokeLinecap="round">
                </circle>
            </svg>
        </div>
    )
}

export default Spinner;