import { useLocation } from "react-router-dom"
<<<<<<< HEAD
import { useEffect, useState } from "react"
import UpdateLocationForm from "../../components/UpdateLocationForm/UpdateLocationForm"
import * as locationsAPI from "../../utilities/location-api"
=======
import NoteForm from "../../components/NoteForm/NoteForm"
>>>>>>> 35b3a40 (get subdoc to post)

export default function LocationDetailPage() {

    const location = useLocation()
    const { data } = location.state

<<<<<<< HEAD
    const [showForm, setShowForm] = useState(false)



    const [locationData, setLocationData] = useState({})


    useEffect(function() {
        async function show() {
             const locationApiData = await locationsAPI.showLocation(data.location._id)
             console.log(locationApiData)
             setLocationData(locationApiData)
        }
       show()
    }, [setLocationData, data.location._id])
    





    console.log(" coming from detail page" + data.location.location)

=======
    console.log(data.location.note)
>>>>>>> 35b3a40 (get subdoc to post)
    return (
        <>

        <button onClick={() => setShowForm(!showForm)}>Update Location</button> 

        {showForm ? (<UpdateLocationForm data={data}/>) : " "}

        <p>{data.location.location}</p>
        <p>{data.location.dateFrom}</p>
        <p>{data.location.dateTo}</p>
<<<<<<< HEAD
        <p>{data.location.user}</p>
=======
        <p>User Id: {data.location.user}</p>
        <p>Location Id: {data.location._id}</p>
        <p>Notes: {data.location.note}</p>
        <NoteForm />
>>>>>>> 35b3a40 (get subdoc to post)
        </>
    )
}