import React from "react";
import BunnerImg from "../../assets/bunner.png";

function Bunners() {
  return (
    <>
      <div className="w-full relative">
        <img src={BunnerImg} alt={"Bunners"} className="w-full min-h-[35vh] md:min-h-[50vh]" />
        <div className="absolute left-10 top-32 max-w-xs md:max-w-xl  flex flex-col text-5xl">
          <p className="text-left text-neutral-800 font-semibold text-xl md:text-5xl font-sans-condensed md:leading-normal">
            Tornar possível com agilidade, qualidade e segurança o sonho de
            nossos clientes
          </p>
        </div>
        <div className="absolute right-0 bottom-0 bg-primary w-80 h-40 md:flex hidden flex-col ">
          <p className="px-2 w-full text-center text-white my-2 text-xl">
            Recursos de projetos
          </p>
          <p className="px-2 w-full text-center text-white my-2 text-sm">
            Tudo o que há de mais atualizado no mercado de engenharia civíl
          </p>
          <div className="flex justify-around items-center w-full px-5 mt-auto mb-0 bg-neutral-800 h-12">
            <div className="flex items-center justify-center gap-2 cursor-pointer">
              <i className="fa-solid fa-arrow-left-long text-white cursor-pointer"></i>
              <span className="text-white">Voltar</span>
            </div>
            <div className="flex items-center justify-center gap-2 cursor-pointer">
              <span className="text-white">Avançar</span>{" "}
              <i className="fa-solid fa-arrow-right text-white"></i>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-primary w-full h-40 flex md:hidden flex-col ">
        <p className="px-2 w-full text-center text-white my-2 text-xl">
          Recursos de projetos
        </p>
        <p className="px-2 w-full text-center text-white my-2 text-sm">
          Tudo o que há de mais atualizado no mercado de engenharia civíl
        </p>
        <div className="flex justify-around items-center w-full px-5 mt-auto mb-0 bg-neutral-800 h-12">
          <div className="flex items-center justify-center gap-2 cursor-pointer">
            <i className="fa-solid fa-arrow-left text-white cursor-pointer"></i>
            <span className="text-white">Voltar</span>
          </div>
          <div className="flex items-center justify-center gap-2 cursor-pointer">
            <span className="text-white">Avançar</span>{" "}
            <i className="fa-solid fa-arrow-right text-white"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bunners;
