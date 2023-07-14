import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import {useNavigate } from "react-router-dom";
import { addStudent } from "../reducer/StudentSlice";



const Chatbot=()=>{

    const navigate=useNavigate();
    const dispatch=useDispatch();

    const ageArray=Array.from({length: 23}, (_, i) => i + 18)

    const [user,setUser]=useState({Name:"",Age:""});
    
    const [cnt,setCnt]=useState(null);

    const [bot,setBot]=useState({
        botEntry:true,
        botName:false,
        botAge:false,
        botExit:false,
        entry:"...",
        name:"...",
        age:"...",
    });

    useEffect(()=>{
        setTimeout(() => {
            setBot({...bot,entry:"hello welcome"});
        }, 3000);
        ageArray.map(i=>console.log(i))
    },[])

    useEffect(() => {
        if(cnt===0){
           setCnt(null)
        }
    
        // exit early when we reach 0
        if (!cnt) return;
    
        // save intervalId to clear the interval when the
        // component re-renders
        const intervalId = setInterval(() => {
    
          setCnt(cnt - 1);
        }, 1000);
    
        // clear interval on re-render to avoid memory leaks
        return () => clearInterval(intervalId);
        // add timeLeft as a dependency to re-rerun the effect
        // when we update it
      }, [cnt]);

    const botState={
        getEntry:()=>{
            setBot({...bot,botName:true});
            setTimeout(() => {
                setBot({...bot,name:"Enter your name",botName:true});
            }, 3000);
        },
        getName:()=>{
            setBot({...bot,botAge:true});
            setTimeout(() => {
                setBot({...bot,age:"Enter your age",botAge:true});
            }, 3000);
        },
        getAge:()=>{
            setBot({...bot,botExit:true});
            setCnt(5);
            dispatch({type:addStudent,payload:user});
            setTimeout(()=>{
               navigate('/exit',{state:user});
            },5000)
            
        }
    }

    return(
        <div>
            <h1 className="text-center my-8 font-bold text-2xl">Help Bot</h1>
            {bot.botEntry?<div className="flex justify-start"><h1 className="bg-blue-600 p-4 w-1/2 mx-2 my-4 rounded-lg text-white text-center">{bot.entry}</h1></div>:null}
            {bot.botEntry && bot.entry!=="..."?<div className="flex justify-end"><p className="bg-green-600 p-4 w-1/2 mx-2 my-4 rounded-lg text-white text-center" onClick={()=>botState.getEntry()}>got it</p></div>:null}

            {bot.botName?<div className="flex justify-start"><h1 className="bg-blue-600 p-4 w-1/2 mx-2 my-4 rounded-lg text-white text-center">{bot.name}</h1></div>:null}
            {bot.botName && bot.name!=="..."?<div className="flex flex-col items-end mx-2 my-4">
                <input className="text-center p-4 shadow-xl rounded-3xl" placeholder="your name" onChange={(e)=>setUser({...user,Name:e.target.value})} type="text"/>
                <div className="flex justify-center"><p className="bg-green-600 text-white font-semibold mt-4 py-1 px-3 inline-block rounded-lg" onClick={()=>botState.getName()}>submit</p></div>
            </div>:null}

            {bot.botAge?<div className="flex justify-start"><h1 className="bg-blue-600 p-4 w-1/2 mx-2 my-4 rounded-lg text-white text-center">{bot.age}</h1></div>:null}
            {bot.botAge && bot.age!=="..."?<div className="flex flex-col items-end mx-2 my-4">
            <select className="px-10 py-5 shadow-xl rounded-3xl"  onClick={(e)=>setUser({...user,Age:e.target.value})}>{
              ageArray.map( (x) => 
                <option value={x} key={x}>{x}</option> )
            }</select>
            <div className="flex justify-center"><p className="bg-green-600 text-white font-semibold mt-4 py-1 px-3 inline-block rounded-lg" onClick={()=>botState.getAge()}>submit</p></div>
                
            </div>:null}

            {bot.botExit?<div className="flex justify-start"><h1 className="bg-blue-600 p-4 w-1/2 mx-2 my-4 rounded-lg text-white text-center">bot will exit in {cnt}</h1></div>:null}
        </div>
    );
}

export default Chatbot;