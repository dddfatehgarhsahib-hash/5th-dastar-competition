import { useState } from "react"

export default function Home(){

const [token,setToken]=useState("")

function submit(e){

e.preventDefault()

let t="DKP-"+Math.floor(1000+Math.random()*9000)

setToken(t)

}

return(

<div style={{textAlign:"center",padding:"40px"}}>

<h1>ਪੰਜਵਾਂ ਦਸਤਾਰ ਤੇ ਦੁਮਾਲਾ ਮੁਕਾਬਲਾ</h1>

<h3>ਸਰਦਾਰੀਆਂ ਯੂਥ ਕਲੱਬ ਪਟਿਆਲਾ</h3>

<p>
18 ਅਪ੍ਰੈਲ 2026 <br/>
ਗੁਰਦੁਆਰਾ ਸ਼੍ਰੀ ਦੂਖਨਿਵਾਰਨ ਸਾਹਿਬ ਪਟਿਆਲਾ
</p>

<b>ਸਿਰਫ ਪਟਿਆਲਾ ਜਿਲ੍ਹੇ ਦੇ ਬੱਚਿਆਂ ਲਈ</b>

<h3>Online Registration</h3>

<form onSubmit={submit}>

<input placeholder="ਨਾਮ" required/><br/><br/>

<input placeholder="ਉਮਰ" required/><br/><br/>

<select required>

<option>Category</option>
<option>7-15</option>
<option>16-30</option>
<option>Dumala Girls</option>

</select><br/><br/>

<input placeholder="Phone Number" required/><br/><br/>

<button type="submit">
Register
</button>

</form>

<h2>{token && "Token Number: "+token}</h2>

</div>

)

}
