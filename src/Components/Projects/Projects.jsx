import React from "react";

import dataProjects from "./dataProjects";

function Projects() {
  return (
    <div className="w-full" id="projetos">
      <div className="bg-kitchen hover:contrast-100 contrast-50  bg-center w-full h-72 flex flex-col md:flex-row items-center justify-around">
        <div className="flex flex-col gap-y-4">
          <p className="text-white font-bold text-center md:text-left">
            Consulta gratuita com qualidade excepcional
          </p>
          <p className="text-white text-center md:text-left">
            Vamos conversar (11) 9 8881-8100 <span></span>
          </p>
        </div>

        <button className="px-4 py-2 border-white hover:bg-primary hover:border-primary border-2 text-white hover:-translate-y-1 transition-all duration-75">
          Faça sua consulta
        </button>
      </div>

      <div className="flex flex-col md:flex-row md:p-8">
        <div className="w-full md:w-[30%] border-b-[1px] mb-8 md:m-0 md:border-r-[1px] md:p-8 md:block flex flex-col items-center justify-center">
          <h1 className="text-neutral-800 font-bold font-work text-2xl text-left md:mb-8">
            Projetos
          </h1>
          <ul className="list-item text-primary ">
            <li className="text-neutral-400 text-left font-work font-semibold hover:text-primary cursor-pointer">
              Todos
            </li>
            <li className="text-neutral-400 text-left font-work font-semibold hover:text-primary cursor-pointer">
              Comercial
            </li>
            <li className="text-neutral-400 text-left font-work font-semibold hover:text-primary cursor-pointer">
              Residencial
            </li>
            <li className="text-neutral-400 text-left font-work font-semibold hover:text-primary cursor-pointer">
              Outros
            </li>
          </ul>
        </div>

        <div className="w-[95%] md:w-[70%] flex flex-col items-center justify-center m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-auto">
            {dataProjects
              .map((item, key) => {
                return (
                  <div key={key} className="w-full md:w-80 opacity-80 hover:opacity-100 hover:scale-105">
                    <img src={item.img} alt="project" className="w-full h-40" />
                    <div className="bg-primary p-2 h-20">
                      <h1 className="text-white font-bold text-left">
                        {item.title}
                      </h1>
                      <p className="text-white text-left">{item.address}</p>
                    </div>
                  </div>
                );
              })
              .slice(0, 4)}
          </div>

          <div className="flex justify-around items-center w-full md:w-[70%] md:px-5 mb-10 md:mb-0 h-12 mt-8">
            <div className="flex items-center justify-center gap-2 cursor-pointer bg-neutral-800 w-full h-full hover:opacity-80">
              <i className="fa-solid fa-arrow-left text-white cursor-pointer"></i>
              <span className="text-white">Voltar</span>
            </div>
            <div className="bg-white w-24 flex gap-2 mx-2">
              <i className="w-6 h-4 bg-primary rounded-full border-primary"></i>
              <i className="w-6 h-4  rounded-full border-[1px] border-neutral-400"></i>
              <i className="w-6 h-4  rounded-full border-[1px] border-neutral-400"></i>
              <i className="w-6 h-4  rounded-full border-[1px] border-neutral-400"></i>
            </div>
            <div className="flex items-center justify-center gap-2 cursor-pointer bg-neutral-800 w-full h-full hover:opacity-80">
              <span className="text-white">Avançar</span>{" "}
              <i className="fa-solid fa-arrow-right text-white"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
