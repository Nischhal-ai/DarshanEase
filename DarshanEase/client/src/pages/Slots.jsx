import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Container, Typography, Card, CardContent, Button } from "@mui/material"
import API from "../services/api"

function Slots(){

const { templeId } = useParams()

const [slots,setSlots] = useState([])

useEffect(()=>{

API.get(`/slots/${templeId}`)
.then(res => setSlots(res.data))

},[])

return(

<Container className="container">

<Typography variant="h4">
Available Darshan Slots
</Typography>

{slots.map(slot=>(
<Card key={slot._id} sx={{marginTop:2}}>
<CardContent>

<Typography>
Time : {slot.time}
</Typography>

<Typography>
Seats Available : {slot.seats}
</Typography>

<Button
variant="contained"
href={`/booking/${slot._id}`}
>
Book Slot
</Button>

</CardContent>
</Card>
))}

</Container>

)

}

export default Slots