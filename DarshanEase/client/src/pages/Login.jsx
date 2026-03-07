import { Container,TextField,Button,Typography } from "@mui/material"
import { useState } from "react"
import API from "../services/api"

function Login(){

const [email,setEmail]=useState("")
const [password,setPassword]=useState("")

const login=async(e)=>{
e.preventDefault()

const res=await API.post("/auth/login",{email,password})

localStorage.setItem("token",res.data.token)

alert("Login successful")
}

return(

<Container className="container">

<Typography variant="h4">
Login
</Typography>

<form onSubmit={login}>

<TextField
label="Email"
fullWidth
margin="normal"
onChange={(e)=>setEmail(e.target.value)}
/>

<TextField
label="Password"
type="password"
fullWidth
margin="normal"
onChange={(e)=>setPassword(e.target.value)}
/>

<br/>

<Button
variant="contained"
type="submit"
>
Login
</Button>

</form>

</Container>

)

}

export default Login