import React from 'react'

import NoteImg from '../../assets/iconNote.svg'
import HandIcon from '../../assets/iconHands.svg'
import TrofelIcon from '../../assets/iconMedal.svg'
import MapIcon  from '../../assets/iconMap.svg'

function Experience() {
  return (
    <div className='bg-white w-full flex flex-col md:flex-row items-center justify-center p-8 md:h-[650px]'>
        <div className='w-4/5 h- sm:w-[500px] md:h-auto m-auto flex flex-col gap-y-8 md:block'>
            
            <div className='md:float-right'>
                <div className='relative'>
                    <div className='md:absolute -top-64 right-0'>
                        <div className='relative shadow-lg rounded-lg w-full md:w-64 md:h-40 flex flex-col items-center justify-center p-2 z-10'>
                            <img src={HandIcon} className='w-16 absolute -right-4 -top-5' />
                            <p className='font-work text-6xl w-[80%] text-left'>123</p>
                            <p className='border-l-8 border-secundary w-[80%] text-center m-auto '>Projetos completados</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='md:float-left'>
                <div className='relative'>
                    <div className='md:absolute -top-32 left-0'>
                        <div className='relative shadow-lg rounded-lg w-full md:w-80 md:h-40 flex flex-col items-center justify-center p-2'>
                            <img src={NoteImg} className='w-16 absolute -left-4 -top-5' />
                            <p className='font-work text-6xl w-[80%] text-left'>86</p>
                            <p className='border-l-8 border-secundary w-[80%] text-center m-auto '>Projetos completados</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='md:float-right'>
                <div className='relative'>
                    <div className='md:absolute -top-5 right-0'>
                        <div className='relative shadow-lg rounded-lg w-full md:w-64 md:h-40 flex flex-col items-center justify-center p-2'>
                            <img src={TrofelIcon} className='w-16 absolute -right-4 -bottom-5' />
                            <p className='font-work text-6xl w-[80%] text-left'>500</p>
                            <p className='border-l-8 border-secundary w-[80%] text-center m-auto '>Projetos completados</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='md:float-left md:-z-10'>
                <div className='relative'>
                    <div className='md:absolute top-28 left-10'>
                        <div className='relative shadow-lg rounded-lg w-full md:w-64 md:h-40 flex flex-col items-center justify-center p-2'>
                            <img src={MapIcon} className='w-16 absolute -left-4 -bottom-5' />
                            <p className='font-work text-6xl w-[80%] text-left'>198</p>
                            <p className='border-l-8 border-secundary w-[80%] text-center m-auto '>Projetos completados</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
        
        <div className="md:w-2/6 flex flex-col items-center justify-center md:items-start md:justify-start gap-y-4 mt-8 md:m-0">
            <h1 className="text-primary font-work font-bold text-4xl md:text-6xl text-left">10 anos de</h1>
            <h1 className="text-primary font-work font-bold text-4xl md:text-6xl text-left">experiência</h1>
            <p className="font-work text-neutral-600 text-left">Nossa empresa vem construindo seus sonhos de moradia com todo conforto e tecnologia.</p>
            <button className="py-4 px-2 bg-primary border border-white hover:border-primary hover:-translate-y-1 transition-all duration-75 hover:text-primary hover:bg-transparent text-white">Contate-nos</button>
        </div>
    </div>
  )
}

export default Experience
