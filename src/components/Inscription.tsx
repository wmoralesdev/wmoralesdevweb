import { FunctionComponent, useRef, useState } from "react";

const Inscription: FunctionComponent<{slug: string}> = ({ slug }) => {
    console.log(slug)
    
    const [submitted, setSubmitted] = useState(false)

    var fullname = useRef<HTMLInputElement>(null)
    var email = useRef<HTMLInputElement>(null)
    var phone = useRef<HTMLInputElement>(null)
    var receipt = useRef<HTMLInputElement>(null)
    var submitbtn = useRef<HTMLButtonElement>(null)

    function onClick(e: any) {
        e.preventDefault()

        if(fullname.current != null && email.current != null && phone.current != null && receipt.current != null)
            if(fullname.current.value != "" && email.current.value != "" && phone.current.value != "")
                fetch('/api/inscriptions', {
                    method: 'POST',
                    body: JSON.stringify({
                        fullname: fullname.current.value,
                        email: email.current.value,
                        phone: phone.current.value,
                        receipt: receipt.current.value,
                        courseSlug: slug
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(res => res.json)
                .then(finalRes => {
                    if(submitbtn.current) {
                        submitbtn.current.disabled = true
                        setSubmitted(true)
                    }
                })
                
    }

    return (
        <div className="w-full relative mb-10 text-sm xl:w-2/6">
            <p className={`transition-all transition-duration-1000 
            ${!submitted ? "w-0 h-0 z-0" : "w-full h-full z-20"} absolute bg-blue-600 rounded-lg left-0 top-0 flex justify-center items-center font-bold text-xl text-center px-10`}>
                {
                    submitted ? `Thanks ${fullname.current != null ? fullname.current.value.split(' ')[0] : ""}, your inscription has been saved` : ""
                }
            </p>
            <div className="bg-white relative z-10 rounded-lg space-y-5 py-5 px-4">
                <div className="flex flex-col space-y-1">
                    <label className="font-bold text-black text-base" htmlFor="fullname">Fullname</label>
                    <input className="outline-none focus:border-none bg-black rounded-lg px-3 py-1" placeholder="John Doe" type="text" ref={fullname} />
                </div>
                <div className="flex flex-col space-y-1">
                    <label className="font-bold text-black text-base" htmlFor="email">Email</label>
                    <input className="outline-none focus:border-none bg-black rounded-lg px-3 py-1" placeholder="example@gmail.com" type="text" ref={email} />
                </div>
                <div className="flex flex-col space-y-1">
                    <label className="font-bold text-black text-base" htmlFor="fullname">Phone</label>
                    <input className="outline-none focus:border-none bg-black rounded-lg px-3 py-1" placeholder="71320261" type="phone" ref={phone} />
                </div>
                <div className="flex flex-col space-y-1">
                    <label className="font-bold text-black text-base" htmlFor="fullname">Receipt Link</label>
                    <input className="outline-none focus:border-none bg-black rounded-lg px-3 py-1" placeholder="GDrive Link if you already have it" type="text" ref={receipt} />
                </div>
                <button className={`transition-all ${submitted ? 'bg-gray-600' : 'bg-accent hover:bg-blue-600' } w-full font-bold px-4 py-2 rounded-lg`} 
                ref={submitbtn} onClick={onClick}>Sign up</button>
            </div>
        </div>
    )
}

export default Inscription;