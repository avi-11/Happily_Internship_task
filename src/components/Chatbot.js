import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Chatbot=()=>{

    const navigate=useNavigate();

    const [msg,setMsg]=useState({
        welcome:false,
        name:false,
        age:false,
        exit:false,
        name:'avaneesh'
    });
    
    

    useEffect(()=>{
        setTimeout(()=>{
            setMsg({...msg,welcome:true});
        },3000);

        setMsg({
            welcome:false,
            name:false,
            age:false,
            exit:false
        })
    },[])

   
    
    return(
        <div>
            {msg.welcome?<h1>Hello, Welcome to student info system</h1>:<h1>...</h1>}
            {msg.welcome?<div onClick={()=>setMsg({...msg,name:true})}>got it</div>:null}

            {msg.name?<h1>Enter your name</h1>:null}
            {msg.name?<input onClick={()=>setMsg({...msg,age:true})} type="text"/>:null}

            {msg.age?<h1>enter your age</h1>:null}
            {msg.age?<input onClick={()=>{
                setMsg({...msg,exit:true})
                setTimeout(()=>{
                    navigate('/exit',{state:msg});
                },5000);
            }} type="number"/>:null}

            {msg.exit?<h1>Thank you. In 5 seconds, bot will exit</h1>:null}

        </div>
    );
}

export default Chatbot;