import Link from 'next/link'
import { FunctionComponent } from "react";

interface ICourseProps {
    slug: String,
    title: String,
    desc: String,
    schedule: String,
    startsAt: String,
    endsAt: String,
    price: Number,
    isShow: Boolean
}

const Course: FunctionComponent<ICourseProps> = ({ slug, title, desc, schedule, startsAt, endsAt, price, isShow }) => {
    return(
        <div className={`flex flex-col justify-between w-full bg-white rounded-lg px-4 py-5 text-black text-sm ${isShow ? "xl:w-full" : "xl:w-1/4"}`}>
            <div className="space-y-3 mb-10">
                <h1 className="font-bold text-lg lg:h-14">{ title }</h1>
                <h2 className="font-medium text-sm text-justify lg:h-28">{ desc }</h2>
                <p>Schedule: { schedule.split('>').map(p => <span>{ p }</span>) } </p>
                <div>
                    <p>Starts at: { startsAt }</p>
                    <p>Ends at: { endsAt }</p>
                </div>
                <p className="font-bold">Price: ${ price.toFixed(2) }</p>
            </div>
            
            <div className={`${isShow ? "hidden" : ""} flex transition-all transition-duration-500 w-full py-2 bg-accent rounded-lg font-bold text-white text-center hover:bg-blue-600`}>
                <Link href="/inscription/[slug]" as={`/inscription/${slug}`}>
                    <a className="w-full">Sign up here</a>
                </Link>
            </div>
        </div>
    )
}

export default Course;