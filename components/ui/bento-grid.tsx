'use client'

import {cn} from "@/lib/utils";
import {GlobeDemo} from "@/components/ui/GlobeDemo";
import {BackgroundGradientAnimation} from "@/components/ui/background-gradient-animation";
import Lottie from "react-lottie";
import {useState} from "react";
import animationData from "@/data/confetti.json";
import MagicButton from "@/components/ui/MagicButton";
import {IoCopy, IoCopyOutline} from "react-icons/io5";

export const BentoGrid = ({
                              className,
                              children,
                          }: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
                className,
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
                                  className,
                                  id,
                                  title,
                                  description,
                                  img,
                                  imgClassName,
                                  titleClassName,
                                  spareImg,
                              }: {
    className?: string;
    id?: number;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    img?: string;
    imgClassName?: string;
    titleClassName?: string;
    spareImg?: string;
}) => {
    const [copied,setCopied]=useState(false);

    const handleCopy = ()=>{
        navigator.clipboard.writeText('kalanaindula@outlook.com');

        setCopied(true);
    }

    return (
        <div
            className={cn(
                "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
                className,
            )}
            style={{
                background: '#141826',
                backgroundColor: 'linear-gradient(90deg,rgba(20, 24, 38, 1) 0%, rgba(31, 80, 153, 1) 53%)'
            }}
        >
            <div className={`${id === 6 && 'flex justify-center'} h-full`}>
                <div className="w-full h-full absolute">
                    {img && (
                        <img
                            src={img}
                            alt={img}
                            className={cn(imgClassName, 'object-cover object-center')}
                        />
                    )}
                </div>
                <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
                    {spareImg && (
                        <img
                            src={spareImg}
                            alt={spareImg}
                            className="object-cover object-center w-full h-full"
                        />
                    )}
                </div>

                {id === 6 && (
                    <div className="absolute inset-0 pointer-events-none">
                        <BackgroundGradientAnimation>
                            <div className="absolute inset-0 z-10 flex items-center justify-center text-white font-bold px-4 text-3xl text-center md:text-4xl lg:text-7xl" />
                        </BackgroundGradientAnimation>
                    </div>
                )}


                <div className={cn(
                    titleClassName,
                    'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
                )}>
                    <div
                        className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
                        {description}
                    </div>
                    <div className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}>
                        {title}
                    </div>


                    {id === 2 && (
                        <div className="absolute inset-0 rounded-3xl overflow-hidden">
                            <img
                                src="/world.jpg"
                                alt="Showcase image"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                    )}

                    {id === 3 && (
                        <div className="flex lg:gap-5 w-fit absolute -right-3 lg:-right-2 mr-3">
                            <div className="flex flex-col gap-3 lg:gap-1">
                                {['React.js', 'Next.js', 'TypeScript'].map(
                                    (item) => (
                                        <span key={item}
                                              className="py-2 lg:py-3 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                                        {item}
                                    </span>
                                    )
                                )}
                                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]"/>
                            </div>
                            <div className="flex flex-col gap-3 lg:gap-1">
                                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]"/>
                                {['React.js', 'Next.js', 'TypeScript'].map(
                                    (item) => (
                                        <span key={item}
                                              className="py-2 lg:py-3 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                                        {item}
                                    </span>
                                    )
                                )}
                            </div>
                        </div>
                    )}

                    {id === 6 && (
                        <div className="mt-5 relative">
                            <div className={`absolute -bottom-5 right-0`}>
                                <Lottie options={{
                                    loop:copied,
                                    autoplay:copied,
                                    animationData,
                                    rendererSettings:{
                                        preserveAspectRatio:'xMidYMid slice',}
                                }}/>
                            </div>

                            <MagicButton
                                title={copied ? 'Email copied' : 'Copy my email'}
                                icon={<IoCopyOutline/>}
                                position="left"
                                otherClasses="!bg-[#161a31]"
                                handleClick={handleCopy}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};