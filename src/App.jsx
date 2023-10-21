import { useEffect, useState } from "react";
import Header from "./components/Header";
import FormLocalStorage from "./components/FormLocalStorage";
import MenuLinkForms from "./components/MenuLinkForms";

function App() {
  const [datosIngresados, setDatosIngresados] = useState(false);

  const handleDatosIngresados = () => {
    setDatosIngresados(true);
  };

  const handleBorrarDatos = () => {
    localStorage.removeItem("formData");
    setDatosIngresados(false);
  };

  useEffect(() => {
    const storeData = JSON.parse(localStorage.getItem("formData"));
    if (storeData) {
      setDatosIngresados(true);
    }
  }, []);
  return (
    <>
      <Header />
      <div className="container mx-auto my-8 flex justify-center flex-wrap">
        {datosIngresados ? (
          <MenuLinkForms />
        ) : (
          <FormLocalStorage onDatosIngresados={handleDatosIngresados} />
        )}
      </div>
      <div className="container mx-auto my-8 flex justify-center flex-wrap">
        {datosIngresados ? (
          <button
            onClick={handleBorrarDatos}
            className="bg-[#385623] text-white p-2 rounded font-montserrat"
          >
            Cerrar Sesión
          </button>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default App;
