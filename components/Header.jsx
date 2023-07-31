"use client";

import { CustomButton } from ".";
import { BsArrowUpRight } from "react-icons/bs";
import Image from "next/image";
import { stats } from "./data";
import CountUp from "react-countup";

const Header = () => {
    return (
        <>
            <div className='container mx-auto flex py-8 2xl:pt-20 md:flex-row flex-col items-center'>
                <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col mb-16 md:mb-0'>
                    <h1 className='text-3xl md:txet-4xl mb-4 font-bold text-slate-600 leading-[3rem] 2xl:leading-[4rem]'>
                        Counseling Personal y Coaching Laboral.
                        <br />
                        <span className='text-cyan-600 text-5xl'>
                            Bienestar Personal y Éxito Profesional
                        </span>
                    </h1>
                    <p className='mb-8 leading-relaxed 2xl:mb-14 2xl:leading-[2rem]'>
                        Apasionado por el desarrollo personal y profesional. Brindo apoyo emocional y coaching para superar obstáculos.
                        Identifico fortalezas, mejoro habilidades y liderazgo para lograr el éxito laboral.
                        Acompáñame en este viaje de crecimiento y bienestar. Desata nudos y alcanza nuevos niveles de éxito junto a mí.
                    </p>

                    {/* <div className='flex'>
                        <CustomButton
                            title='Get Started'
                            containerStyles={`bg-[#3b81f5] text-white px-6 py-3 font-semibold text-lg rounded-md hover:bg-blue-800`}
                            iconRight={<BsArrowUpRight size={22} />}
                        />
                    </div> */}
                </div>

                <div className='relative lg:max-w-xl md:w-1/2 w-full h-[400px] md:h-[500px] items-center justify-center flex'>
                    <Image src='/1.jpg' width={1000} height={1000} alt='grupotrabajo1' />

                    <div className='absolute bg-white p-2 shadow-2xl rounded-lg left-0 top-6 flex items-center gap-2 cursor-pointer hover:scale-110 ease-in-out duration-300'>
                        <div className='w-[82px] h-[82px] rounded-full'>
                            <Image
                                src='/fer.jpg'
                                width={68}
                                height={68}
                                alt='fer'
                                className='rounded-full w-full h-full object-cover'
                            />
                        </div>

                        <div>
                            <p className='font-semibold'>Fernando Coen</p>
                            <span className='text-xs font-medium'>
                                Counselor y Coaching.
                            </span>
                        </div>
                    </div>

                </div>
            </div>

            <div className='w-full flex flex-col md:flex-row gap-16 items-center justify-between py-10 md:py-20'>
                {stats.map(({ id, value, title, start, suffix }) => (
                    <CountUp
                        start={start}
                        end={value}
                        delay={0}
                        separator=''
                        suffix={suffix}
                        enableScrollSpy={true}
                        key={id}
                    >
                        {({ countUpRef }) => (
                            <div className='flex flex-col items-center justify-center border border-slate-300 w-[250px] h-[250px] rounded-lg'>
                                <span
                                    ref={countUpRef}
                                    className='text-6xl text-cyan-600 font-bold mb-3'
                                />

                                <span className='text-xl text-gray-600 font-semibold'>
                                    {title}
                                </span>
                            </div>
                        )}
                    </CountUp>
                ))}
            </div>
        </>
    );
};

export default Header;
