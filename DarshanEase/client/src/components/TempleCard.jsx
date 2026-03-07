import { Card,CardContent,Typography,Button } from "@mui/material"
import { Link } from "react-router-dom"

function TempleCard({temple}){

return(

<Card sx={{marginBottom:2}}>

<CardContent>

<Typography variant="h5">
{temple.name}
</Typography>

<Typography>
{temple.location}
</Typography>

<br/>

<Button
variant="contained"
component={Link}
to={`/slots/${temple._id}`}
>
View Slots
</Button>

</CardContent>

</Card>

)

}

export default TempleCard