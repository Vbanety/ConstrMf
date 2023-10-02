import React from 'react'

function Reputation() {
  return (
    <div className='w-full flex flex-col items-center my-10'>
        <h1 className='font-sans-condensed text-4xl my-8'>Nossa Reputação</h1>
        <div className='flex w-full sm:flex-row flex-col gap-2  justify-around items-center'>
            <div className='max-w-72 flex-1 flex-col items-center justify-start max-w-xs border border-neutral-200 rounded-md p-3 hover:shadow-lg hover:scale-105 hover:transition-all hover:duration-75 ease-in-out'>
                <i className="fa-solid fa-headphones text-secundary"></i>
                <p className='text-neutral-700'>Melhores serviços</p>
                <p className='text-neutral-400'>Existem muitas variações disponíveis de passagens de Lorem Ipsum, mas a maioria sofreu algum tipo de alteração, seja por inserção de passagens com humor</p>
            </div>

            <div className='max-w-72 flex-1 flex-col items-center justify-start max-w-xs border border-neutral-200 rounded-md p-3 hover:shadow-lg hover:scale-105 hover:transition-all hover:duration-75 ease-in-out'>
                <i className="fa-solid fa-headphones text-secundary"></i>
                <p className='text-neutral-700'>Melhores serviços</p>
                <p className='text-neutral-400'>Existem muitas variações disponíveis de passagens de Lorem Ipsum, mas a maioria sofreu algum tipo de alteração, seja por inserção de passagens com humor</p>
            </div>

            <div className='max-w-72 flex-1 flex-col items-center justify-start max-w-xs border border-neutral-200 rounded-md p-3 hover:shadow-lg hover:scale-105 hover:transition-all hover:duration-75 ease-in-out'>
                <i className="fa-solid fa-pen-ruler text-secundary"></i>
                <p className='text-neutral-700'>Melhores serviços</p>
                <p className='text-neutral-400'>Existem muitas variações disponíveis de passagens de Lorem Ipsum, mas a maioria sofreu algum tipo de alteração, seja por inserção de passagens com humor</p>
            </div>
        </div>
    </div>
  )
}

export default Reputation
