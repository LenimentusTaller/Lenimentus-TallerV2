import ButtonForms from "../components/ButtonForms";
import ImgDiagnostico from "../images/portapapeles.png";
import ImgFinal from "../images/reporte-de-desempeno.png";
import ImgSatisfa from "../images/evaluacion-de-desempeno.png";

function MenuLinkForms() {
  return (
    <>
      <ButtonForms
        nombreForm={"Evaluación Diagnóstica"}
        imagenForm={ImgDiagnostico}
      />
      <ButtonForms nombreForm={"Evaluación Final"} imagenForm={ImgFinal} />
      <ButtonForms
        nombreForm={"Evaluación de Satisfacción"}
        imagenForm={ImgSatisfa}
      />
    </>
  );
}

export default MenuLinkForms;
