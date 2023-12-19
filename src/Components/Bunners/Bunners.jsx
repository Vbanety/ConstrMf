import React, { useState } from "react";
import BunnerImg from "../../assets/img/build_down_view.png";
import BunnerImg2 from "../../assets/img/silver_building.png";

function Bunners() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [BunnerImg, BunnerImg2 /* Add more images here */];

  const nextImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === images.length - 1 ? 0 : prevImage + 1
    );
  };

  const prevImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? images.length - 1 : prevImage - 1
    );
  };

  return (
    <>
      <div className="w-full relative">
        <img
          src={images[currentImage]}
          alt={"Bunners"}
          className="w-full min-h-[35vh] md:min-h-[50vh]"
        />
        {/* Other content */}
        {/* Navigation buttons */}
        <div className="absolute left-32 top-32  max-w-[30rem] h-40 md:flex hidden flex-col ">
          <p className="text-left font-semibold text-xl md:text-5xl font-sans-condensed md:leading-normal text-primary">
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
            <div
              className="flex items-center justify-center gap-2 cursor-pointer"
              onClick={prevImage}
            >
              <i className="fa-solid fa-arrow-left text-white cursor-pointer"></i>
              <span className="text-white">Voltar</span>
            </div>
            <div
              className="flex items-center justify-center gap-2 cursor-pointer"
              onClick={nextImage}
            >
              <span className="text-white">Avançar</span>{" "}
              <i className="fa-solid fa-arrow-right text-white"></i>
            </div>
          </div>
        </div>
        {/* Mobile view */}
        <div className="bg-primary w-full h-40 flex md:hidden flex-col">
          {/* Other content */}
          <p className="text-center font-semibold text-xl md:text-5xl font-sans-condensed md:leading-normal text-white">
            Tornar possível com agilidade, qualidade e segurança o sonho de
            nossos clientes
          </p>
          <div className="flex justify-around items-center w-full px-5 mt-auto mb-0 bg-neutral-800 h-12">
            <div
              className="flex items-center justify-center gap-2 cursor-pointer"
              onClick={prevImage}
            >
              <i className="fa-solid fa-arrow-left text-white cursor-pointer"></i>
              <span className="text-white">Voltar</span>
            </div>
            <div
              className="flex items-center justify-center gap-2 cursor-pointer"
              onClick={nextImage}
            >
              <span className="text-white">Avançar</span>{" "}
              <i className="fa-solid fa-arrow-right text-white"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bunners;
