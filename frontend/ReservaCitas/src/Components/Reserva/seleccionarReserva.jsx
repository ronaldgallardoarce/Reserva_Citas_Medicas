import { useDispatch, useSelector } from "react-redux"; import daygrid from "@fullcalendar/daygrid";
import interaction from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import timegrid from "@fullcalendar/timegrid";
import { useState } from "react";
import Calendario from "./calendar";
import "./style.css"
import { SelectHorario } from "../../redux-toolkit/actions/horarioActions";
import axios from "axios";
import { useEffect } from "react";

const SeleccionarReserva = () => {
    const paciente = useSelector((state) => state.Paciente.paciente)
    const medico = useSelector((state) => state.Medicos.medico)
    const horarios = useSelector((state) => state.Horarios.horarios)
    const [reserva, setReserva] = useState(
        {
            codigoR: 0,
            codigoP: 1,
            codigoM: medico.codigoM,
            codigoH: 0,
            fecha: ""
            // paciente: paciente,
            // medico: medico,
            // horario: {
            //   codigoH: 0,
            //   descripcion: ""
            // }
        }
    )
    const handleDateSelect = (e) => {
        console.log(e)
        const start = e.startStr;
        setReserva({
            ...reserva,
            fecha: start
        })
    }
    const dispatch = useDispatch();
    const selectHora = (hora) => {
        // await dispatch(SelectHorario(id))
        // const h=useSelector((state)=>state.Horarios.horario)
        setReserva({
            ...reserva,
            codigoH: hora.codigoH,
            // horario:hora
        });
    }
    const Pagar = async () => {
        console.log(reserva)

        try {
            const response = await axios.post("/Reservas/create-checkout-session");
            console.log(response.data)
            if (response.data) {
                window.location.href = response.data.url; // Redirige al usuario a la página de Stripe Checkout
            }
        } catch (error) {
            console.error(error);
        }
    }
    return (<>
        <div className="grid grid-cols-3 mt-8 mx-10">
            <div>
                {/* <div className="flex flex-col items-center pb-10">
                </div> */}
                <div className="grid justify-items-start">
                    <img className="rounded-full w-40 h-40 mb-3 rounded-full shadow-lg" src={medico.foto} alt="image description" />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{medico.nombre} {medico.apellido}</h5>
                    <span className="text-lg text-gray-500 dark:text-gray-400">{medico.especialidad}</span>
                    <div className="mt-5 grid justify-items-start">
                        <span className="text-base text-gray-500 dark:text-gray-400"><i className="fa-solid fa-house-chimney-medical"></i> Clinica: {medico.clinica}</span>
                        <span className="text-base text-gray-500 dark:text-gray-400"><i className="fa-solid fa-phone"></i> Telefono: {medico.telefono}</span>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="mb-6 text-xl font-medium text-gray-900 dark:text-white" >Seleciona una fecha y hora</h1>
                <div className="calendar">
                    <FullCalendar
                        headerToolbar={{
                            left: 'title',
                            right: 'prev,today,next'
                        }}
                        plugins={[daygrid, interaction, timegrid]}
                        fixedWeekCount={false}
                        locales='es'
                        initialView="dayGridMonth"
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        weekends={true}
                        select={handleDateSelect}
                    // dateClick={handleDateSelect}
                    />
                </div>
                <button onClick={Pagar} type="button" className="mt-20 w-full text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                >Pagar</button>
            </div>
            <div className="pl-10 grid justify-items-center">
                <h1 className="mb-6 text-xl font-medium text-gray-900 dark:text-white" >Horarios</h1>
                {
                    horarios.length > 0 ?
                        horarios.map((hora) => (
                            <div key={hora.codigoH} >
                                <button onClick={() => selectHora(hora)} type="button" className="horas w-full text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                                >{hora.descripcion}</button>
                            </div>
                        )) : (
                            <div>
                                <div role="status">
                                    <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                    </svg>
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                        )
                }
            </div>
        </div>
    </>);
}

export default SeleccionarReserva;