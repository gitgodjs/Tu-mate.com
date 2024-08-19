import { Link } from "react-router-dom"

export default function ImagenesPresentacion() {
    const scrollToSection = (id:string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };
    return(
        <div className="relative h-screen">
            <div className="h-[575px] bg-cover bg-center bg-no-repeat relative" 
                style={{ backgroundImage: 'url(https://imgs.search.brave.com/q-gwBSIR88YpmfsBD-PqTocgDnNnZKCrYWCNKE-SSpE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzI5LzJm/LzY5LzI5MmY2OTdl/YzJlZmE0OWNmNmU0/NmE2M2NlN2Q2YjBh/LmpwZw)' }}>
                <div className="absolute inset-0 bg-black bg-opacity-60 filter blur-sm"></div>
            </div>

            <div className="absolute top-1/4 flex flex-col text-white p-4 font-recursive">
                <h2 className="text-3xl md:text-4xl">Bienvenido</h2>
                <h3 className="text-3xl md:text-4xl tracking-wide text-yellow-500">Tu mate online</h3>
                <p className="text-lg w-1/2 md:w-3/5">Los mejores mates, con los mejores precios, ofertas y prestaciones. Busca tu mate ideal y te lo llevamos!</p>

                <Link className="no-underline text-lg text-white mt-4 py-2 bg-blue-700 w-2/5 text-center rounded-full transition duration-500 hover:bg-blue-800 hover:rounded-lg" to="/Productos">Armate el tuyo</Link>
            </div>

            <div className="absolute bottom-32 w-full flex justify-center sm:bottom-18">
                <i onClick={() => scrollToSection('quienesSomos')} className="text-2xl text-white fa-solid fa-chevron-down animate-bounce cursor-pointer"></i>
            </div>
        </div>
    )
}