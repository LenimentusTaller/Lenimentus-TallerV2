import { useEffect, useState } from "react";
import Header from "./components/Header";
import FormLocalStorage from "./components/FormLocalStorage";
import MenuLinkForms from "./components/MenuLinkForms";

function App() {
  const [datosIngresados, setDatosIngresados] = useState(false);
  const [infoUser, setInfoUser] = useState({
    nombre: "",
    puesto: "",
    unidad: "",
  });

  const handleDatosIngresados = (newData) => {
    setDatosIngresados(true);
    setInfoUser(newData);
  };

  const handleBorrarDatos = () => {
    localStorage.removeItem("formData");
    setDatosIngresados(false);
  };

  useEffect(() => {
    const storeData = JSON.parse(localStorage.getItem("formData"));
    if (storeData) {
      setDatosIngresados(true);
      setInfoUser(storeData);
    }
  }, []);
  return (
    <>
      <Header />
      <div className="container mx-auto my-8 flex justify-center flex-wrap">
        {datosIngresados ? (
          <div className="text-2xl p-4 text-[#385623] font-montserrat">
            Hola, {infoUser.nombre}
          </div>
        ) : (
          ""
        )}
      </div>
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
            className="bg-[#385623] text-white p-2 rounded font-montserrat hover:bg-[#284117]"
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
