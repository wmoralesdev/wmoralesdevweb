import Link from 'next/link'
import { FunctionComponent } from "react";
import Layout from "../components/Layout";

const Custom404: FunctionComponent = () => {
    return (
        <Layout>
            <div className="w-full h-full text-2xl text-center font-bold flex flex-row flex-wrap space-y-4 justify-around items-center lg:pt-10 lg:text-left lg:text-5xl mb-10">
                <h1 className="text-7xl lg:text-9xl">404</h1>
                <h1 className="font-medium">
                    Oops! These resource no longer exists here :( <br/>
                    <Link href="/">
                        <a className="underline text-blue-600 font-normal text-xl lg:text-4xl hover:text-accent">
                            Let's go to the homepage
                        </a>
                    </Link>
                </h1>
            </div>
        </Layout>
    )
}

export default Custom404