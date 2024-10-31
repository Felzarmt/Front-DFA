import React from 'react';
import InputField from './InputField';
import Button from './Button';
import './LoginC.css'


function LoginForm() {
  return (
    <div className='login-container'>
      <div className="login-form">
        <h2>Bienvenido</h2>
        <label>Usuario</label>
        <InputField placeholder="Ingrese usuario" />
        <label>Contraseña</label>
        <InputField placeholder="Ingrese contraseña" type="password" />
        <Button text="Ingresar" />
      </div>
    </div>
  );
}

export default LoginForm;
