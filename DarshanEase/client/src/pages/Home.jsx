import { Container,Typography,Button } from "@mui/material"
import { Link } from "react-router-dom"

function Home(){

return(

<Container className="container">

<Typography variant="h3" gutterBottom>
Welcome to DarshanEase
</Typography>

<Typography>
Book temple darshan slots easily and avoid long queues.
</Typography>

<br/>

<Button
variant="contained"
component={Link}
to="/temples"
>
Explore Temples
</Button>

</Container>

)

}

export default Home