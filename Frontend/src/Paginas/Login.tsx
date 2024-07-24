import React, { useState } from "react";

export default function Login() {
  const [showLogin, setShowLogin] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const uri = 'http://localhost:4000/api/nuevoUsuario';

  const handleSignInClick = () => {
    setShowLogin(true);
  };

  const handleSignUpClick = () => {
    setShowLogin(false);
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = {
            name,
            email,
            password,
        };
        try {
            const data = await fetch(uri, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (!data.ok) {
                throw new Error('Error con los datos');
            }
            const respuestaServidor = await data.json();
            console.log(respuestaServidor);
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div>
      {!showLogin && (
        <div className="container-form register">
          <div className="information">
            <div className="info-childs">
              <h2>¡Bienvenido!</h2>
              <p>Para unirte a nuestra comunidad por favor Inicia Sesión con tus datos</p>
              <input type="button" value="Iniciar Sesión" id="sign-in" onClick={handleSignInClick} />
            </div>
          </div>
          <div className="form-information">
            <div className="form-information-childs">
              <h2>Crear una Cuenta</h2>
              <form className="form form-register" onSubmit={handleSubmit}>
                <div>
                  <label>
                    <i className='bx bx-user'></i>
                    <input type="text" placeholder="Nombre Usuario" name="userName" onChange={(e)=>setName(e.target.value)}/>
                  </label>
                </div>
                <div>
                  <label>
                    <i className='bx bx-envelope'></i>
                    <input type="email" placeholder="Correo Electronico" name="userEmail" onChange={(e)=>setEmail(e.target.value)} />
                  </label>
                </div>
                <div>
                  <label>
                    <i className='bx bx-lock-alt'></i>
                    <input type="password" placeholder="Contraseña" name="userPassword" onChange={(e)=>setPassword(e.target.value)}/>
                  </label>
                </div>
                <input type="submit" value="Registrarse" />
                <div className="alerta-error">Todos los campos son obligatorios</div>
                <div className="alerta-exito">Te registraste correctamente</div>
              </form>
            </div>
          </div>
        </div>
      )}

      {showLogin && (
        <div className="container-form login">
          <div className="information">
            <div className="info-childs">
              <h2>¡Bienvenido!</h2>
              <p>Para unirte a nuestra comunidad por favor Inicia Sesión con tus datos</p>
              <input type="button" value="Registrarse" id="sign-up" onClick={handleSignUpClick} />
            </div>
          </div>
          <div className="form-information">
            <div className="form-information-childs">
              <h2>Iniciar Sesión</h2>
              <form className="form form-login">
                <div>
                  <label>
                    <i className='bx bx-envelope'></i>
                    <input type="email" placeholder="Correo Electronico" name="userPassword" />
                  </label>
                </div>
                <div>
                  <label>
                    <i className='bx bx-lock-alt'></i>
                    <input type="password" placeholder="Contraseña" name="userPassword" />
                  </label>
                </div>

                <input type="submit" value="Iniciar Sesión" />
                <div className="alerta-error">Todos los campos son obligatorios</div>
                <div className="alerta-exito">Te registraste correctamente</div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
