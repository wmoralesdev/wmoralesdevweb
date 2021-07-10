import { FunctionComponent, useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Spinner from "../../components/Spinner";
import Course from "../../components/Course";
import { useRouter } from "next/dist/client/router";
import Inscription from "../../components/Inscription";

const Index: FunctionComponent = () => {
    const router = useRouter()
    const [course, setCourse] = useState<any>(null)
    
    useEffect(() => {
        async function fetchCourses() {
            const { slug } = router.query
            let res = await fetch(`/api/courses/${slug}`)
            let parsed = await res.json()

            setCourse(parsed.data)
        }

        if(router.isReady)
            fetchCourses()
    }, [router.isReady])
    
    return (
        <Layout>
            <div className="flex flex-row flex-wrap justify-around w-full space-y-5">
                <h1 className="w-full font-bold text-xl">Let's sign you up!</h1>
                {
                    course == null ? <Spinner /> : 
                    <div className="mb-10 xl:w-2/6">
                        <Course title={course.title} slug={course.slug} desc={course.desc} 
                        startsAt={course.startsAt} endsAt={course.endsAt} schedule={course.schedule} price={course.price} isShow={true}/>
                    </div>
                }
                <Inscription slug={ course ? course.slug : "" } />
            </div>
        </Layout>
    )
}

export default Index