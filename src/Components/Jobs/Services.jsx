import React from 'react'
import dataJob from './dataJob'
import { Reveal } from '../Animations/Reveal'


function Services() {
  return (
    <div className='w-full bg-neutral-100 p-8' id="servicos">
        <h1 className='text-neutral-800 font-bold font-sans-condensed text-4xl mb-8'>Serviços</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 items-center md:max-w-[80%] m-auto'>
            {dataJob.map((item, key) => {
                return (
                        <Reveal key={key}>
                            <div className={`shadow-2xl rounded-md w-full h-52 h- md:w-56 md:h-40 bg-${item.bg} flex flex-col items-center justify-center p-2 m-auto`}>
                                <img src={item.img} alt='img' className={`w-12 m-auto border-b-2 pb-3 border-${item.textColor}`} />
                                <p className={`text-${item.textColor} font-work`}>{item.text}</p>
                            </div>
                        </Reveal>
                )
            })}

        </div>
    </div>
  )
}

export default Services
