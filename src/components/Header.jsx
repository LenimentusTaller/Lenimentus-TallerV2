import React from "react";
import Logo from "../images/logo-lenimentus-sinfondo.png";

function Header() {
  return (
    <>
      <header className="p-2 mb-5">
        <div className="container mx-auto">
          <img width={150} src={Logo} alt="" />
        </div>
      </header>
      <div className="p-4 text-center">
        <h1 className="text-4xl text-[#385623] font-montserrat font-bold">
          EVALUACIONES DEL TALLER
        </h1>
      </div>
      <div className="bg-[#385623] p-6 mt-8 text-center">
        <h3 className="text-xl text-white font-montserrat font-bold p-8 ">
          En los siguientes enlaces se presentan 3 tipos de evaluaciones con el
          propósito de medir el nivel de compresión al finalizar el taller.
        </h3>
      </div>
    </>
  );
}

export default Header;
