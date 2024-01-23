import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../images/arrow1.svg";
import arrow2 from "../images/arrow2.svg";
import cPlus from "../images/c-.png";
import cSharp from "../images/c-sharp.png";
import java from "../images/java.png";
import react from "../images/physics.png";
import python from "../images/python.png";
import js from "../images/js.png"

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="w-full mt-[6rem] mb-[6rem] z-[100]" >
            <div className="flex flex-col justify-center items-center">
                <h1 class="text-textW font-sans text-2xl md:text-4xl lg:text-5xl font-semibold pb-[2rem] drop-shadow-[0_0px_35px_rgba(207,208,229,0.5)]">Some more about my skills</h1>
                <Carousel responsive={responsive} infinite={true} className="w-[80%] lg:w-[70%] border-2 border-purple shadow-[0_0px_33px_3px_rgba(207,208,229,0.15)] rounded-xl p-[2rem]">
                    <div class="flex flex-col justify-center items-center font-sans text-textW font-semibold">
                        <img src={react} alt="Image" class="w-[7rem] lg:w-[10rem] h-auto" />
                        <h5>React</h5>
                    </div>
                    <div class="flex flex-col justify-center items-center font-sans text-textW font-semibold">
                        <img src={cPlus} alt="Image" class="w-[7rem] lg:w-[10rem] h-auto" />
                        <h5>C++</h5>
                    </div>
                    <div class="flex flex-col justify-center items-center font-sans text-textW font-semibold">
                        <img src={cSharp} alt="Image" class="w-[7rem] lg:w-[10rem] h-auto" />
                        <h5>C#</h5>
                    </div>
                    <div class="flex flex-col justify-center items-center font-sans text-textW font-semibold">
                        <img src={js} alt="Image" class="w-[7rem] lg:w-[10rem] h-auto" />
                        <h5>Javascript</h5>
                    </div>
                    <div class="flex flex-col justify-center items-center font-sans text-textW font-semibold">
                        <img src={java} alt="Image" class="w-[7rem] lg:w-[10rem] h-auto" />
                        <h5>Java</h5>
                    </div>
                    <div class="flex flex-col justify-center items-center font-sans text-textW font-semibold">
                        <img src={python} alt="Image" class="w-[7rem] lg:w-[10rem] h-auto" />
                        <h5>Python</h5>
                    </div>


                </Carousel>
            </div>
        </section>
    )
}