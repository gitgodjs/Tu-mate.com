import React, { useState, useEffect } from "react";
import { Navigate, useNavigate} from "react-router-dom";
import { useAuth } from "../Auth/AuthProvider";
import { AuthResponse } from "../Types/types";
import { API_URL } from "../Auth/constants";

export default function Login() {
  const [showLogin, setShowLogin] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loginCorrecto, setLoginCorrecto] = useState(false);
  const [userAviso, setUserAviso] = useState(0);

  const [userError, setUserError] = useState('');

  const goTo = useNavigate();
  const auth = useAuth();
  if (auth.isAuthenticated) {
    return <Navigate to="/ProductoUnico" />
  }

  const handleSignInClick = () => {
    setShowLogin(true);
    setUserError('');
  };

  const handleSignUpClick = () => {
    setShowLogin(false);
    setUserError('');
  };

  useEffect(() => {
    if (loginCorrecto) {
      let intervalId = 0;

      const incremento = () => {
        intervalId = setInterval(() => {
          setUserAviso(prevOpacity => {
            if (prevOpacity >= 100) {
              clearInterval(intervalId);
              return 100;
            }
            return prevOpacity + 25;
          });
        }, 100);
      };
  
      const decrecimiento = () => {
        intervalId = setInterval(() => {
          setUserAviso(prevOpacity => {
            if (prevOpacity <= 0) {
              clearInterval(intervalId);
              return 0;
            }
            return prevOpacity - 25;
          });
        }, 100);
      };

      incremento();
      setTimeout(decrecimiento,2000)
    }
  }, [loginCorrecto]);
  
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = {
            name,
            email,
            password,
        };
        try {
            const data = await fetch(`${API_URL}/nuevoUsuario`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!data.ok) {
              const json = await data.json();
              setUserError(json.body.error)
            } else {
              setLoginCorrecto(true)
              setShowLogin(true);
            }
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
        const response = await fetch(`${API_URL}/signUp`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          const json = (await response.json()) as AuthResponse;
  
          if (json.body.accessToken && json.body.refreshToken) {
            auth.saveUser(json);
          }
        } else {
          setUserError("Usuario o contraseña invalidos.")
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
      <div className={`opacity-${userAviso} absolute items-center gap-2 right-2 top-48 bg-green-500 rounded-md p-2 sm:right-24 top-36`}>
        <p className="text-lg">Usuario creado!</p>
        <span className="text-base">Gracias!</span>
      </div>
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
                <div className="text-left m-1 p-1">
                    <span className="text-lg text-red-500">{userError}</span>
                </div>
                <div>
                  <label>
                    <input type="text" placeholder="Nombre Usuario" name="userName" onChange={(e)=>setName(e.target.value)}/>
                  </label>
                </div>
                <div>
                  <label>
                    <input type="email" placeholder="Correo Electronico" name="userEmail" onChange={(e)=>setEmail(e.target.value)} />
                  </label>
                </div>
                <div>
                  <label>
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
                <div className="text-left m-1 p-1">
                    <span className="text-lg text-red-500">{userError}</span>
                </div>
                <div>
                  <label>
                    <input type="email" placeholder="Correo Electronico" name="userPassword" onChange={(e)=>setEmail(e.target.value)}/>
                  </label>      
                </div>
                <div>
                  <label>
                    <input type="password" placeholder="Contraseña" name="userPassword" onChange={(e)=>setPassword(e.target.value)}/>
                  </label>
                </div>

                <input type="submit" value="Iniciar Sesión" />
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
