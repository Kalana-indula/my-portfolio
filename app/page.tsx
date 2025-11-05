import Hero from '@/components/Hero';
import React from 'react'
import {FloatingNav} from "@/components/ui/floating-navbar";
import {FaHome} from "react-icons/fa";
import Grid from "@/components/Grid";
import {House} from "lucide-react";

const Home = () => {
    return (
        <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
            <div className="max-w-7xl w-full">
                <FloatingNav navItems={[
                    {name: 'Home', link: '/', icon: <House strokeWidth={1} />}
                ]}/>
                <Hero/>
                <Grid/>
            </div>
        </main>
    )
}

export default Home;