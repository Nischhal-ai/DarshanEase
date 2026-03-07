import { useState } from "react"
import API from "../services/api"

function Register(){

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const handleSubmit = async(e)=>{
e.preventDefault()

try{
await API.post("/auth/register",{name,email,password})
alert("User Registered")
}catch(err){
alert("Error")
}
}

return(

<div>

<h2>Register</h2>

<form onSubmit={handleSubmit}>

<input
placeholder="Name"
onChange={(e)=>setName(e.target.value)}
/>

<br/><br/>

<input
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<br/><br/>

<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<br/><br/>

<button>Register</button>

</form>

</div>

)

}

export default Register