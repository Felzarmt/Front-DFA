import React from "react";
import FormArea from "../../components/MainPage/DerLacFer/PP/FormArea";
import FormButons from "../../components/MainPage/DerLacFer/PP/FormButtons";
import "../../components/MainPage/DerLacFer/PP/PP.css"

function PPP() {
  return (
    <div className="form-container">
      <h2 className="form-title">Registro</h2>
      <FormArea />
      <FormButons />
    </div>
  );
}

export default PPP;
