import React from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import {useDispatch, useSelector } from "react-redux";



const HomePage=()=>{
    const data=useSelector(state=>state.student.value);
    
    
return(
    <div>
        <h1 className="text-center text-xl font-bold mx-4 my-8">Student Information System</h1>
        <div className="m-4">
            {data.map(item=>(
                <Card name={item.Name} age={item.Age}/>
            ))}
        </div>
       
        <div className="flex fixed bottom-6 right-2 justify-center">
            <Link to="chatbot">
            <p className="bg-blue-700 text-white font-semibold py-3 px-6 inline-block rounded-full">Enroll</p>
            </Link>
        </div>
    </div>
);
}

export default HomePage;