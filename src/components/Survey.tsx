import { FunctionComponent, useRef, useState } from "react";

const CustomCheckbox: FunctionComponent<{id: string}> = ({id}) => {
    return (
        <div>
            <input type="checkbox" id={id} name="A3-confirmation" value="yes" className="opacity-0 absolute h-8 w-8" />
            <div className="bg-white border-2 rounded-md border-blue-400 w-8 h-8 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
                <svg className="fill-current hidden w-3 h-3 text-blue-600 pointer-events-none" version="1.1" viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fillRule="evenodd">
                        <g transform="translate(-9 -11)" fill="#1F73F1" fillRule="nonzero">
                            <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    )
}

const Survey: FunctionComponent = () => {
    var [disabled, setDisabled] = useState(false)
    var submitbtn = useRef<HTMLButtonElement>(null)
    
    function onClick() {
        var opt1 = document.getElementById('opt1') as HTMLInputElement
        var opt2 = document.getElementById('opt2') as HTMLInputElement
        var opt3 = document.getElementById('opt3') as HTMLInputElement
        var opt4 = document.getElementById('opt4') as HTMLInputElement
        var opt5 = document.getElementById('opt5') as HTMLInputElement

        var body = {
            cpp: opt1.checked,
            xamarin: opt2.checked,
            react: opt3.checked,
            next: opt4.checked,
            dotnet: opt5.checked
        }

        console.log(body)

        fetch('/api/survey', {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json)
        .then(finalRes => {
            if(submitbtn.current) {
                submitbtn.current.disabled = true
                setDisabled(true)

                console.log(finalRes)
            }
        })
    }

    return (
        <div className="flex flex-row justify-center">
            <div className="md:w-2/3 space-y-10">
                <div className="flex justify-between">
                    <h1 className="font-bold text-xl">What are you interested in learning? 
                    <span className={`transition-all ${ !disabled ? "text-black" : "text-accent" } ml-4`}>Thanks for your answer!</span></h1>
                    <button ref={submitbtn} onClick={onClick}
                        className={`transition-all ${disabled ? 'bg-gray-600' : 'bg-accent hover:bg-blue-600' } font-bold px-4 py-2 rounded-lg`}>
                        Submit
                    </button>
                </div>
                <div className="w-full my-4 space-y-2">
                    <div className="flex justify-between items-center w-full px-3 py-2 rounded-lg bg-white text-black font-bold shadow-md">
                        <label htmlFor="opt1">Advanced C++ Techniques and Data Structures</label>
                        <CustomCheckbox id="opt1"/>
                    </div>

                    <div className="flex justify-between items-center w-full px-3 py-2 rounded-lg bg-white text-black font-bold shadow-md">
                        <label htmlFor="opt2">Xamarin Development</label>
                        <CustomCheckbox id="opt2"/>
                    </div>

                    <div className="flex justify-between items-center w-full px-3 py-2 rounded-lg bg-white text-black font-bold shadow-md">
                        <label htmlFor="opt3">ReactJS + TailwindCSS + TypeScript</label>
                        <CustomCheckbox id="opt3"/>
                    </div>

                    <div className="flex justify-between items-center w-full px-3 py-2 rounded-lg bg-white text-black font-bold shadow-md">
                        <label htmlFor="opt4">NextJS + TailwindCSS + TypeScript (Like this site!)</label>
                        <CustomCheckbox id="opt4"/>
                    </div>

                    <div className="flex justify-between items-center w-full px-3 py-2 rounded-lg bg-white text-black font-bold shadow-md">
                        <label htmlFor="opt5">.NET Core API Development</label>
                        <CustomCheckbox id="opt5"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Survey;