import React, { useEffect, useRef, useState } from 'react'
import Logo from '../../assets/logo.png'

function NavBar() {
  const [openNav, setOpenNav] = useState(false)
  const sideBarRef = useRef(null); 
  const width = window.innerWidth
  
  useEffect(() => {
    if(width <= 900) {
      setOpenNav(false)
    }
    // Add a click event listener to the document
    document.addEventListener('click', handleDocumentClick);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };

  }, [])

  const handleNavigate = async (event) => {
    // #about_us
    window.location.href = event
    setOpenNav(false)
  }

  const handleDocumentClick = (event) => {
    // Check if the click target is outside of the sideBarRef element
    if (sideBarRef.current && !sideBarRef.current.contains(event.target)) {
      setOpenNav(false); // Close the navigation bar
      console.log(event.target.id)
    } 
  };

  const toggleNavBar = () => {
    setOpenNav(!false)
  }

  const handleCloseToggle = () => {
    console.log('click close')
    if(openNav == true) {
      setOpenNav(false)
    }
  }

  return (
    <div className='bg-white w-full flex flex-row justify-between items-center'>
      
      <div className='text-blue-700 '>
        <img src={Logo} alt='' className='w-32' />
      </div>
      
      <ul className='md:flex flex-row gap-x-10 hidden mr-0 md:mr-20'>
        <li className='flex text-center items-center justify-center min-w-[90px] font-semibold font-sans-condensed text-neutral900 hover:scale-110 hover:border-b-[2px] overflow-x-hidden h-8'><a href='#home'>Home</a></li>
        <li className='flex text-center items-center justify-center min-w-[90px] font-semibold font-sans-condensed text-neutral900 hover:scale-110 hover:border-b-[2px] overflow-x-hidden h-8'><a href='#about_us'>Sobre</a></li>
        <li className='flex text-center items-center justify-center min-w-[90px] font-semibold font-sans-condensed text-neutral900 hover:scale-110 hover:border-b-[2px] overflow-x-hidden h-8'><a href='#projetos'>Projetos</a></li>
        <li className='flex text-center items-center justify-center min-w-[90px] font-semibold font-sans-condensed text-neutral900 hover:scale-110 hover:border-b-[2px] overflow-x-hidden h-8'><a href='#servicos'>Serviços</a></li>
        <li className='flex text-center items-center justify-center min-w-[90px] font-semibold font-sans-condensed text-secundary hover:bg-secundary hover:text-white h-8'><a href='#contato'>Contato</a></li>
      </ul>
      <div id='btnRefBurger' className='md:hidden flex pr-6 cursor-pointer' onClick={() => toggleNavBar()}>
        <i className="fa-solid fa-3x fa-bars text-primary"></i>
      </div>  

      {/* SHOW ON MOBILE */}
      {
        openNav && (
          <div 
            id='sideBarRef' 
            // ref={sideBarRef}
            className='md:hidden absolute right-0 top-0 h-screen z-30'
          >
            
            <ul className={`flex-col flex h-full sm:w-[250px] w-screen lg:w-auto bg-primary ${openNav ? 'transition-transform' : ''}`}>
              <div className='w-full' id='btnSideBarRef' onClick={() => handleCloseToggle()}>
                <i className="fa-solid fa-3x fa-close text-secundary float-right cursor-pointer mt-8 mr-8 hover:opacity-70 hover:scale-110"></i>
              </div>
              <li className='w-full m-0 text-white hover:bg-slate-300 hover:text-secundary min-h-[60px] flex min-w-[90px] font-semibold font-sans-condensed cursor-pointer'><a className='m-auto w-full' onClick={() => handleNavigate()}>Home</a></li>
              <li className='w-full m-0 text-white hover:bg-slate-300 hover:text-secundary min-h-[60px] flex min-w-[90px] font-semibold font-sans-condensed cursor-pointer'><a className='m-auto w-full' onClick={() => handleNavigate('#about_us')}>Sobre</a></li>
              <li className='w-full m-0 text-white hover:bg-slate-300 hover:text-secundary min-h-[60px] flex min-w-[90px] font-semibold font-sans-condensed cursor-pointer'><a className='m-auto w-full' onClick={() => handleNavigate()}>Projetos</a></li>
              <li className='w-full m-0 text-white hover:bg-slate-300 hover:text-secundary min-h-[60px] flex min-w-[90px] font-semibold font-sans-condensed cursor-pointer'><a className='m-auto w-full' onClick={() => handleNavigate()}>Serviços</a></li>
              <li className='w-full m-0 hover:bg-slate-300 hover:text-white min-h-[60px] flex min-w-[90px] font-semibold font-sans-condensed text-secundary cursor-pointer'><a className='m-auto w-full' onClick={() => handleNavigate()}>Contato</a></li>
            </ul>
          </div>

        )
      }
      
    </div>
  )
}

export default NavBar
