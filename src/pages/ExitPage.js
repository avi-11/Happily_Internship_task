import React, { useDebugValue, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const ExitPage=()=>{
    const location=useLocation()
    
    return(
        <div className="flex flex-col h-screen justify-center items-center">
            <div className="bg-slate-400 text-white grid grid-rows-2 grid-cols-2 p-4 mx-4 rounded-md shadow-lg">
            <h1 className="m-2">Name</h1>
            <h1 className="m-2">{location.state.Name}</h1>
            <h1 className="m-2">Age</h1>
            <h1 className="m-2">{location.state.Age}</h1>
            </div>
            <h1 className="text-center m-4">Your name {location.state.name} aged {location.state.Age} has been added to student system.</h1>
            <div className="flex justify-center">
            <Link to="/">
            <p className="bg-blue-700 text-white font-semibold py-3 px-6 inline-block rounded-full">Exit</p>
            </Link>
        </div>
        </div>
    );
}

export default ExitPage;