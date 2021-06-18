import RangeStepInput from "./RangeStepInput";
import React, { useState } from "react";
import InfoFinal from "./components/InfoFinal";
import Input from "@material-ui/core/Input";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = {
  //para poder darle estilo personal al input de material core
  input: {
    marginLeft: 20,

    color: "white",
  },
};

function App(props) {
  const [monto, setMonto] = useState(5000);
  const [cuotas, setCuotas] = useState(3);

  const { classes } = props;

  const calculo = (montoTotal, cuotas) => {
    let interes = (montoTotal * 97.98) / 100;
    let suma = parseFloat(montoTotal) + parseFloat(interes); //los paso a float porque sino me los concatena por alguna razon
    let res = suma / cuotas;
    console.log(
      "interes:" + interes + "-sumaTotal:" + suma + "-resultado" + res
    );
    return Number.parseFloat(res).toFixed(2);
  }; //redondeo a solo 2 numeros luego de la coma

  const handleInputChange = (event) => {
    setMonto(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleCuotasChange = (event) => {
    setCuotas(event.target.value === "" ? "" : Number(event.target.value));
  };

  return (
    <div class="container ">
      <p>Simulá tu crédito:</p>
      <div className="input-group mb-3 ml-2 row d-flex justify-content-center">
        <span className="titulo1">Monto Total</span>

        <RangeStepInput
          min={5000}
          max={50000}
          value={monto}
          step={1}
          onChange={(e) => {
            setMonto(e.target.value);
          }}
        />
        <div className="rango">$5000</div>
        <div className="rango2">$50000</div>
        <div className="input-group-append ml-4 mt-3 mb-4">
          <Input
            value={monto}
            margin="none"
            onChange={handleInputChange}
            className={classes.root}
            inputProps={{
              step: 1000,
              className: classes.input,
              min: 5000,
              max: 50000,

              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
        </div>
      </div>

      <div className="input-group mb-3 row d-flex justify-content-center">
        <span className="titulo2">Plazo</span>
        <RangeStepInput
          min={3}
          max={24}
          value={cuotas}
          step={1}
          onChange={(e) => {
            setCuotas(e.target.value);
          }}
        />

        <div className="rango3">3</div>
        <div className="rango4">24</div>
        <div className="input-group-append ml-1 mt-3 mb-4 mr-0">
          <Input
            value={cuotas}
            margin="none"
            onChange={handleCuotasChange}
            className={classes.root}
            inputProps={{
              step: 1,
              className: classes.input,
              min: 3,
              max: 24,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
        </div>
      </div>
      <InfoFinal
        credito={monto}
        cuotas={cuotas}
        calculo={calculo(monto, cuotas)}
      />
    </div>
  );
}
App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
