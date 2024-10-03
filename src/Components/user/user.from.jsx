import { Button, Input, notification } from "antd";
import { useState } from "react";
import { createUserAPI } from "../../servcies/api.servcies";
const UserFrom =()=>{
    const [fullName ,setFullName]= useState("") ;
    const [email, setEmail] = useState("");
    const [password, setPassword] =useState("");
    const [phone,setPhoneNumber]= useState("");
       
    const handleClickBtn = async () => {
        const res = await createUserAPI(fullName, email, password, phone);
        if (res.data) {
            notification.success({
                message: "create user",
                description: "Tạo user thành công"
            })
        }
        else {
            notification.error({
                message: "Error create user",
                description: JSON.stringify(res.message)
            })
        }

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

