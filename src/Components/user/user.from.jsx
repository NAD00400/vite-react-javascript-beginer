import { Button, Input } from "antd";
import axios from "axios";
import { useState } from "react";

const UserFrom =()=>{
    const [fullName ,setFullName]= useState("") ;
    const [email, setEmail] = useState("");
    const [password, setPassword] =useState("");
    const [phone,setPhoneNumber]= useState("");
       
    const handleClickBtn = ()=>{
        const URL_BACKEND = "http://localhost:8080/api/v1/user" 
        const data = {
            fullName: fullName,
            email :email,
            password:password,
            phone:phone
            /// 1 cách viết khác của phần bên trong data là { fullName, email, password, phoneNumber }
         };
        axios.post(URL_BACKEND,data);
        console.log(">>>> check data :", {fullName ,email,password,phone});// cho cái đống shit này thành đối tượng để dễ nhìn thôi thay vì hiện 1 nùi data    
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
                value={phone} 
                onChange={(event)=>{setPhoneNumber(event.target.value)}}
                />   
            </div>
            <div> <Button type="primary" onClick={()=>{handleClickBtn()}}>Creat User</Button></div>
        </div>
    </div> 
    )
}
export { UserFrom };

