import React from "react";

function InfoFinal(props) {
  function logCredito(credito) {
    alert(`Obtendrá un crédito de ${credito}`);
  }

  function logCuotas(cuotas) {
    alert(`La cantidad de cuotas seleccionadas es de: ${cuotas}`);
  }

  return (
    <div>
      <div class="card-header ps-0 mb-3 font-weight-bold">
        <div>CUOTA FIJA POR MES: ${props.calculo}</div>
      </div>
      <button
        class="btn btn-success "
        onClick={(e) => logCredito(props.credito)}
      >
        OBTENÉ CRÉDITO
      </button>
      <button class="btn btn-info " onClick={(e) => logCuotas(props.cuotas)}>
        VER DETALLE DE COUTAS
      </button>
    </div>
  );
}

export default InfoFinal;
