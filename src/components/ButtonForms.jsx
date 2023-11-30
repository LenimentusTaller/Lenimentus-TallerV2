import React, { useEffect, useState } from "react";

function ButtonForms({ nombreForm, imagenForm }) {
  const [infoData, setInfoData] = useState(null);

  useEffect(() => {
    const storeData = JSON.parse(localStorage.getItem("formData"));
    if (storeData) {
      const data = {
        nombre: storeData.nombre,
        puesto: storeData.puesto,
        unidad: storeData.unidad,
      };
      setInfoData(data);
    }
  }, []);
  // https://docs.google.com/forms/d/e/1FAIpQLSdK4eemyWIxo-HWAKvmNE1kCnca7BqWsQwGAZPlxEKjoAsRIg/viewform?usp=pp_url&entry.1928284648=Diego&entry.419414549=Gerente&entry.601508622=Refresco

  // https://docs.google.com/forms/d/e/1FAIpQLSe8VIgyvwhmPMt6h9s6qkWLqdl-jD78Tz-c8YR7_KoLin2skQ/viewform?usp=pp_url&entry.752906477=diego&entry.196417095=gerente&entry.644614544=refresco

  // https://docs.google.com/forms/d/e/1FAIpQLScBrlIc_AzX7vyvqK_NQcU81XVFlujFlzAYizJmf6ZV74Zp6w/viewform?usp=pp_url&entry.975771166=Diego&entry.625530517=Gerente&entry.1738102319=Refrescos
  const links = {
    diagnostico: `https://docs.google.com/forms/d/e/1FAIpQLSdK4eemyWIxo-HWAKvmNE1kCnca7BqWsQwGAZPlxEKjoAsRIg/viewform?usp=pp_url&entry.1928284648=${
      infoData?.nombre || ""
    }&entry.419414549=${infoData?.puesto || ""}&entry.601508622=${
      infoData?.unidad || ""
    }`,
    final: `https://docs.google.com/forms/d/e/1FAIpQLSe8VIgyvwhmPMt6h9s6qkWLqdl-jD78Tz-c8YR7_KoLin2skQ/viewform?usp=pp_url&entry.752906477=${
      infoData?.nombre || ""
    }&entry.196417095=${infoData?.puesto || ""}&entry.644614544=${
      infoData?.unidad || ""
    }`,
    satisfaccion: `https://docs.google.com/forms/d/e/1FAIpQLScBrlIc_AzX7vyvqK_NQcU81XVFlujFlzAYizJmf6ZV74Zp6w/viewform?usp=pp_url&entry.975771166=${
      infoData?.nombre || ""
    }&entry.625530517=${infoData?.puesto || ""}&entry.1738102319=${
      infoData?.unidad || ""
    }`,
  };

  var linkForm = "";
  if (nombreForm == "Evaluación Diagnóstica") {
    linkForm = links.diagnostico;
  } else if (nombreForm == "Evaluación Final") {
    linkForm = links.final;
  } else {
    linkForm = links.satisfaccion;
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-4">
      <a
        href={linkForm}
        target="_blank"
        className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
      >
        <img
          width={250}
          className="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white"
          src={imagenForm}
        />
        <p className="text-center text-[#385623] font-montserrat">
          {nombreForm}
        </p>
      </a>
    </div>
  );
}

export default ButtonForms;
