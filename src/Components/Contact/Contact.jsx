import React from 'react'

function Contact() {
  return (
    <div id="contato" className='bg-neutral-100 w-full flex flex-col items-center justify-center p-4 md:p-10'>
            <h1 className='text-4xl text-neutral-900 font-work my-2'>O que nós podemos fazer por você?</h1>
            <p>Nós estamos preparados para cuidar de projetos com alta complexidade, desde ambiente comercial a industrial.</p>
        <form className='w-full md:w-[500px] my-5 md:my-10'>
            <div className='flex flex-col md:flex-row w-full gap-4 mb-4'>
                <input className='border-neutral-400 w-full h-10 shadow-sm px-2 rounded-md active:border-none' type='text' placeHolder='Seu Nome'/>
                <input className='border-neutral-400 w-full h-10 shadow-sm px-2 rounded-md' type='text' placeHolder='Seu Email'/>
            </div>

            <div className='flex flex-col md:flex-row w-full gap-4'>
                <select className='bg-white text-neutral-400 border-neutral-400 w-full h-10 shadow-sm p-2 rounded-md' type='text' placeHolder='Seu Email'>
                    <option selected value=''>Motivo do contato</option>
                    <option selected value=''>Novos empreendimento</option>
                    <option selected value=''>Orçamento</option>
                    <option selected value=''>Cotação industrial</option>
                </select>
                <input className='border-neutral-400 w-full h-10 shadow-sm px-2 rounded-md' type='text' placeHolder='Seu telefone'/>
            </div>

            <div className='flex flex-col md:items-start w-full gap-4 mt-4'>
                <textarea className='border-neutral-400 w-full h-32 shadow-sm p-2 rounded-md' type='text' placeHolder='Menssagem'></textarea>
                <p className='text-neutral-400'>Indique um campo obrigatório <span className='text-primary font-bold'>*</span></p>
            </div>

            <div className='flex flex-col md:items-start w-full gap-4 mt-4'>
                <button className='md:w-56 h-12 text-center bg-primary text-neutral-50 m-auto'>Enviar</button>
            </div>
        </form>
    
    </div>
  )
}

export default Contact
