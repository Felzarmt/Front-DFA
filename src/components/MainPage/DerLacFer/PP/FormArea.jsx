import React from "react";

function FormArea() {
  return (
    <div className="form-fields">
      <input type="text" placeholder="Seleccione nombre producto" className="input-field" />
      <input type="text" placeholder="Ingrese fecha de análisis" className="input-field" />
      <input type="text" placeholder="Ingrese fecha de toma de muestra" className="input-field" />
      <input type="text" placeholder="Ingrese hora de toma de muestra" className="input-field" />
      <input type="text" placeholder="Lote" className="input-field" />
      <input type="text" placeholder="Observaciones" className="input-field" />
      <label className="checkbox-container">
        <input type="checkbox" className="checkbox" />
      </label>
    </div>
  );
}

export default FormArea;
