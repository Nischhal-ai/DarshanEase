import { useEffect,useState } from "react"
import { Container,Typography } from "@mui/material"
import TempleCard from "../components/TempleCard"
import API from "../services/api"

function Temples(){

const [temples,setTemples] = useState([])

useEffect(()=>{

API.get("/temples")
.then(res=>setTemples(res.data))

},[])

return(

<Container className="container">

<Typography className="page-title">
Temples
</Typography>

{temples.map(t=>(
<TempleCard key={t._id} temple={t}/>
))}

</Container>

)

}

export default Temples