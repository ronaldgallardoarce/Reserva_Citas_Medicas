import { useSelector } from "react-redux";
import Calendario from "./calendar";
import "./style.css"

const SeleccionarReserva = () => {
    const medico = useSelector((state) => state.Medicos.medico)
    return (<>
        <div className="grid grid-cols-3 mt-6 mx-10">
            <div>
                <div className="flex flex-col items-center pb-10">
                    <img className="rounded-full w-40 h-40 mb-3 rounded-full shadow-lg" src={medico.foto} alt="image description" />                    
                </div>
                <div className="grid justify-items-start">
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{medico.nombre} {medico.apellido}</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{medico.especialidad}</span>
                </div>
            </div>
            <div>
                <h1 className="mb-1 text-xl font-medium text-gray-900 dark:text-white" >Seleciona una fecha y hora</h1>
                <Calendario className="calendar"></Calendario>
            </div>
            <div className="a">
                
            </div>
        </div>
    </>);
}

export default SeleccionarReserva;