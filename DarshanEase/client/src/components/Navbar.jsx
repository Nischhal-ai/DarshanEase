import { AppBar,Toolbar,Typography,Button } from "@mui/material"
import { Link } from "react-router-dom"

function Navbar(){

return(

<AppBar position="static">

<Toolbar>

<Typography
variant="h6"
sx={{flexGrow:1}}
>
DarshanEase
</Typography>

<Button color="inherit" component={Link} to="/">
Home
</Button>

<Button color="inherit" component={Link} to="/temples">
Temples
</Button>

<Button color="inherit" component={Link} to="/login">
Login
</Button>

<Button color="inherit" component={Link} to="/register">
Register
</Button>

<Button color="inherit" component={Link} to="/tickets">
My Tickets
</Button>

</Toolbar>

</AppBar>

)

}

export default Navbar