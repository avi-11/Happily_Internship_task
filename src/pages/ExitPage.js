import React, { useDebugValue, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const ExitPage=()=>{
    const location=useLocation()
    
    return(
        <div>
            <div className="my-8 bg-slate-400 text-white grid grid-rows-2 grid-cols-2 p-4 rounded-md shadow-lg">
            <h1 className="m-2">Name</h1>
            <h1 className="m-2">{location.state.name}</h1>
            <h1 className="m-2">Age</h1>
            <h1 className="m-2">21</h1>
            </div>
            <h1>Your name Avaneesh aged 21 has been added to student system.</h1>
            <div className="flex justify-center">
            <Link to="/">
            <p className="bg-blue-700 text-white font-semibold py-3 px-6 inline-block rounded-full">Exit</p>
            </Link>
        </div>
        </div>
    );
}

export default ExitPage;