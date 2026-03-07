import { useEffect,useState } from "react"
import { Container,Typography,Card,CardContent } from "@mui/material"
import API from "../services/api"

function Tickets(){

const [tickets,setTickets]=useState([])

useEffect(()=>{

const token = localStorage.getItem("token")

API.get("/tickets",{
headers:{
Authorization:`Bearer ${token}`
}
})
.then(res=>setTickets(res.data))

},[])

return(

<Container className="container">

<Typography variant="h4">
My Tickets
</Typography>

{tickets.map(ticket=>(
<Card key={ticket._id} sx={{marginTop:2}}>
<CardContent>

<Typography>
Temple : {ticket.temple}
</Typography>

<Typography>
Slot Time : {ticket.slotTime}
</Typography>

<Typography>
Booking Id : {ticket._id}
</Typography>

</CardContent>
</Card>
))}

</Container>

)

}

export default Tickets