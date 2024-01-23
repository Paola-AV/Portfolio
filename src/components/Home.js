import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa"
import cafe from "../images/coffee-plant_9921029 (1).svg";
import casa from "../images/house (1).svg";
import lider from "../images/leader_11437818.svg";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { Skills } from './Skills';
import ol4 from "../images/ol77.png";
import real from "../images/real2.png";
import af from "../images/af2.png"

export function Home() {
    const blob1 = "M158.7 -157.7C208 -109.4 252 -54.7 244.8 -7.2C237.6 40.3 179.3 80.6 129.9 130.6C80.6 180.6 40.3 240.3 -4.1 244.4C-48.6 248.6 -97.1 197.1 -126.4 147.1C-155.8 97.1 -165.9 48.6 -159.3 6.6C-152.7 -35.4 -129.4 -70.7 -100 -119C-70.7 -167.4 -35.4 -228.7 9.7 -238.4C54.7 -248 109.4 -206 158.7 -157.7"

    const blob2 = "M139.6 -142.1C164.6 -114.6 157.3 -57.3 164 6.7C170.7 70.7 191.4 141.4 166.4 167.9C141.4 194.4 70.7 176.7 3.4 173.3C-63.9 169.9 -127.8 180.8 -171.6 154.3C-215.4 127.8 -239.2 63.9 -231 8.2C-222.7 -47.4 -182.4 -94.8 -138.6 -122.3C-94.8 -149.8 -47.4 -157.4 4.9 -162.3C57.3 -167.3 114.6 -169.6 139.6 -142.1"

    const blob3 = "M144.4 -150.7C182.7 -106.1 206.4 -53 209 2.6C211.6 58.2 193.1 116.4 154.8 163.6C116.4 210.8 58.2 246.9 0.5 246.4C-57.3 245.9 -114.6 208.9 -164.6 161.7C-214.6 114.6 -257.3 57.3 -256.3 0.9C-255.4 -55.4 -210.8 -110.8 -160.8 -155.4C-110.8 -200.1 -55.4 -234.1 -1.2 -232.9C53 -231.7 106.1 -195.4 144.4 -150.7";

    const blob4 = "M171 -158.7C220.8 -121.2 259.9 -60.6 263.9 4C267.9 68.6 236.8 137.2 187 177.3C137.2 217.5 68.6 229.3 -0.8 230.1C-70.2 230.9 -140.5 220.8 -190.5 180.6C-240.5 140.5 -270.2 70.2 -265.9 4.4C-261.5 -61.5 -223 -123 -173 -160.5C-123 -198 -61.5 -211.5 -0.5 -211.1C60.6 -210.6 121.2 -196.2 171 -158.7";
    const blobAnimation = useSpring({
        from: { x: blob1 },
        to: { x: blob2 },
        config: {
            duration: 3000
        },
        loop: { reverse: true }
    })

    const blobAnimation2 = useSpring({
        from: { x: blob3 },
        to: { x: blob4 },
        config: {
            duration: 3000
        },
        loop: { reverse: true }
    })

    const blobAnimation3 = useSpring({
        from: { x: blob1 },
        to: { x: blob4 },
        config: {
            duration: 3000
        },
        loop: { reverse: true }
    })

    const blobAnimation4 = useSpring({
        from: { x: blob2 },
        to: { x: blob3 },
        config: {
            duration: 3000
        },
        loop: { reverse: true }
    })

    const [hovered, setHovered] = useState(false);

    const handleHover = () => {
        setHovered(!hovered);
    };

    const [realState, setRealState] = useState(false);

    const handleRealState = () => {
        setRealState(!realState);
    };

    const [company, setCompany] = useState(false);

    const handleCompany = () => {
        setCompany(!company);
    };

    return (
        <>
            <section class="w-full grid bg-darkBlue relative">
                <div class=" absolute hidden z-[1] translate-x-[6rem] translate-y-[-4rem] rotate-[0deg]">
                    <svg id="visual" viewBox="0 0 900 600" width={900} height={600} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" class="w-[87%] h-auto drop-shadow-[0_0px_35px_rgba(207,208,229,0.25)]">
                        {/* Definir el degradado */}
                        <defs>
                            <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" style={{ stopColor: '#d4079d' }} />
                                <stop offset="100%" style={{ stopColor: '#561caa' }} />
                            </linearGradient>
                        </defs>

                        <g transform="translate(473.53831406023573 293.26283657035844)">
                            {/* Aplicar el degradado como fondo */}
                            <animated.path d={blobAnimation4.x} fill="url(#grad2)" />
                        </g>
                    </svg>
                </div>
                <div class="flex flex-col justify-self-center  w-[65%] mt-[10rem] z-[100]">
                    <h1 class="text-textW font-sans text-5xl lg:text-8xl font-semibold pb-[2rem]">Welcome!</h1>
                    <h1 class="text-textW font-sans text-3xl lg:text-6xl font-semibold pb-[2rem]">I am Paola Arrieta</h1>
                    <h3 class="text-textW font-sans text-xl lg:text-5xl font-semibold pb-[1rem]">Web developer</h3>
                    <p class="text-textW font-sans text-xl lg:text-2xl">I'm a web developer who loves creating attractive and user-friendly websites.<br></br>
                        What started as a hobby became my biggest passion and goal in life.<br></br>
                        I focus on developing websites that will deliver a great and accesible experience; from company systems to awesome web pages that tell customers about a business and its products.<br></br>
                        I enjoy turning ideas into creative, easy-to-use designs that bring websites to life.
                    </p>
                </div>
                <div class="hidden absolute z-[1] bottom-0 translate-x-[-8rem] translate-y-[25rem]">
                    <svg id="visual" viewBox="0 0 900 600" width={900} height={600} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" class="w-[80%] h-auto drop-shadow-[0_0px_35px_rgba(207,208,229,0.25)]">
                        <defs>
                            <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" style={{ stopColor: '#d4079d' }} />
                                <stop offset="100%" style={{ stopColor: '#561caa' }} />
                            </linearGradient>
                        </defs>
                        <g transform="translate(407.8302694033731 297.56887719695067)">
                            <animated.path d={blobAnimation3.x} fill="url(#grad2)" />
                        </g>
                    </svg>
                </div>

                <div class="hidden">
                    <svg id="visual" viewBox="0 0 900 600" width={900} height={600} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" class="z-[1] w-[48%] absolute right-0 justify-self-center translate-x-[6rem] translate-y-[-23rem] rotate-[135deg] h-auto drop-shadow-[0_0px_35px_rgba(207,208,229,0.25)]">
                        {/* Definir el degradado */}
                        <defs>
                            <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" style={{ stopColor: '#d4079d' }} />
                                <stop offset="100%" style={{ stopColor: '#561caa' }} />
                            </linearGradient>
                        </defs>

                        <g transform="translate(473.53831406023573 293.26283657035844)">
                            {/* Aplicar el degradado como fondo */}
                            <animated.path d={blobAnimation2.x} fill="url(#grad2)" />
                        </g>
                    </svg>
                </div>
            </section>
            <section class="w-full bg-darkBlue pt-[5rem] relative">
                <div class="flex flex-col  justify-center items-center">
                    <button class="text-purple font-sans border-2 border-purple rounded-lg font-semibold text-2xl p-2 shadow-[0_0px_33px_3px_rgba(207,208,229,0.15)]">Check my projects!</button>
                </div>
                <div class="flex flex-row z-[100] p-[5rem] justify-center lg:justify-end items-center w-[95%]">
                    <FaGithub class="fill-purple w-[3rem] h-auto mr-[1rem]" />
                    <FaLinkedin class="fill-purple w-[3rem] h-auto" />
                </div>

            </section>

            <section class="w-full flex flex-row bg-darkBlue relative pt-[5rem] pb-[5rem]">
                <div class="hidden">
                    <svg id="visual" viewBox="0 0 900 600" width={900} height={600} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" class="w-[35%] h-auto absolute z-[1] right-0 translate-x-[8rem] translate-y-[15rem]  drop-shadow-[0_0px_35px_rgba(207,208,229,0.25)]">
                        {/* Definir el degradado */}
                        <defs>
                            <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" style={{ stopColor: '#d4079d' }} />
                                <stop offset="100%" style={{ stopColor: '#561caa' }} />
                            </linearGradient>
                        </defs>

                        <g transform="translate(473.53831406023573 293.26283657035844)">
                            {/* Aplicar el degradado como fondo */}
                            <animated.path d={blobAnimation4.x} fill="url(#grad2)" />
                        </g>
                    </svg>
                </div>
                <Skills class="z-[100]"></Skills>
            </section>

            <section class="w-full flex flex-row justify-center items-center bg-darkBlue pt-[5rem] pb-[15rem] relative">
                <div class="hidden">
                    <svg id="visual" viewBox="0 0 900 600" width={900} height={600} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" class="z-[1] w-[40%] absolute left-0 top-0 justify-self-center translate-x-[-10rem] translate-y-[0rem] rotate-[0deg] h-auto drop-shadow-[0_0px_35px_rgba(207,208,229,0.25)]">
                        {/* Definir el degradado */}
                        <defs>
                            <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" style={{ stopColor: '#d4079d' }} />
                                <stop offset="100%" style={{ stopColor: '#561caa' }} />
                            </linearGradient>
                        </defs>

                        <g transform="translate(473.53831406023573 293.26283657035844)">
                            {/* Aplicar el degradado como fondo */}
                            <animated.path d={blobAnimation2.x} fill="url(#grad2)" />
                        </g>
                    </svg>
                </div>
                <div class="w-[87%] z-[100] flex flex-col items-center">
                    <h1 class="text-textW font-sans text-4xl lg:text-7xl font-semibold pb-[4rem] drop-shadow-[0_0px_25px_rgba(207,208,229,0.5)]">My Projects</h1>
                    <div class="flex flex-col lg:flex-row justify-center items-center lg:space-x-10 w-full">
                        <div class="text-textW flex flex-col mb-[1rem] justify-center items-center h-[20rem] md:h-[27rem] lg:w-[25%] w-[70%] font-sans relative border-2 border-purple rounded-lg text-4xl p-[1rem] shadow-[0_0px_33px_3px_rgba(207,208,229,0.15)] hover:shadow-purple duration-700"
                            onMouseEnter={handleHover}
                            onMouseLeave={handleHover}>
                            <h2 class="z-40 font-bold">Coffe Roastery</h2>
                            <img src={hovered ? ol4 : cafe} class="absolute w-auto h-[100%] z-1 opacity-[.5] transition-opacity duration-1000" ></img>
                        </div>
                        <div class="text-textW flex flex-col mb-[1rem] justify-center items-center font-sans h-[20rem] md:h-[27rem] lg:w-[25%] w-[70%] relative border-2 border-purple rounded-lg text-4xl p-[1rem] shadow-[0_0px_33px_3px_rgba(207,208,229,0.15)] hover:shadow-purple duration-700"
                            onMouseEnter={handleRealState}
                            onMouseLeave={handleRealState}>
                            <h2 class="z-40 font-bold">Real State</h2>
                            <img src={realState ? real : casa} class="absolute w-[100%] h-[100%] z-1 opacity-[.5] duration-700"></img>
                        </div>
                        <div class="text-textW flex flex-col justify-center items-center font-sans relative h-[20rem] md:h-[27rem] lg:w-[25%] w-[70%] text-center border-2 border-purple rounded-lg text-4xl p-[1rem] shadow-[0_0px_33px_3px_rgba(207,208,229,0.15)] hover:shadow-purple duration-700"
                            onMouseEnter={handleCompany}
                            onMouseLeave={handleCompany}>
                            <h2 class="z-40 font-bold">Company system</h2>
                            <img src={company ? af : lider} class="absolute w-auto h-[100%] z-1 opacity-[.5] duration-700"></img>
                        </div>
                    </div>
                </div>
                <div class="hidden">
                    <svg id="visual" viewBox="0 0 900 600" width={900} height={600} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" class="w-[35%] h-auto absolute z-[1] translate-x-[0rem] translate-y-[0rem] right-0 bottom-0  drop-shadow-[0_0px_35px_rgba(207,208,229,0.25)]">
                        {/* Definir el degradado */}
                        <defs>
                            <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" style={{ stopColor: '#d4079d' }} />
                                <stop offset="100%" style={{ stopColor: '#561caa' }} />
                            </linearGradient>
                        </defs>

                        <g transform="translate(473.53831406023573 293.26283657035844)">
                            {/* Aplicar el degradado como fondo */}
                            <animated.path d={blobAnimation4.x} fill="url(#grad2)" />
                        </g>
                    </svg>
                </div>
            </section>
            <section class="flex flex-col relative bg-darkBlue justify-center items-center pb-[10rem]">
                <div class="w-[70%] lg:w-[60%] flex flex-col text-center bg-purple rounded-xl p-[1.5rem] shadow-[0_0px_33px_3px_rgba(207,208,229,0.15)]">
                    <h1 class="text-darkBlue font-sans text-2xl lg:text-5xl font-semibold pb-[2rem] drop-shadow-[0_0px_35px_rgba(23, 28, 40,0.5)]">Get in contact with me</h1>
                    <input class="p-[1rem]  bg-darkBlue border-2 border-purple rounded-lg mb-[1rem] shadow-[0_0px_33px_3px_rgba(207,208,229,0.15)]" placeholder='Name'></input>
                    <input class="p-[1rem] bg-darkBlue border-2 border-purple rounded-lg mb-[1rem] shadow-[0_0px_33px_3px_rgba(207,208,229,0.15)]" placeholder='Company'></input>
                    <input class="p-[1rem] border-2 bg-darkBlue border-purple rounded-lg mb-[1rem] shadow-[0_0px_33px_3px_rgba(207,208,229,0.15)]" placeholder='Email'></input>
                    <textarea class="p-[1rem] border-2 bg-darkBlue border-purple rounded-lg mb-[1rem] shadow-[0_0px_33px_3px_rgba(207,208,229,0.15)]" placeholder='Write your message here'></textarea>
                </div>
            </section>
        </>
    )
}

/*box-shadow: 0px 0px 33px 3px rgba(207, 208, 229, 0.2); */