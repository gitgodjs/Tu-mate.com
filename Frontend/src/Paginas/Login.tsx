import React, { useState } from "react";
import { Navigate, useNavigate} from "react-router-dom";
import { useAuth } from "../Auth/AuthProvider";
import { AuthResponse, AuthResponseError } from "../Types/types";

export default function Login() {
  const [showLogin, setShowLogin] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const uri = 'http://localhost:4000/api';
  const goTo = useNavigate();
  const auth = useAuth();
  if (auth.isAuthenticated) {
    return <Navigate to="/ProductoUnico" />
  }

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
            const data = await fetch(`${uri}/nuevoUsuario`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (!data.ok) {
                throw new Error('Error con los datos');
            }
            setShowLogin(true);
        } catch (error) {
            console.log(error);
        }
    }

    async function singUp(e: React.FormEvent) {
      e.preventDefault();
      const formData = {
        email,
        password,
    };
      try {
        const response = await fetch(`${uri}/signUp`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          const json = (await response.json()) as AuthResponse;
          console.log(json);
  
          if (json.body.accessToken && json.body.refreshToken) {
            console.log("Bien!", json.body.accessToken);
            auth.saveUser(json);
          }
        } else {
          const json = (await response.json()) as AuthResponseError;
          console.log(json)
        }

      } catch (error) {
        console.log(error);
      }
    }

    if (auth.isAuthenticated) {
      return goTo('/ProductoUnico');
    }
    

  return (
    <div>
      {!showLogin && (
        <div className="container-form register">
          <div className="information">
            <div className="info-childs">
              <h2>¡Bienvenido/a!</h2>
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
              <form className="form form-login" onSubmit={singUp}>
                <div>
                  <label>
                    <i className='bx bx-envelope'></i>
                    <input type="email" placeholder="Correo Electronico" name="userPassword" onChange={(e)=>setEmail(e.target.value)}/>
                  </label>
  ,              </div>
                <div>
                  <label>
                    <i className='bx bx-lock-alt'></i>
                    <input type="password" placeholder="Contraseña" name="userPassword" onChange={(e)=>setPassword(e.target.value)}/>
                  </label>
  ,              </div>

                <input type="submit" value="Iniciar Sesión" />
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
