import { FunctionComponent, useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Spinner from "../../components/Spinner";
import Course from "../../components/Course";

const Index: FunctionComponent = (props) => {
    const [courses, setCourses] = useState<any>(null)
    
    useEffect(() => {
        async function fetchCourses() {
            let res = await fetch('/api/courses')
            let parsed = await res.json()

            setCourses(parsed.data)
        }

        fetchCourses()
    }, [])
    
    return (
        <Layout>
            {
                courses == null ? <Spinner /> : 
                <div className="flex flex-wrap justify-center space-y-8 xl:space-x-5 mb-10">
                    <h1 className="w-full font-bold text-xl">Check out my current courses!</h1>
                    { 
                        courses.map((i: any) => 
                            <Course title={i.title} slug={i.slug} desc={i.desc} startsAt={i.startsAt} endsAt={i.endsAt} schedule={i.schedule} price={i.price} isShow={false}/>
                        ) 
                    }
                </div>
            }
        </Layout>
    )
}

export default Index