import { Button, Input } from "antd"
import { useState } from "react"

const UserFrom =()=>{
    const [fullName ,setFullName]= useState("") ;
    const [email, setEmail] = useState("");
    const [password, setPassword] =useState("");
    const [phoneNumber,setPhoneNumber]= useState("");
    console.log(">>>>>>>>>>>>>>>>>>>>>");
    
    const handleClickBtn = ()=>{
        alert("click me ")
    } 
    
    return(  
    <div className="user-from" style={{margin :"20px 0px"}}>
        <div  style={{display:"flex" ,gap :"15px", flexDirection: "column"}}>
            <div> 
                <span> User Name</span>
                <Input 
                value={fullName}
                 placeholder="text" 
                onChange={(event)=>{setFullName( event.target.value)}}
                />  
             </div>
            <div> 
                <span> Email</span>
                <Input
                value={email}
                 placeholder="text"
                onChange={(event)=>{setEmail(event.target.value)}}        
                 />
           </div>
            <div> 
                <span>Password</span>
                <Input.Password 
                value={password} 
                placeholder="text"
                onChange={(event)=>{setPassword(event.target.value)}}
                />   
            </div>
            <div> 
                <span> Phone Number</span>
                <Input placeholder="text"
                value={phoneNumber} 
                onChange={(event)=>{setPhoneNumber(event.target.value)}}
                />   
            </div>
            <div> <Button type="primary" onClick={()=>{handleClickBtn}}>Creat User</Button></div>
        </div>
    </div> 
    )
}
export { UserFrom }
