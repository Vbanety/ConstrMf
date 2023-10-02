import React from 'react'
import ConstIcon from '../../assets/logo.png'
function Footer() {
  return (
    <>
        <div className='w-full md:flex flex-row md:p-10 items-center justify-center'>
            <div className='w-full p-4 md:p-0 md:w-2/4 m-auto'>
                <ul className='flex flex-col items-start gap-y-4'>
                    <li><span className='text-primary font-work text-lg uppercase'>Endereço:</span> Av: Marechal Rondon, 109 - Centro - Jacareí SP</li>
                    <li><span className='text-primary font-work text-lg uppercase'>Telefone:</span> (12) 9 9 9999 9999 </li>
                    <li><span className='text-primary font-work text-lg uppercase'>email:</span> comercialmfen@mfconst.com.br</li>
                </ul>

                <img src={ConstIcon} alt='BunnerFooter' className='w-24 md:mt-5' />

            </div>
            <div className='w-full p-4 md:p-0 md:w-2/4 m-auto'>
                <h1 className='uppercase text-primary text-left my-2'>NewsLetter:</h1>
                <form className='flex flex-col md:flex-row gap-4 items-start'>
                    <input type='text' className='border-neutral-400 border-[1px] rounded-md text-neutral-400 p-2 w-full md:w-64' placeHolder='Seu email aqui' />
                    <button type='submit' className='bg-secundary p-2 w-full md:w-32 text-white font-bold font-work'>Inscrever</button>
                </form>

                <div className=''>
                <h1 className='uppercase text-primary text-left my-2'>Social:</h1>
                    <ul className='flex flex-row gap-4'>
                        <i className="fa-brands fa-instagram fa-beat-fade text-2xl text-neutral900"></i>
                        <i className="fa-brands fa-linkedin fa-beat-fade text-2xl text-neutral900"></i>
                        <i class="fa-brands fa-square-facebook fa-beat-fade text-2xl text-neutral900"></i>
                    </ul>
                </div>
            </div>
        </div>
        <div className='w-full h-16 text-clip flex items-center justify-center bg-primary text-white'>MF ENG CONST @ 2023. Todos os direitos reservados pela MF ENG CONST</div>
    </>
  )
}

export default Footer
