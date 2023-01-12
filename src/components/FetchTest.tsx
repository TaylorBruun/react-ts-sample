import { useEffect, useState } from "react"
import { event } from "../Interfaces/Event"

export const FetchTest = () => {

    const [events, setEvents] = useState<event[]>([])


    async function getAll() {
        await fetch('http://localhost:3000/api/events')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setEvents(data)
        })
    }

  

  

    return (
        <>
        <button onClick={getAll} >Fetch</button>
        <p>fetch events:</p>
        <div>
        {events.map(event => event.id ? <p key={event.id}>{event.id}</p> : null)}
        </div> 
        
        </>
    )
}