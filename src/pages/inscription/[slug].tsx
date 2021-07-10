import Head from 'next/head'
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
            <Head>
                <title>Inscription</title>
                <meta property="og:title" content="Inscription" key="title" />
                <meta name="description" 
                content="Let's sign you up!"/>
            </Head>
            <div className="flex flex-row flex-wrap justify-around items-start w-full space-y-5 mb-10">
                <div className="flex flex-row flex-wrap justify-center items-start w-full">
                    <h1 className="w-full font-bold text-xl xl:w-1/2 text-center">Let's sign you up!</h1>
                    <h1 className="w-full text-base xl:w-1/2 text-center">
                        You can make your payment via Bank Account Transfer <br/>
                        <strong className="text-sm text-accent">Cuenta de Ahorro Agricola </strong>
                        <strong className="text-sm text-blue-600">3112321229 </strong> <br/>
                        <strong className="text-sm text-blue-600">Walter Rafael Morales Henriquez </strong>
                        <strong className="text-sm text-accent italic">walterrafael26@gmail.com</strong>
                    </h1>
                </div>
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