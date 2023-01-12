import axios from "axios"
import { getEventListeners } from "events"
import { JSXElementConstructor, Key, ReactElement, ReactFragment, useState } from "react"
import { useQuery } from "react-query"
import { event } from "../Interfaces/Event"


export const AxiosGetTest = () => {
   const {isLoading, error, data} =  useQuery("events", () => getAll())

    async function getAll() {
        return await axios.get('http://localhost:3000/api/events')   
    }

    function checkQueryRes(){
        console.log("Here is data from useQuery + Axios:", data);
    }



    
    if(error === null && isLoading === false && data !== undefined){

        return (
            <>
            <button onClick={getAll} >Axios Get</button>
            <br></br>
            <button onClick={checkQueryRes} >Check query res</button>
            <p>Axios get events:</p>
            <div>
            {data.data.map((event: { id: string | Key  })  =><p key={event.id}>{event.id}</p>)}
            </div> 
            </>
        ) 
    } else {
        return null
    }
    
}
