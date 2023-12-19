import React from 'react'
import OwnerPerson from '../../../src/assets/img/operator.png'

function AboutUs() {
    return (
        <div className='md:flex flex-col md:flex-row m-auto relative md:w-[80%]' id='about_us'>
            <img src={OwnerPerson} alt='' className='md:w-[708px]  md:ml-8'  />
            
            <div className='flex flex-col items-start justify-start bg-primary m-auto md:absolute top-12 right-10 md:w-[450px] px-4 py-12'>
                <h1 className='text-left text-white py-3'>Sobre nós</h1>
                <p className='text-left text-white py-3'>Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico. Com mais de 2000 anos, suas raízes podem ser encontradas em uma obra.</p>
                <p className='text-left text-white py-3'>Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico. Com mais de 2000 anos, suas raízes podem ser encontradas em uma obra.</p>
                <button type="button" className='bg-white border-none rounded-md p-2 mt-8'>Saiba mais sobre nosso historia</button>
            </div>
        </div>
    )
}

export default AboutUs
