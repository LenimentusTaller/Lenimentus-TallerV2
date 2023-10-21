import { useState } from "react";

function FormLocalStorage({ onDatosIngresados }) {
  const [formData, setFormData] = useState({
    nombre: "",
    puesto: "",
    unidad: "",
  });

  const [errors, setErrors] = useState({
    nombre: "",
    puesto: "",
    unidad: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, puesto, unidad } = formData;

    if (!nombre || !puesto || !unidad) {
      setErrors({
        nombre: nombre ? "" : "El nombre es requerido",
        puesto: puesto ? "" : "El puesto es requerido",
        unidad: unidad ? "" : "La unidad es requerida",
      });
      return;
    }

    const dataUsuarioForm = {
      nombre,
      puesto,
      unidad,
    };

    localStorage.setItem("formData", JSON.stringify(dataUsuarioForm));

    onDatosIngresados();
  };
  return (
    <div className="block max-w-sm p-10 text-[#385623] font-montserrat bg-white border border-gray-200 rounded-lg shadow">
      <h2 className="text-2xl text-center font-montserrat mb-4">
        Ayudanos con esta información
      </h2>
      <form onSubmit={handleSubmit} className="m-4">
        <div className="mb-4">
          <label htmlFor="nombre" className="block mb-2 text-sm">
            Nombre:
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
          />
          <span className="text-red-600 text-xs">{errors.nombre}</span>
        </div>
        <div className="mb-4">
          <label htmlFor="puesto" className="block mb-2 text-sm">
            Puesto:
          </label>
          <input
            type="text"
            id="puesto"
            name="puesto"
            value={formData.puesto}
            onChange={handleChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          />
          <span className="text-red-600 text-xs">{errors.puesto}</span>
        </div>
        <div className="mb-4">
          <label htmlFor="unidad" className="block mb-2 text-sm">
            Unidad:
          </label>
          <input
            type="text"
            id="unidad"
            name="unidad"
            value={formData.unidad}
            onChange={handleChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          />
          <span className="text-red-600 text-xs">{errors.unidad}</span>
        </div>
        <button type="submit" className="bg-[#385623] text-white p-2 rounded">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default FormLocalStorage;
