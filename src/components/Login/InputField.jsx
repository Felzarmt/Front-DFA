import React from 'react';
import './LoginC.css'

function InputField({ placeholder, type = "text" }) {
  return (
    <input className="input-field" type={type} placeholder={placeholder} />
  );
}

export default InputField;
