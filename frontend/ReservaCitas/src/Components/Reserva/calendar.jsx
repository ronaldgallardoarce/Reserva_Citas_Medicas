import daygrid from "@fullcalendar/daygrid";
import interaction from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import timegrid from "@fullcalendar/timegrid";
import { useState } from "react";

const Calendario = () => {
    const handleDateSelect=(e)=>{
        console.log(e)
        const start=e.startStr;
    }
    return ( <>
        <div className="calendar">
                <FullCalendar
                    headerToolbar={{
                        left:'title',
                        right:'prev,today,next'
                    }}
                    plugins={[daygrid,interaction,timegrid]}
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
    </> );
}
 
export default Calendario;